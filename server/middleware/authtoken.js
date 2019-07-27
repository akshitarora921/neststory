const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const publicKEY = fs.readFileSync("keys/public.key", "utf8");

authtoken=()=>{
    jwt.verify(token, 'wrong-secret', function(err, decoded) {
        // err
        // decoded undefined
      });
}