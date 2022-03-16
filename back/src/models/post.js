const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
<<<<<<< HEAD
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
=======
	{
		_id: mongoose.Schema.Types.ObjectId,
		title: { type: String ,required:true},
		description: { type: String ,required:true},
		location: { type: String ,required:true},
		price: { type: Number,required:true },
		size: { type: Number ,required:true},
		propType: { type: String ,required:true},
		buyOrRent: { type: String ,required:true},
		//images: [{type: Buffer}] - upload imageS
		image: {type: Buffer}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Post', postSchema);
>>>>>>> 84c281a78a596d91f414663bbe17425da1041eb4
