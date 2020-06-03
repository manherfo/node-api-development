/* console.log("process: ", process); */

//const helpers = require('./helpers')

const { sum } = require('./helpers')
const http = require('http')

const server = http.createServer( (req, res) => {
  res.end("hello from the server");  
} );

server.listen(3000);

const total = sum(10,2);

console.log("total: ",total);