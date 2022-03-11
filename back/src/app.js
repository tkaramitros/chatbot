const express = require ('express')
const app = express() 

require('./db/mongoose')

const morgan= require('morgan')
const bodyParser = require('body-parser')



//routers
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')



//middleware
app.use(morgan('dev'))//sends what is send to the server

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//allow comunnication between server and client
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET")
        return res.status(200).json({})
    }
    next()
})




//routers
app.use('/user',userRouter);
app.use('/post',postRouter);


module.exports = app