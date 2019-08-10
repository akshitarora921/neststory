const express = require("express");
const router = express.Router();
const db = require("../bin/db");
const multer = require("multer");
const authtoken = require("../middleware/authtoken");

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
      sql = `insert into mentors (launchpad_id, name, designation, image, user_id) values ("${
        req.body.launchpadId
      }","${req.body.mentorName}","${req.body.mentorDesg}","${
        req.files.mentorImage[0].filename
      }","${
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

// Mentor get ALl
router.get("/all", (req, res, next) => {
  let id = req.params.id;
  const sql = `select * from mentors`;
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

// Mentors edit
router.post("/edit/:id", (req, res) => {
  const id = req.params.id;
  const sql = `update mentors set name="${req.body.name}",designation="${req.body.designation}" where mentor_id=${id}`
  console.log("Sql: ", sql)
  db.query(sql, (err, result) => {
    if (err) {
      res.status(409).send(err)
    }
    else {
      console.log(result);
      res.status(200).send(result);
    }
  })
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const sql = `delete from mentors where mentor_id=${id}`
  db.query(sql, (err, result) => {
    if (err) {
      res.status(409).send(err)
    }
    else {
      console.log(result);
      res.status(200).send(result);
    }
  })
})
module.exports = router;
