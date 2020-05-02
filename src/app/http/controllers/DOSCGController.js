const LineService = require("../../services/LineService");
const GoogleService = require("../../services/GoogleService");

exports.webhook = function (req, res) {
  const service = req.params.service;
  switch (service) {
    case "line":
      LineService.prepareReply(req.body.events[0]);
      break;
  }
  res.sendStatus(200);
};

exports.getDirectionAPI = async function (req, res) {
  const data = await GoogleService.getDirectionFrom(
    req.query.origin,
    req.query.destination
  );
  res.send(data);
};
