const LineService = require("../../services/LineService");

exports.webhook = function (req, res) {
  const service = req.params.service;
  switch (service) {
    case "line":
      LineService.prepareReply(req.body.events[0]);
      break;
  }
  res.sendStatus(200);
};
