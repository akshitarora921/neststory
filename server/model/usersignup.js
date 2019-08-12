const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

//toget current date
getDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth();
  let yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  today = yyyy + "-" + mm + "-" + dd;
  return today;
};

//Registration of new user
router.post("/", (req, res) => {
  if (req.body == null) {
    res.status(404).json({ msg: "req not recieved" });
  } else {
    //payload
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    };
    if (userData.password < 8)
      req.status(409).json({ err: "password should be greate than 8" });
    //find if user already exist or not
    let sql = `select email from users where email="${userData.email}"`;
    db.query(sql, (err, result) => {
      if (err) {
        // console.log("sql err", err);
        res.status(409).json({ err: err });
      } else {
        if (result.length == 0) {
          // console.log("userData", userData);
          const hash = bcrypt.hashSync(userData.password, 10);
          userData.password = hash;
          sql = `insert into users (first_name, last_name, email, password, created_date) values("${
            userData.first_name
          }","${userData.last_name}","${userData.email}","${
            userData.password
          }", DATE '${getDate()}')`;
          db.query(sql, (err, result) => {
            if (err) {
              res.status(409).json({ err: err });
            } else {
              res.status(200).json({ msg: "user created successfully" });
            }
          });
        } else {
          res.status(401).json({ err: "user already exists" });
        }
      }
    });
  }
});

module.exports = router;
