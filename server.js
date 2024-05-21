require('dotenv').config();
const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";