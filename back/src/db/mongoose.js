const mongoose = require("mongoose");
const config = require("../config/keys");

const mongoURI = config.mongoURI;

//const generateData = require("../test/test");
const generateData = require("../test/testhome");
//const generateData = require("../test/testoffice");
//const generateData = require("../test/testland");

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
    // generateData(1) //-->> to generate fake data
  }
);
