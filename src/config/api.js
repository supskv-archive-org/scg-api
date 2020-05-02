require("dotenv").config();

module.exports = {
  line_channel_access_token: process.env.LINE_CHANNEL_ACCESS_TOKEN || "xxxxx",
  line_reply_endpoint:
    process.env.LINE_REPLY_ENDPOINT ||
    "https://api.line.me/v2/bot/message/reply",
  line_push_endpoint:
    process.env.LINE_PUSH_ENDPOINT || "https://api.line.me/v2/bot/message/push",
  google_maps_api_key: process.env.GOOGLE_MAPS_API_KEY || "",
};
