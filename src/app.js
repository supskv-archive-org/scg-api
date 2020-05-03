const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router");

const app = express();
const port = process.env.PORT || 80;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

app.listen(port);
