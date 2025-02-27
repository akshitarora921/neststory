const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const privateKEY = fs.readFileSync("keys/private.key", "utf8");
const publicKEY = fs.readFileSync("keys/public.key", "utf8");

//Login
router.post("/", (req, res) => {
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
      res.status(409).json({ err: err });
    } else {
      if (result.length == 0) {
        //user doesnot exist
        // console.log("result=", result[0]);
        res.status(401).json({ err: "user doesnot exist" });
      } else {
        //user exists
        // console.log("user exists");
        let resultData = JSON.stringify(result[0]);
        if (bcrypt.compareSync(req.body.password, result[0].password)) {
          let token = jwt.sign(resultData, privateKEY, { algorithm: "RS256" });
          userData["user_id"] = result[0].user_id;
          userData["first_name"] = result[0].first_name;
          userData["token"] = token;
          // console.log(userData);
          res.status(200).json({
            data: JSON.stringify(userData),
            msg: "successfully login"
          });
        } else {
          res.status(401).json({ msg: "Password does not match" });
        }
      }
    }
  });
});
module.exports = router;
