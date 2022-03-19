const mongoose = require("mongoose");

const generateData = require("../test/test");

mongoose.connect(
  "mongodb+srv://admin:admin@chatbot-test-shared.48emm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
    //generateData(20) //-->> to generate fake data
  }
);
