//Importing sequalize
const Sequelize = require('sequelize');
// Enable access to .env variables
require('dotenv').config();

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Create a Sequelize instance using environment variables for database connection
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      }
  );
}
  
// Export the created Sequelize instance for use in other modules
module.exports = sequelize;