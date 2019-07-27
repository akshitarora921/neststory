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
  // console.log("request    ==========", req.headers.token);
  jwt.verify(req.headers.token, publicKEY, { algorithm: 'RS256'}, (err, data) => {
    if (err) {
      console.log("errr=======", err);
      if (req.body == null) {
        res.status(404).json({ err: "req not recieved" });
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
            res.status(409).json({ err: err });
          } else {
            if (result.length == 0) {
              //user doesnot exist
              console.log("result=", result);
              res.status(401).json({ err: "user doesnot exist" });
            } else {
              //user exists
              console.log("user exists");
              let resultData = JSON.stringify(result[0]);
              console.log("result=", resultData);
              if (bcrypt.compareSync(req.body.password, result[0].password)) {
                let token = jwt.sign(resultData, privateKEY, { algorithm: 'RS256'});
                userData["token"]= token
                // console.log(token);
                res
                  .status(200)
                  .json({ data: JSON.stringify(userData), msg: "successfully login" });
              } else {
                res.status(401).json({ err: "Password does not match" });
              }
            }
          }
        });
      }
    }
    else {
      res.status(200).json("token is valid logged in successful");
    }
  });
});
module.exports = router;
