const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");
const path = require("path");

  
router.get("/data", (req, res, next) => {
  const sql = `select id, heading, content, image, date, author, trending from news order by id desc `;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(409).send("error in query function");
    } else {
      // console.log(result);
      res.status(200).send(result);
    }
  });
});

module.exports = router;
