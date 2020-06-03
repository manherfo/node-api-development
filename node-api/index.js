const express = require('express')
const app = express()
const morgan = require('morgan')

//const postRoutes = require('./routes/post')
const {getPosts} = require('./routes/post')

const myOwnMiddleware = (req, res, next) => {
    console.log("middleware applied!!!")
    next();
};

//middleware
app.use(morgan('dev'));
app.use(myOwnMiddleware);

//app.get("/", postRoutes.getPosts);
app.get("/", getPosts);

const port = 3000
app.listen(port, () => {console.log(`A node api listening on port: ${port}`)} )