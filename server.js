// Load environment variables from.env file
require('dotenv').config();

const http = require("http");

// Set the port and host from environment variables or use default values
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

// Set the default greeting message from environment variable or use "Hello World!"
const hello = process.env.HELLO || "Hello World!";

// Function to get a random element from an array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Array of inspirational quotes
const inspirational = [
    'Sogna in grande.',
    'Credi in te.',
    'Vivi con passione.',
    'Sii te stesso.',
    'Mai arrendersi.',
    'Crea il tuo destino.'
];

// Create an HTTP server and listen on the specified port and host
http.createServer((req, res) => {

    if (req.url === '/favicon.ico') {

        // Set the HTTP response header with 404 error
        res.writeHead(404);

        res.end();

        return;
    }

    if (req.url === '/') {

        // Set the HTTP response header with content type as text/html
        res.writeHead(200, { "Content-Type": "text/html" });

        // End the response with a random inspirational quote
        res.end(`<h1 style="text-align:center;">${hello}</h1><h1 style="text-align:center; color:red;">${getRandomElement(inspirational)}</h1>`);

        return;

    }

    // Start listening on the specified port and host
}).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server running at http://${host}:${port}/`);
});