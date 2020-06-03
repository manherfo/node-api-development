const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')

dotenv.config()

mongoose.connect(process.env.MONGO_URI,
    { 
        useNewUrlParser: true,  
        useUnifiedTopology: true 
    }
    )
.then(() => console.log('DB connected'))

mongoose.connection.on('error', err =>{
    console.log(`db connection error: ${err.message}`)
})

const postRoutes = require('./routes/post')

const myOwnMiddleware = (req, res, next) => {
    console.log("middleware applied!!!")
    next();
};

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(expressValidator())
app.use(myOwnMiddleware);

//app.get("/", postRoutes.getPosts);
app.use("/", postRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`A node api listening on port: ${port}`)} )