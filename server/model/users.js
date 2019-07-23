const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKEY = fs.readFileSync("keys/private.key", "utf8");
const publicKEY = fs.readFileSync("keys/public.key", "utf8");
router.post("/signup", (req, res) => {
  if (req.body == null) {
    res.status(404).send("req not recieved");
  } else {
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      created: req.body.created
    };
    //find if user already exist or not
    let sql = `select email from users where email="${userData.email}"`;
    db.query(sql, (err, result) => {
      if (err) {
        console.log("sql err", err);
        res.status(409).send(err);
      } else {
        if (result.length == 0) {
          console.log("userData", userData);
          const hash = bcrypt.hashSync(userData.password, 10);
          userData.password = hash;
          sql = `insert into users (first_name, last_name, email, password) values("${
            userData.first_name
          }","${userData.last_name}","${userData.email}","${
            userData.password
          }")`;
          db.query(sql, (err, result) => {
            if (err) {
              console.log("sql err", err);
              res.status(409).send("error in query function");
            } else {
              res.status(200).send("user created successfully");
            }
          });
        } else {
          console.log("user already exits");
          console.log("res============", result[0]);
          res.status(401).send("user already exists");
        }
      }
    });
  }
});

//Login
router.post("/login", (req, res) => {
  if (req.body == null) {
    res.status(404).send("req not recieved");
  } else {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
    console.log("user data:  ", userData);
    //find if user already exist or not
    let sql = `select * from users where email="${userData.email}"`;
    console.log("sql", sql);
    db.query(sql, (err, result) => {
      if (err) {
        console.log("sql err", err);
        res.status(409).send(err);
      } else {
        if (result.length == 0) {
          //user doesnot exist
          console.log("result=", result);
          res.status(401).send("user doesnot exist");
        } else {
          //user exists
          console.log("user exists");
          let resultData = JSON.stringify(result[0]);
          console.log("result=", resultData);
          if (bcrypt.compareSync(req.body.password, result[0].password)) {
            let token = jwt.sign(resultData, privateKEY);
            console.log(token);
            res.json({token:token})
          }
          else{
            res.send("user does not exist")
          }
        }
      }
    });
  }
});
module.exports = router;
