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
  { name: "mentorImage", maxCount: 1 }
]);
getDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //gives last months so we have to add 1
  let yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  today = yyyy + "-" + mm + "-" + dd;
  console.log("date: ", today);
  return today;
};

// Mentors
router.post("/", async (req, res) => {
  await upload(req, res, err => {
    if (err) {
      console.log("Upload err: ", err);
      res.status(409).send("err");
    } else {
      let sql = "";
      // if (req.files.image == undefined && req.files.video == undefined) {
      //   //not image not video
      //   res; // invalid 404 err
      // } else

      sql = `insert into mentors (launchpad_id, name, designation, image, user_id) values("${
        req.body.launchpadId
      }","${req.body.mentorName}","${req.body.mentorDesg}","${
        req.files.mentorImage[0].filename
      }","${
        req.body.userIdx
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

// Mentor get perticular id
router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  const sql = `select name, designation, image from mentors where launchpad_id=${id}`;
  console.log("sql: ", sql);
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
