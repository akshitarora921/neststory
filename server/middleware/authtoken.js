// const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const publicKEY = fs.readFileSync("keys/public.key", "utf8");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, publicKEY, { algorithm: "RS256" });
    req.userdata = decoded;
    console.log("PASSED");
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Auth error"
    });
  }
};
