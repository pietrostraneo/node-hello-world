require('dotenv').config();
const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const hello = process.env.HELLO || "Hello world not found!";
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const inspirational = ['Sogna in grande.', 'Credi in te.', 'Vivi con passione.', 'Sii te stesso.', 'Mai arrendersi.', 'Crea il tuo destino.'];



http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${getRandomElement(inspirational)}</h1>`);
}).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server running at http://${host}:${port}/`);
})