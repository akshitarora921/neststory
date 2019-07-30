const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");
const path = require("path");
// import {thresholdViewsCount} from "../.config/env"

// const storageStrategy = multer.diskStorage({
//   destination: "./public/image/banner",
//   filename: function(req, file, cb) {
//     bannerFileName = Date.now() + "_" + file.originalname;
//     console.log("===>", bannerFileName);
//     cb(null, bannerFileName);
//   }
// })
// const upload = multer({
//   storage: storageStrategy
// }).single("bannerFile");

// router.post("/new", async (req, res) => {
//   console.log(req)
//   await upload(req, res, err => {
//     if (err) {
//       console.log("Upload err: ", err);
//       res.status(409).send("err");
//     } else {
//       //PLEASE ALWAYS REFRESH IF USING WITH FRONTEND ELSE IT WILL GIVE ERROR
//       const sql = `insert into banner (image, caption, isVideo ) values("${req.file.filename}", "${req.body.bannerCaption}",${req.body.bannerIsVideo})`;
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
  const sql = `select image, heading from news where views_count>5 order by views_count limit 4`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log("sql err", err);
      res.status(409).send("error in query function");
    } else {
      console.log("Resultsssss",JSON.stringify(result));
      res.status(200).send(JSON.stringify(result));
    }
  });
});

module.exports = router;

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public/image");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     var filetype = "";
//     if (file.mimetype === "image/gif") {
//       filetype = "gif";
//     }
//     if (file.mimetype === "image/png") {
//       filetype = "png";
//     }
//     if (file.mimetype === "image/jpeg") {
//       filetype = "jpg";
//     }
//     cb(null, "image-" + Date.now() + "." + filetype);
//   }
// });

// //init file upload
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5000000 }, //5mb
//   fileFilter: function(req, file, cb) {
//     checkFileType(file, cb);
//   }
// });

// // check file type
// checkFileType = (file, cb) => {
//   //allowed extensions
//   const fileTypes = /jpg|jpeg|png|gif/;
//   //check ext
//   const extname = fileTypes.test(path.extname(file.originalname));
//   // check mime
//   const mimeType = fileTypes.test(file.mimetype);

//   if (mimeType && extname) return cb(null, true);
//   else cb("error: Images only");
// };

// // DashBoardpage
// router.post("/new", upload.single("image"), function(req, res, next) {
//   console.log(req.file);
//   if(!req.file) {
//     res.status(500);
//     return next(err);
//   }
//   res.json({ fileUrl: 'http://192.168.0.7:3000/images/' + req.file.filename });
// })

//   console.log("data/////////////////////", req.body)
//   if (!req.file) {
//     res.status(409).send("file not found");
//     return next(err);
//   } else {
//     let sql = `INSERT INTO banner( image, caption, isVideo) VALUES ( "${req.file.filename}","${req.body.caption}",${req.body.isVideo})`;
//     console.log(sql);
//     db.query(sql, (err, result) => {
//       if (err)
//         // console.log("Error MSG=====>",err.sqlMessage);
//         res.status(409).send(err.sqlMessage);
//       // console.log("one row inserted");
//       else
//       console.log(req.file.filename)
//         res.status(200).send(result);

//       });
//     }
//          //res.status(200).send(JSON.stringify({"fileUrl": "http://localhost:3001/images/" + req.file.filename}));
// });

// //gettttttttttttt
// router.get("/data", (req, res, next) => {
//   const sql = `select * from banner order by id desc limit 4`;
//   db.query(sql, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400);
//     } else {
//       res.status(200).send(result);
//       //url = `./public/image/${result[0].image}`
//     }
//   });
//   // console.log(req.params.i)
// });
