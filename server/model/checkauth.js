const express = require("express");
const router = express.Router();
const authtoken = require("../middleware/authtoken");

router.get("/",authtoken,  (req, res) => {
  console.log("header: ", req.headers)
  res.status(200).send({msg:"Token verified"})
});


module.exports = router;
