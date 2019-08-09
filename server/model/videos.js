const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");
const path = require("path");

// const storageStrategy = multer.diskStorage({
//   destination: "./public/image/videos",
//   filename: function(req, file, cb) {
//     videosFileName = Date.now() + "_" + file.originalname;
//     console.log("===>", videosFileName);
//     cb(null, videosFileName);
//   }
// });
// var upload = multer({
//   storage: storageStrategy
// }).fields([
//   { name: "videosFile", maxCount: 1 },
//   { name: "videoThumbnail", maxCount: 1 }
// ]);
// getDate = () => {
//   let today = new Date();
//   let dd = today.getDate();
//   let mm = today.getMonth()+1;
//   let yyyy = today.getFullYear();
//   if (dd < 10) dd = "0" + dd;
//   if (mm < 10) mm = "0" + mm;
//   today = yyyy + "-" + mm + "-" + dd;
//   return today;
// };

// router.post("/new", async (req, res) => {
//   await upload(req, res, err => {
//     if (err) {
//       console.log("Upload err: ", err);
//       res.status(409).send("err");
//     } else {
//       // console.log(video)
//       //  console.log("asdfghjklhgfdsa",req.files.videoThumbnail);
//       const sql = `insert into videos (videos, heading, author, publish_date, video_thumbnail ) values("${
//         req.files.videosFile[0].filename
//       }", "${req.body.videosHeading}","${
//         req.body.videosAuthor
//       }", DATE '${getDate()}',"${req.files.videoThumbnail[0].filename}")`;
//       db.query(sql, (err, result) => {
//         if (err) {
//           console.log("sql err", err);
//           res.status(409).send("error in query function");
//         } else {
//           console.log(result);
//           res.status(200).send(result);
//         }
//       });
//     }
//   });
// });

router.get("/data", (req, res, next) => {
  const sql = `select video, image, heading, author, date, sub_category from news where category="video" order by id desc`;
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
