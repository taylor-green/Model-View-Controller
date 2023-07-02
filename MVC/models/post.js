// Import the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the connection instance
const sequelize = require('../config/connection');

// Create the Post model by extending the Sequelize Model class
class Post extends Model {}

// Define the Post model fields and configuration
Post.init(
  {
    // Define the id field as an integer primary key that auto-increments
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the title field as a string
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the content field as a text
    content: {
      type: DataTypes.TEXT,
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
  },
  {
   
    sequelize,
    modelName: 'post',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  }
);

module.exports = Post;