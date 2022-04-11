const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');


require('./db/mongoose');

//middleware
app.use(morgan('dev')); //shows to the console what is send to the server

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());




//routers
const userRouter = require('./routers/user');
const postRouter = require('./routers/posts');
const dialogRouter = require('./routers/dialogflow');

//routers
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/dialogflow', dialogRouter);
app.get('*', (req, res) => {  res.status(200).json({message:"Maybe you want to check your URL!!"});  })

module.exports = app;
