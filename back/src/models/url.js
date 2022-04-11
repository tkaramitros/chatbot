<<<<<<< HEAD
const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    city: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    propType: { type: String, required: true },
    buyOrRent: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("URL", urlSchema);
=======
const mongoose = require('mongoose');

const urlSchema = mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
        city: { type: String ,required:true},
		price: { type: Number,required:true },
		size: { type: Number ,required:true},
		propType: { type: String ,required:true},
		buyOrRent: { type: String ,required:true}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('URL', urlSchema);
>>>>>>> 9b05507324e3876246fff55b027afcecd9319c8a
