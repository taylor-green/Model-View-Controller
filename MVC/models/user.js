// Importing Model and datatypes
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// Define the User model fields and configuration
class User extends Model {
  static associate(models) {
   
  }
}

User.init(
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
  
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // Define the password field as a string
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    
    sequelize,
    modelName: 'user',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  }
);


module.exports = User;