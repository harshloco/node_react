const express = require("express");

const router = express.Router();
var Request = require("request");
const keys = require("../config/keys");

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
  const api_key = keys.newsApiKey;
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
        console.dir(error);
        res.json({ resData: JSON.parse(error) });
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

  const api_key = keys.weatherApiKey;
  Request.get(
    "http://api.apixu.com/v1/forecast.json?key=" +
      api_key +
      "&q=" +
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

// Post jobs
router.get("/jobs/:jobDescription/:location", (req, res) => {
  Request.get(
    "https://jobs.github.com/positions.json?description=" +
      req.params.jobDescription +
      "&location=" +
      req.params.location,
    (error, response, body) => {
      if (error) {
        res.json({ resData: "No Result Found" });
      }
      console.dir(JSON.parse(body));
      res.json({ resData: JSON.parse(body) });
    }
  );
});
//export router so it is picked up by server.js
module.exports = router;
