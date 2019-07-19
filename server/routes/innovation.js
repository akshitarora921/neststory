const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");

const storageStrategy = multer.diskStorage({
  destination: "./public/image/innovation",
  filename: function(req, file, cb) {
    innovationFileName = Date.now() + "_" + file.originalname;
    console.log("===>", innovationFileName);
    cb(null, innovationFileName);
  }
});
const upload = multer({
  storage: storageStrategy
}).single("innovationFile");

router.post("/new", async (req, res) => {
  await upload(req, res, err => {
    if (err) {
      console.log("Upload err: ", err);
      res.status(409).send("err");
    } else {
      const sql = `insert into innovation (image, image_heading) values("${innovationFileName}", "${req.body.innovationHeading}")`;
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
  const sql = `select * from innovation order by id desc limit 10`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log("sql err", err);
      res.status(409).send("error in query function");
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  });
});

module.exports = router;