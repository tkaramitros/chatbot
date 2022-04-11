const mongoose = require("mongoose");
<<<<<<< HEAD
const config = require("../config/keys");

const mongoURI = config.mongoURI;
=======
const config = require('../config/keys');
>>>>>>> 9b05507324e3876246fff55b027afcecd9319c8a


<<<<<<< HEAD
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
=======
const mongoURI = config.mongoURI

//const generateData = require("../test/test");
const generateData = require("../test/testhome");
//const generateData = require("../test/testoffice");
//const generateData = require("../test/testland");

mongoose.connect(  mongoURI,  { useNewUrlParser: true, useUnifiedTopology: true },  () => {
>>>>>>> 9b05507324e3876246fff55b027afcecd9319c8a
    console.log("Connected to Database");
  // generateData(1) //-->> to generate fake data
  }
);
