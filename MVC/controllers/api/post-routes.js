const router = require('express').Router();
const { Post, User, Comment } = require('../models');



router.get('/', async (req, res) => {
  try {
    
    const post = await Post.findAll({
      include: [{ model: User, attributes: ['name'] }],
    });
    const postData = post.map((post) => post.get({ plain: true }));
    // Render 'posts' template with retrieved posts data
    res.render('posts', {
      postData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for updating post by ID
router.put('/:id', async (req, res) => {
  try {
    // Update the post description with the provided ID
    const post = await Post.update(
      { description: req.body.description },
      { where: { id: req.params.id } }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for creating new post
router.post('/', async (req, res) => {
  try {
 
    const post = await Post.create({
      ...req.body,
      created_by: req.session.user_id,
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for rendering the comment form for a specific post
router.get('/:id/comment', async (req, res) => {
  try {
    // Retrieve the post with associated user name for the provided ID
    const post = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['name'] }],
    });
    const postData = post.get({ plain: true });
    // Render the 'comment' template with the retrieved post data
    res.render('comment', {
      ...postData,
      logged_in: req.session.logged_in,
      logged_user_name: req.session.user_name,
      logged_user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for rendering a specific post with associated user name and comments
router.get('/:id', async (req, res) => {
  try {
    // Retrieve the post with associated user name and comments for the provided ID
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: User },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['name'],
          },
        },
      ],
    });
    const postData = post.get({ plain: true });
    // Render the 'post' template with the retrieved post data
    res.render('post', {
      ...postData,
      logged_in: req.session.logged_in,
      logged_user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    
    const post = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;