const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");

const storageStrategy = multer.diskStorage({
  destination: "./public/image/entrepreneurship",
  filename: function(req, file, cb) {
    entrepreneurshipFileName = Date.now() + "_" + file.originalname;
    console.log("===>", entrepreneurshipFileName);
    cb(null, entrepreneurshipFileName);
  }
});
const upload = multer({
  storage: storageStrategy
}).single("entrepreneurshipFile");

router.post("/new", async (req, res) => {
  await upload(req, res, err => {
    if (err) {
      console.log("Upload err: ", err);
      res.status(409).send("err");
    } else {
        console.log(req.body)
      const sql = `insert into entrepreneurship (image, heading, content) values("${entrepreneurshipFileName}", "${req.body.entrepreneurshipHeading}","${req.body.entrepreneurshipContent}")`;
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
  const sql = `select * from entrepreneurship order by id desc limit 3`;
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