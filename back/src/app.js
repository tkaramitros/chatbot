const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const morgan = require("morgan");

require("./db/mongoose");

//middleware
app.use(morgan("dev")); //shows to the console what is send to the server

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

<<<<<<< HEAD
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
const userRouter = require("./routers/user");
const postRouter = require("./routers/posts");
const dialogRouter = require("./routers/dialogflow");

//routers
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/dialogflow", dialogRouter);
app.get("*", (req, res) => {
  res.status(200).json({ message: "Maybe you want to check your URL!!" });
});
=======
//routers
const userRouter = require('./routers/user');
const postRouter = require('./routers/posts');
const homeRouter = require('./routers/home');
const officeRouter = require('./routers/office');
const landRouter = require('./routers/land');
//routers
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/home', homeRouter);
app.use('/office', officeRouter);
app.use('/land', landRouter);
app.get('*', (req, res) => {  res.status(200).json({message:"Maybe you want to check your URL!!"});  })
>>>>>>> 9b05507324e3876246fff55b027afcecd9319c8a

module.exports = app;
