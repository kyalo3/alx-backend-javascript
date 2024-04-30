// 4-http.js

const http = require('http');

const port = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
app.listen(port);

module.exports = app;
