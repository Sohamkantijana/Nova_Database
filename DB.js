// Database Connection
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false
  }
);

module.exports = sequelize;

//Sync All Models:-for reference 
const sequelize = require('./db');
const User = require('./models/User'); // Example
const Product = require('./models/Product'); // Example

// import all models here...

sequelize.sync({ alter: true }) // or { force: true } for development
  .then(() => console.log("Database synced"))
  .catch(err => console.error("Database sync failed", err));

