const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKEY = fs.readFileSync("keys/private.key", "utf8");
const publicKEY = fs.readFileSync("keys/public.key", "utf8");


getDate=()=>{
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth();
  let yyyy= today.getFullYear();
  if (dd<10)
    dd="0"+dd
  if(mm<10)
    mm="0"+mm
  today = yyyy +"-"+mm +"-"+dd;
  return today;
  }


//Registration of new user
router.post("/signup", (req, res) => {
  if (req.body == null) {
    res.status(404).json({"msg":"req not recieved"});
  } else {
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      created: req.body.created
    };
    if(userData.password<8)
      req.status(409).json({err:"password should be greate than 8"})
    //find if user already exist or not
    let sql = `select email from users where email="${userData.email}"`;
    db.query(sql, (err, result) => {
      if (err) {
        console.log("sql err", err);
        res.status(409).json({"err":err});
      } else {
        if (result.length == 0) {
          console.log("userData", userData);
          const hash = bcrypt.hashSync(userData.password, 10);
          userData.password = hash;
          sql = `insert into users (first_name, last_name, email, password, created) values("${
            userData.first_name
          }","${userData.last_name}","${userData.email}","${
            userData.password
          }", DATE '${getDate()}')`;
          db.query(sql, (err, result) => {
            if (err) {
              // console.log("sql err", err);
              res.status(409).json({"err":err});
            } else {
              res.status(200).json({"msg":"user created successfully"});
            }
          });
        } else {
          // console.log("user already exits");
          // console.log("res============", result[0]);
          res.status(401).json({"err":"user already exists"});
        }
      }
    });
  }
});

//Login
router.post("/login", (req, res) => {
  if (req.body == null) {
    res.status(404).json({err:"req not recieved"});
  } else {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
    // console.log("user data:  ", userData);
    //find if user already exist or not
    let sql = `select * from users where email="${userData.email}"`;
    // console.log("sql", sql);
    db.query(sql, (err, result) => {
      if (err) {
        // console.log("sql err", err);
        res.status(409).json({err:err});
      } else {
        if (result.length == 0) {
          //user doesnot exist
          console.log("result=", result);
          res.status(401).json({err:"user doesnot exist"});
        } else {
          //user exists
          console.log("user exists");
          let resultData = JSON.stringify(result[0]);
          console.log("result=", resultData);
          if (bcrypt.compareSync(req.body.password, result[0].password)) {
            let token = jwt.sign(resultData, privateKEY);
            // console.log(token);
            res.status(200).json({token:token, "msg":"successfully login"})
          }
          else{
            res.status(401).json({err:"Password does not match"})
          }
        }
      }
    });
  }
});
module.exports = router;
