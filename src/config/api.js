require("dotenv").config();

module.exports = {
  line_channel_access_token: process.env.LINE_CHANNEL_ACCESS_TOKEN || "xxxxx",
  line_endpoint:
    process.env.LINE_ENDPOINT || "https://api.line.me/v2/bot/message/reply",
};
