const mongoose = require("mongoose");
<<<<<<< HEAD

const generateData = require("../test/test");

mongoose.connect(
  "mongodb+srv://admin:admin@chatbot-test-shared.48emm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
=======
const config = require('../config/keys');


const mongoURI = config.mongoURI

const generateData = require("../test/test");

mongoose.connect(  mongoURI,  { useNewUrlParser: true, useUnifiedTopology: true },  () => {
>>>>>>> c7f7e90fbd58e1b98ca76e6a06163871a0c5ac22
    console.log("Connected to Database");
    //generateData(20) //-->> to generate fake data
  }
);
