// Import the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the connection instance
const sequelize = require('../config/connection');

// Create the Comment model by extending the Sequelize Model class
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the commentText field as a string
    commentText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the userId field as an integer and set it as a foreign key referencing the User model
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // Define the postId field as an integer and set it as a foreign key referencing the Post model
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'comment',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  }
);


module.exports = Comment;