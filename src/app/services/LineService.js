const api = require("../../config/api");
const model = require("../models/DOSCG");
const request = require("request");

exports.prepareReply = function (event) {
  const limit = 10;
  let reply_token = event.replyToken;
  let userId = event.source.userId;

  let { resMsg, foundMsg } = getResponseMsg(event.message.text);
  model.save(userId);
  let user = model.getById(userId);
  if (!foundMsg) {
    model.updateAnswerCount(user.id, user.cannotAnswer + 1);
    if (user.cannotAnswer > limit) {
      pushAlert("U9e5c1fc807fff3db84401a018942b6f1", "The Line bot is over.");
    }
  } else {
    model.updateAnswerCount(user.id, 0);
  }

  reply(reply_token, resMsg);
};

function reply(reply_token, msg) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer {" + api.line_channel_access_token + "}",
  };

  let body = JSON.stringify({
    replyToken: reply_token,
    messages: [
      {
        type: "text",
        text: msg,
      },
    ],
  });

  request.post(
    {
      url: api.line_reply_endpoint,
      headers: headers,
      body: body,
    },
    (err, res, body) => {
      console.log("status = " + res.statusCode);
    }
  );
}

function pushAlert(userId, msg) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer {" + api.line_channel_access_token + "}",
  };

  let body = JSON.stringify({
    to: userId,
    messages: [
      {
        type: "text",
        text: msg,
      },
    ],
  });

  request.post(
    {
      url: api.line_push_endpoint,
      headers: headers,
      body: body,
    },
    (err, res, body) => {
      console.log("status = " + res.statusCode);
    }
  );
}

function getResponseMsg(msg) {
  if (msg === "hello") {
    return { resMsg: "HELLO!", foundMsg: true };
  }

  return { resMsg: "Try again.", foundMsg: false };
}
