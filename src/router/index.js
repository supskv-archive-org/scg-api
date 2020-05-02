const express = require("express");
const router = express.Router();
const WebhookController = require("../app/http/controllers/WebhookController");

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

router.post("/webhook/:service", WebhookController.webhook);

module.exports = router;
