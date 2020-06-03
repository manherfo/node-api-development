/* console.log("process: ", process); */

//const helpers = require('./helpers')

const express = require('express')

const app = express()

app.get("/", (req, res) => {
  res.send("hello from express the server");  
} );

app.listen(3000);

/* const total = sum(10,2);

console.log("total: ",total); */