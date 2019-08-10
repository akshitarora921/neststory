const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");
const path = require("path");
const checkauth = require("../middleware/authtoken");

const storageStrategy = multer.diskStorage({
  destination: "./public/image/news",
  filename: function(req, file, cb) {
    FileName = Date.now() + "_" + file.originalname;
    console.log("===>", FileName);
    cb(null, FileName);
  }
});
var upload = multer({
  storage: storageStrategy
}).fields([
  { name: "lpVideoThumbnail", maxCount: 1 },
  { name: "lpVideo", maxCount: 1 }
  // { name: "videoThumbnail", maxCount: 1 },
]);

router.post("/", async (req, res) => {
  await upload(req, res, err => {
    if (err) {
      console.log("Upload err: ", err);
      res.status(409).send("err");
    } else {
      let sql = "";
      sql = `insert into launchpad ( heading, content, video, video_thumbnail, date, user_id) values("${req.body.lpHeading}","${req.body.lpContent}","${
        req.files.lpVideo[0].filename
      }","${req.files.lpVideoThumbnail[0].filename}","${req.body.lpDate}","${
        req.body.userId
      }")`;

      db.query(sql, (err, result) => {
        if (err) {
          console.log("sql err", err);
          res.status(409).send("error in query function");
        } else {
          console.log(result);
          res.status(200).send(result);
        }
      });
    }
  });
});

// Launchpad get all
router.get("/all", (req, res, next) => {
  const sql = `select launchpad_id, heading from launchpad order by launchpad_id `;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(409).send("error in query function");
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  });
});
// Launchpad get
router.get("/", (req, res, next) => {
  const sql = `select launchpad_id, heading, content, video, video_thumbnail, date from launchpad order by launchpad_id desc limit 1 `;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(409).send("error in query function");
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  });
});

module.exports = router;
