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
  console.log("req headers:   asdasdas", req.headers.authorization)
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

// router.get("/", (req, res, next) => {
//   const id = req.params.id;
//   console.log("i am wierd ", id);
//   const increaseCountSql = `update news set views_count = views_count + 1 where id=${id}`;
//   db.query(increaseCountSql, (err, result) => {
//     if (err) {
//       console.log("increaseCountSql Error: ", err);
//     } else {
//       console.log("increaseCountSql success: ", result);
//     }
//   });

//   const sql = `select * from news where id=${id} order by id desc`;
//   console.log("sql: ", sql);
//   db.query(sql, (err, result) => {
//     if (err) {
//       res.status(409).send("error in query function");
//     } else {
//       // console.log(result[0]);
//       // result = JSON.stringify(result)
//       // // console.log("stringify",result );
//       // result = JSON.parse(result)
//       // // console.log("parsed",result );
//       res.status(200).send(result[0]);
//     }
//   });
// });

// router.get("/data/related/:id", (req, res, next) => {
//   const id = req.params.id;
//   // const tags = req.params.tags;
//   // let ress = tags.split(",")
//   // // let tag = string(ress)
//   // console.log("i am wierd ", ress);
//   const sql = `select * from news where id = ${id} order by id desc`;
//   console.log("sql: ", sql);
//   db.query(sql, (err, result) => {
//     if (err) {
//       res.status(409).send("error in query function");
//     } else {
//       tags = result[0].tags;
//       console.log("Tags", tags);
//       ress = tags.split(",");
//       console.log("Ress", ress);
//       let tagsName = "";
//       ress.forEach(element => {
//         tagsName = tagsName + `"${element}",`;
//       });
//       tagsName = tagsName.slice(0, -1);
//       console.log("tagsName", tagsName);
//       const sql = `select * from news where tags in (${tagsName}) order by id desc`;
//       console.log("sqllll ", sql);
//       db.query(sql, (err, result) => {
//         if (err) {
//           res.status(409).send("error in query function");
//         } else {
//           // console.log(result[0]);
//           // result = JSON.stringify(result)
//           // // console.log("stringify",result );
//           // result = JSON.parse(result)
//           // // console.log("parsed",result );
//           res.status(200).send(result);
//         }
//       });
//     }
//   });
// });

module.exports = router;
