// 4-http.js

const http = require('http');

const port = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello Holberton School!');
});

// Listen on port 1245
app.listen(port);

module.exports = app;
