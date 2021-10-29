const express = require("express");
const service = require("./classesService");
const router = express.Router();



router.get("/", (req, res, next) => {
  service
    .findAll()
    .then((result) => {
      console.log("nooooooooooooo");
      res.json(result);
    })
    .catch((err) => {
      console.error("error slect classes");
    });
});

router.post("/", (req, res, next) => {
  service
    .createClass(req.body)
    .then((result) => {
      if (result) {
        console.log("create a class successfully");
        res.json(result);
      } else {
        console.log("created failded");
      }
    })
    .catch((err) => {});
});
module.exports = router;
