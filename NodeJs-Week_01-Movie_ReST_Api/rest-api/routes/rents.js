const express = require("express");
router = express.Router();
const movieList = require("../service/movieList.json");
const rentList = require("../service/rentList.json");
const fs = require("fs");

const path =
  "C:/Users/mcmc0/Desktop/NodeJs-Week_01-Movie_ReST_Api/rest-api/service/rentList.json";

router.get("/", (req, res) => {
  res.send(rentList);
});

router.post("/", (req, res) => {
  const newRent = req.body;

  rentList.rents.push(newRent);
  fs.writeFile(path, JSON.stringify(rentList, null, 2), (err) => {
    if (err) {
      console.log("Error ", err);
    }
  });

  res.send(rentList);
});

module.exports = router;
