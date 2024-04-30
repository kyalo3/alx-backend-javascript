// 5-http.js

const http = require('http');
const fs = require('fs');

const port = 1245;

// Function to read CSV file asynchronously
const readCSVFileAsync = (filename, callback) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    // Split the CSV data by lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    callback(null, lines);
  });
};

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Handling requests based on URL path
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    // Read the CSV file asynchronously
    readCSVFileAsync('database.csv', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.end('Error reading file');
        return;
      }
      // Send the list of students as response
      res.end(`This is the list of our students\n${data.join('\n')}`);
    });
  } else {
    res.statusCode = 404;
    res.end('Page Not Found');
  }
});

// Listen on port 1245
app.listen(port);

module.exports = app;
