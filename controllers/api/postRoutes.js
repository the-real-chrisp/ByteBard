const router = require('express').Router();
const { Post } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const exisitingPost = await Post.findByPk(req.param.id);

    res.status(200).json(exisitingPost);
  } catch (err) {
    res.status(400).json('')
  }
})

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});