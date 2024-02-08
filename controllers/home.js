const router = require('express').Router();
const { Post } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('layouts/main')
    // const postData = await Post.findAll({
    //   include: [
    //     {
    //         model: 'post',
    //         attribute: ['title', 'message', 'date_created', 'user_id']
    //     }
    //   ]
    // });

    // const posts = postData.map((post) => post.get({ plain: true }));

    // res.render('main', {
    //   posts,
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;