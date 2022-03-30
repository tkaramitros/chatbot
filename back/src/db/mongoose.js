const mongoose = require("mongoose");
const config = require("../config/keys");

const mongoURI = config.mongoURI;

const generateData = require("../test/test");

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
    //generateData(20) //-->> to generate fake data
  }
);
