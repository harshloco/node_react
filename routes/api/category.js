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

//Post top stories
router.get("/news/:section", (req, res) => {
  //console.log("city search " + req.params.city);
  // res.json({ succes: true });
  const api_key = "pkYZCLtXaNRRpq437yg";
  console.log(
    "https://api.nytimes.com/svc/topstories/v2/" +
      req.params.section +
      ".json?api-key=" +
      api_key
  );
  Request.get(
    "https://api.nytimes.com/svc/topstories/v2/" +
      req.params.section +
      ".json?api-key=" +
      api_key,
    (error, response, body) => {
      if (error) {
        return console.dir(error);
      }
      console.dir(JSON.parse(body));
      res.json({ resData: JSON.parse(body) });
    }
  );
});

// Post weather
router.get("/weather/:city", (req, res) => {
  console.log("city search " + req.params.city);
  // res.json({ succes: true });

  http: Request.get(
    "http://api.apixu.com/v1/forecast.json?key=005e714bf081653192403&q=" +
      req.params.city +
      "&days=6",
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
