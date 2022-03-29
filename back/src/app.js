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




// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
// 	if (req.method === 'OPTIONS') {
// 		res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
// 		return res.status(200).json({});
// 	}
// 	next();
// });


//routers
const userRouter = require('./routers/user');
const postRouter = require('./routers/posts');
<<<<<<< HEAD
=======
const dialogRouter = require('./routers/dialogflow');
>>>>>>> c7f7e90fbd58e1b98ca76e6a06163871a0c5ac22

//routers
app.use('/user', userRouter);
app.use('/post', postRouter);
<<<<<<< HEAD
=======
app.use('/api/dialogflow', dialogRouter);
>>>>>>> c7f7e90fbd58e1b98ca76e6a06163871a0c5ac22
app.get('*', (req, res) => {  res.status(200).json({message:"Maybe you want to check your URL!!"});  })

module.exports = app;
