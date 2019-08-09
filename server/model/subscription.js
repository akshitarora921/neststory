const express = require("express");
const router = express.Router();
const db = require("../bin/db");

router.post("/", (req, res) => {
  if (!req.body) {
    res.status(404).send("data is not recieved");
  } else {
    let sql = `insert into subscription (email) values ("${req.body.email}")`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(409).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
});

module.exports = router;
