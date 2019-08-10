const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");
const path = require("path");

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
  { name: "image", maxCount: 3 },
  { name: "video", maxCount: 1 }
  // { name: "videoThumbnail", maxCount: 1 },
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

router.post("/new", async (req, res) => {
  console.log("test message")
  await upload(req, res, err => {
    if (err) {
      console.log("Upload err: ", err);
      res.status(409).send("err");
    } else {
      console.log("j,nf,masdnf,masndg,absdgasbdgasdbf",req.body.content)
      let sql = "";
      if (req.files.image == undefined) {
        //not image
        res.status(409).json({ err: "image is not uploaded" });
      } else {
        if (req.files.video == undefined) {
          //not video
          sql = `insert into news (heading, content, author, date, image, video, zone, tags, category,sub_category, trending, user_id ) values("${
            req.body.heading
          }","${req.body.content}","${req.body.author}", DATE '${getDate()}',"${
            req.files.image[0].filename
          }", "", "${req.body.zone}","${req.body.tags}","${
            req.body.category
          }","${req.body.subCategory}","${req.body.trending}","${
            req.body.userId
          }")`;
        } else {
          //both image and video
          sql = `insert into news (heading, content, author, date, image, video, zone, tags, category,sub_category, trending, user_id ) values("${
            req.body.heading
          }","${req.body.content}","${req.body.author}", DATE '${getDate()}',"${
            req.files.image[0].filename
          }","${req.files.video[0].filename}","${req.body.zone}","${
            req.body.tags
          }","${req.body.category}","${req.body.subCategory}","${
            req.body.trending
          }","${req.body.userId}")`;
        }
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
    }
  });
});

//get news of perticular id
router.get("/data/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("i am wierd ", id);
  const increaseCountSql = `update news set views_count = views_count + 1 where id=${id}`;
  db.query(increaseCountSql, (err, result) => {
    if (err) {
      console.log("increaseCountSql Error: ", err);
    } else {
      console.log("increaseCountSql success: ", result);
    }
  });
  const sql = `select * from news where id=${id} order by id desc`;
  console.log("sql: ", sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.status(409).send("error in query function");
    } else {
      res.status(200).send(result);
    }
  });
});

// to get related News
router.get("/data/related/:id", (req, res, next) => {
  const id = req.params.id;
  const sql = `select * from news where id = ${id} order by id desc`;
  console.log("sql: ", sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.status(409).send("error in query function");
    } else {
      tags = result[0].tags;
      console.log("Tags", tags);
      ress = tags.split(",");
      console.log("Ress", ress);
      let tagsName = "";
      ress.forEach(element => {
        tagsName = tagsName + `"${element}",`;
      });
      tagsName = tagsName.slice(0, -1);
      console.log("tagsName", tagsName);
      const sql = `select * from news where tags in (${tagsName}) order by id desc`;
      console.log("sqllll ", sql);
      db.query(sql, (err, result) => {
        if (err) {
          res.status(409).send("error in query function");
        } else {
          res.status(200).send(result);
        }
      });
    }
  });
});

module.exports = router;
