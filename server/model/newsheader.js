const express = require("express");
const router = express.Router();
const db = require("../bin/db");

router.get("/data", (req, res, next) => {
  const sql = `select heading from news order by id desc`;
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

// router.post("/new", (req, res) => {
//   if (!req.body) {
//     res.status(404).send("data is not recieved");
//   } else {
//     let sql = `insert into newsheader (news) values ("${req.body.newsHeaderHeading}")`;
//     db.query(sql, (err, result) => {
//       if (err) {
//         res.status(409).send(err);
//       } else {
//           console.log(result)
//         res.status(200).send(result);
//       }
//     });
//   }
// });


