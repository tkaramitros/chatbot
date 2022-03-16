<<<<<<< HEAD
const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect(
  "mongodb+srv://admin:admin@chatbot-test-shared.48emm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
  }
);
=======
const mongoose = require('mongoose')


const generateData = require('../test/test');

mongoose.connect('mongodb+srv://admin:admin@chatbot-test-shared.48emm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true},()=>{
  console.log("Connected to Database")
  //generateData(20) //-->> to generate fake data
})
>>>>>>> 84c281a78a596d91f414663bbe17425da1041eb4
