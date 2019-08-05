const express = require("express");
const router = express.Router();
const db = require("../bin/db");

router.get("/", (req, res, next) => {
    const sql = `select * from news where tags like ("%global%") order by id desc`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(409).send("error in query function");
      } else {
        console.log("Abcd: ", result);
        res.status(200).send(result);
      }
    });
  });
  
  module.exports = router;