const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const forms = multer();
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('./db/mongoose');



//routers
const userRouter = require('./routers/user');
const postRouter = require('./routers/posts');

//middleware
app.use(morgan('dev')); //shows to the console what is send to the server
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
		return res.status(200).json({});
	}
	next();
});


//routers
app.use('/user', userRouter);
app.use('/posts', postRouter);
app.get('*', (req, res) => {  res.status(200).json({message:"Maybe you want to check your URL!!"});  })

module.exports = app;
