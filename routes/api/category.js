const express = require("express");

const router = express.Router();
var Request = require("request");

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
      res.json({ apiResult: JSON.parse(body) });
    }
  )
);

//export router so it is picked up by server.js
module.exports = router;
