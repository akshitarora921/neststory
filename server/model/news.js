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
  let mm = today.getMonth();
  let yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  today = yyyy + "-" + mm + "-" + dd;
  return today;
};

router.post("/new", async (req, res) => {
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
      if (req.files.image == undefined) {
        //not image onlyvideo an video thumbnail

        //  ==============================invalid 404 err=====================
        // sql = `insert into news (heading, content, author, date, image, video, zone, tags, category,sub_category, trending ) values("${
        //   req.body.heading
        //   }","${req.body.content}","${
        //   req.body.author
        //   }", DATE '${getDate()}',"","${req.files.video[0].filename}","${
        //   req.files.videoThumbnail[0].filename
        //   }", "${req.body.zone}","${req.body.tags}","${req.body.category}","${
        //   req.body.subCategory
        //   }","${req.body.trending}")`;
        res.status(409).json({ err: "image iis not uploaded" });
      } else {
        if (req.files.video == undefined) {
          //not video

          //  ==============================invalid 404 err=====================
          sql = `insert into news (heading, content, author, date, image, video, zone, tags, category,sub_category, trending ) values("${
            req.body.heading
          }","${req.body.content}","${req.body.author}", DATE '${getDate()}',"${
            req.files.image[0].filename
          }", "", "${req.body.zone}","${req.body.tags}","${
            req.body.category
          }","${req.body.subCategory}","${req.body.trending}")`;
        } else {
          sql = `insert into news (heading, content, author, date, image, video, zone, tags, category,sub_category, trending ) values("${
            req.body.heading
          }","${req.body.content}","${req.body.author}", DATE '${getDate()}',"${
            req.files.image[0].filename
          }","${req.files.video[0].filename}","${req.body.zone}","${
            req.body.tags
          }","${req.body.category}","${req.body.subCategory}","${
            req.body.trending
          }")`;
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

router.get("/data/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("i am wierd ", id);
  const increaseCountSql = `update news set views_count = views_count + 1 where id=${id}`
  db.query(increaseCountSql,(err, result)=>{
    if(err){
      console.log("increaseCountSql Error: ", err)
    }
    else{
      console.log("increaseCountSql success: ", result)
    }
  })

  const sql = `select * from news where id=${id} order by id desc`;
  console.log("sql: ", sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.status(409).send("error in query function");
    } else {
      // console.log(result[0]);
      // result = JSON.stringify(result)
      // // console.log("stringify",result );
      // result = JSON.parse(result)
      // // console.log("parsed",result );
      res.status(200).send(result[0]);
    }
  });
});


router.get("/data/related/:id", (req, res, next) => {
  const id = req.params.id;
  // const tags = req.params.tags;
  // let ress = tags.split(",")
  // // let tag = string(ress)
  // console.log("i am wierd ", ress);
  const sql = `select * from news where id = ${id} order by id desc`;
  console.log("sql: ", sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.status(409).send("error in query function");
    } else {
      tags= result[0].tags;
      console.log("Tags", tags)
      ress = tags.split(",")
      console.log("Ress", ress)
      let tagsName=""
      ress.forEach(element => {
        tagsName= tagsName + `"${element}",`
      });
      tagsName = tagsName.slice(0,-1)
      console.log("tagsName", tagsName)
      const sql = `select * from news where tags in (${tagsName}) order by id desc`;
      console.log("sqllll ", sql)
      db.query(sql, (err, result) => {
        if (err) {
          res.status(409).send("error in query function");
        } else {
          // console.log(result[0]);
          // result = JSON.stringify(result)
          // // console.log("stringify",result );
          // result = JSON.parse(result)
          // // console.log("parsed",result );
          res.status(200).send(result);
        }
      });
    }
  });
});


module.exports = router;
