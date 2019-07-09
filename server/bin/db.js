var mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PASSWORD",
  database: "neststory",
  port: "3306"
});

module.exports = conn;