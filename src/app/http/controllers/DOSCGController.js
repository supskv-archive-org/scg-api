const LineService = require("../../services/LineService");
const GoogleService = require("../../services/GoogleService");
const CalculateRepo = require("../../repositories/CalculateRepository");

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

exports.findHiddenNumber = function (req, res) {
  if (req.query.q === undefined) {
    res.send({ success: false });
    return;
  }

  const data = CalculateRepo.findHiddenNumber(req.query.q);
  res.send({ success: true, data: data });
};

exports.findBnC = function (req, res) {
  let a = req.query.a;
  let result1 = req.query.result1;
  let result2 = req.query.result2;
  if (
    a === undefined ||
    isNaN(parseInt(a)) ||
    result1 === undefined ||
    isNaN(parseInt(result1)) ||
    result2 === undefined ||
    isNaN(parseInt(result2))
  ) {
    res.send({ success: false });
    return;
  }

  const data = CalculateRepo.findBnC(a, result1, result2);
  res.send({ success: true, data: data });
};
