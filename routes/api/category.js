const express = require("express");

const router = express.Router();
var Request = require("request");
const axios = require("axios");

router.get("/test", (req, res) =>
  // res.json({ msg: "/api/category/test is working" })
  // http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]
  Request.get(
    "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false",
    (error, response, body) => {
      if (error) {
        return console.dir(error);
      }
      console.dir(JSON.parse(body));
      res.json({ apiResult: res.json(body) });
    }
  )
);

// Post weather
router.get("/weather/:city", (req, res) => {
  console.log("city search " + req.params.city);
  // res.json({ succes: true });

  Request.get(
    "http://api.apixu.com/v1/current.json?key=005e71435434499ebf081653192403&q=" +
      req.params.city,
    (error, response, body) => {
      if (error) {
        return console.dir(error);
      }
      console.dir(JSON.parse(body));
      res.json({ resData: JSON.parse(body) });
    }
  );
});
//export router so it is picked up by server.js
module.exports = router;
