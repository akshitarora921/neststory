const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");
const path = require("path");
// import {thresholdViewsCount} from "../.config/env"

router.get("/data", (req, res, next) => {
  const sql = `select id,image,video,heading from news where views_count>5 order by views_count limit 4`;
  db.query(sql, (err, result) => {
    if (err) {
      // console.log("sql err", err);
      res.status(409).send("error in query function");
    } else {
      // console.log("Resultsssss",JSON.stringify(result));
      res.status(200).send(JSON.stringify(result));
    }
  });
});

module.exports = router;

