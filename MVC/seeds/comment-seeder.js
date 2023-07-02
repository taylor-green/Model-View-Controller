const { Comment } = require('../models');
const commentData = [
    {
        commentText: "This is a comment",
        userId: 1,
        postId: 2,
    },
    {
        commentText: "This is another comment",
        userId: 2,
        postId: 1,
    },
];

const seedComments = () => {
    // Bulk create the comments using the commentData array
    return Comment.bulkCreate(commentData);
  };
  
 
  module.exports = seedComments;
