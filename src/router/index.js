const express = require("express");
const router = express.Router();
const DOSCGController = require("../app/http/controllers/DOSCGController");

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

router.post("/webhook/:service", DOSCGController.webhook);
router.get("/googlemaps/directions", DOSCGController.getDirectionAPI);
router.get("/calculate/hidden-number", DOSCGController.findHiddenNumber);
router.get("/calculate/find-bnc", DOSCGController.findBnC);

module.exports = router;
