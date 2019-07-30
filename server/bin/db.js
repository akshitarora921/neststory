var mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PASSWORD",
  database: "neststory",
  port: "3306"
});

module.exports = conn;

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('neststory', 'root', 'PASSWORD', {
//   host: 'localhost',
//   dialect: 'mysql'
// });
// const sequelize = new Sequelize(/* ... */, {
//   // ...
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });