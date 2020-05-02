const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// const AIMLParser = require("aimlparser");

const app = express();
const port = process.env.PORT || 80;
// const aimlParser = new AIMLParser({ name: "HelloBot" });

// aimlParser.load(["./aiml.xml"]);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  let reply_token = req.body.events[0].replyToken;
  let msg = req.body.events[0].message.text;
  reply(reply_token, keyword(msg));
  // aimlParser.getResult(msg, (answer, wildCardArray, input) => {
  //   reply(reply_token, answer);
  // });
  res.sendStatus(200);
});

app.listen(port);

function reply(reply_token, msg) {
  let headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer {kz6mdzkL+F3m2ECk4+hkzOiTnfGisBhvTM2xnbsS8GeIK4WEYQSHOPsEQPdBq60y56McdFTv7Z0Yb5W1hEqxKdgMcnBiqN8pKzA4NhHLAEX/4bmwHSZz7YCcwEBUPJ5WJhJXc2bdOh6O2nY3P9TUgAdB04t89/1O/w1cDnyilFU=}",
  };

  if (msg === undefined) {
    msg = "Not Response";
  }

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
      url: "https://api.line.me/v2/bot/message/reply",
      headers: headers,
      body: body,
    },
    (err, res, body) => {
      console.log("status = " + res.statusCode);
    }
  );
}

function keyword(msg) {
  if (msg === "hello") {
    return "HELLO!";
  }

  return "Not Response";
}
