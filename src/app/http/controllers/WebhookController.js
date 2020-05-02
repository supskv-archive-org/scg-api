const LineService = require("../../services/LineService");

exports.webhook = function (req, res) {
  const service = req.params.service;
  switch (service) {
    case "line":
      let reply_token = req.body.events[0].replyToken;
      let msg = req.body.events[0].message.text;
      LineService.reply(reply_token, msg);
      break;
  }
  res.sendStatus(200);
};
