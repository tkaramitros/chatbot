const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String },
    description: { type: String },
    location: { type: String },
    price: { type: Number },
    size: { type: Number },
    propType: { type: String },
    buyOrRent: { type: String },
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
