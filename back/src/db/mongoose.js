const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect(
  "mongodb+srv://admin:admin@chatbot-test-shared.48emm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
  }
);
