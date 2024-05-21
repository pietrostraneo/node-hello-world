require('dotenv').config();
const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const hello = process.env.HELLO || "Hello world not found!"

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${hello}</h1>`);
}).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server running at http://${host}:${port}/`);
})