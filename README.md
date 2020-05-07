# api

> A Express.js project

## API Setup

Default endpoint: http://localhost:4000. You can change it in .env file on PORT variable. Then run again.
And you must add other variable below

```bash
# optional
PORT=8000

# required (can see all my token in mail)
# Use for line bot webhook
LINE_CHANNEL_ACCESS_TOKEN=

# Use for getting notification from line bot
LINE_ME_USERID=

# Use for Google maps API Directions
GOOGLE_MAPS_API_KEY=
```

## LINE Bot

![QR Code for add bot.](https://github.com/supskv/scg-api/blob/master/public/183cqkzt.png?raw=true)
I just add sample answer.
The bot can answer from text "hello" then response "HELLO!" otherwise response "Try again.".
If cannot answer > 10, the bot will send to LINE_ME_USERID.
If can answer the bot will reset user's count.

## Build Setup

```bash
# install dependencies
npm install

# serve
node src/app.js
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
