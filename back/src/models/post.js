const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		title: { type: String ,required:true},
		description: { type: String ,required:true},
		city: { type: String ,required:true},
		price: { type: Number,required:true },
		size: { type: Number ,required:true},
		propType: { type: String ,required:true},
		buyOrRent: { type: String ,required:true},
		//images: [{type: Buffer}] - upload imageS
		image: {type: Buffer},
		additional: {
			wifi: {type: String},
			pets:{type: String },
			heating: {type: String }, //yes or no
			parkingspace: {type: String }, //yes or no
			keller: {type: String }, //storage unit
			kichen: {type: Number },
			bathrooms: {type: Number },
			// until here only for home or office
			slope: {type: String }, //slope for land and space (office or home)
			orientation:{type: String }// orientation for land and space (office or home)
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Post', postSchema);
