const express = require("express");
const router = express.Router();
const checkauth = require("../middleware/authtoken");

router.get("/", checkauth, (req, res) => {
  // res.sendstatus(200);
  // res.sendStatus(200);
  res.status(200).send({msg:"Token verified"})
});

module.exports = router;
