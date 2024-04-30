const { createServer } = require('node:http');

const port = 1245;

//create a server object:
const server = createServer((req, res) => {
  res.write('Hello Holberton School!'); //write a response
//to the client
  res.end(); //end the response
}).listen(1245)
