const api = require("../../config/api");

exports.reply = function (reply_token, msg) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer {" + api.line_channel_access_token + "}",
  };

  msg = keyword(msg);

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
      url: api.line_endpoint,
      headers: headers,
      body: body,
    },
    (err, res, body) => {
      console.log("status = " + res.statusCode);
    }
  );
};

function keyword(msg) {
  if (msg === "hello") {
    return "HELLO!";
  }

  return "Not Response";
}
