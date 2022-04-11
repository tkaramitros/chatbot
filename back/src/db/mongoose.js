const mongoose = require("mongoose");

//const generateData = require("../test/test");
const generateData = require("../test/testhome");
//const generateData = require("../test/testoffice");
//const generateData = require("../test/testland");

mongoose.connect(
  "mongodb+srv://admin:admin@chatbot-test-shared.48emm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if(err) console.log(err) 
    else console.log("Connected to Database");
    //generateData(2) //-->> to generate fake data
  }
);
