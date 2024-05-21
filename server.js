require('dotenv').config();
const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World</h1>");
}).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server running at http://${host}:${port}/`);
})