const router = require('express').Router();
// Import Comment model from the '../../models' 
const { Comment } = require('../../models');

// Route for rendering the comment form
router.get('/', async (req, res) => {
  res.render('comment');
});

// Route to create new comment
router.post('/', async (req, res) => {
  try {
    // Create new comment using data from request body
    const comment = await Comment.create(req.body);
    // Respond with created comment 
    res.status(200).json(comment);
  } catch (err) {
    // Handle any errors that occur during comment creation
    res.status(500).json(err);
  }
});

module.exports = router;