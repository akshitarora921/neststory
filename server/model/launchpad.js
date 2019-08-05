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
  { name: "lpVideoThumbnail", maxCount: 1 },
  { name: "mentorImage", maxCount: 1 },
  { name: "lpVideo", maxCount: 1 }
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

      sql = `insert into launchpad (launchpad_id, heading, content, video, video_thumbnail) values("${
        req.body.lpId
      }","${req.body.lpHeading}","${req.body.lpContent}","${
        req.files.lpVideo[0].filename
      }","${req.files.lpVideoThumbnail[0].filename}")`;

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

// Mentors
router.post("/mentor", async (req, res) => {
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

      sql = `insert into mentors (launchpad_id, name, designation, image) values("${
        req.body.launchpadId
      }","${req.body.mentorName}","${req.body.mentorDesg}","${
        req.files.mentorImage[0].filename
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

// launchpad get
router.get("/mentor/:id", (req, res, next) => {
    let id = req.params.id
    const sql = `select name, designation, image from mentors where launchpad_id=${id}`;
    console.log("sql: ", sql)
    db.query(sql, (err, result) => {
      if (err) {
        res.status(409).send("error in query function");
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    });
  });


// mentor get
router.get("/", (req, res, next) => {
    const sql = `select launchpad_id, heading, content, video, video_thumbnail from launchpad order by launchpad_id desc limit 1 `;
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
