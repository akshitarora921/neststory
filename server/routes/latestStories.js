const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");
const path = require("path");


const storageStrategy = multer.diskStorage({
    destination: "./public/image/lateststories",
    filename: function(req, file, cb) {
      lsFileName = Date.now() + "_" + file.originalname;
      console.log("===>", lsFileName);
      cb(null, lsFileName);
    }
  });
  const upload = multer({
    storage: storageStrategy
  }).single("lsFile");

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
  
router.post("/new", async (req, res) => {
    await upload(req, res, err => {
      if (err) {
        console.log("Upload err: ", err);
        res.status(409).send("err");
      } else {
        const sql = `insert into latest_stories (image, news_heading, news_content, author, date_of_publish, trending  ) values("${lsFileName}", "${req.body.lsHeading}","${req.body.lsContent}","${req.body.lsAuthor}", DATE '${getDate()}',"${req.body.lsTrending}")`;
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
  
  router.get("/data", (req, res, next) => {
    const sql = `select * from banner`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(409).send("error in query function");
      } 
    });
  });
  
  module.exports = router;