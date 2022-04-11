const mongoose = require('mongoose');

const homeSchema = mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		title: { type: String ,required:true},
		description: { type: String ,required:true},
		city: { type: String ,required:true},
		price: { type: Number,required:true },
		size: { type: Number ,required:true},
		propType: { type: String ,required:true},
		buyOrRent: { type: String ,required:true},
		image: {type: String},
		additional: {
			wifi: {type: String},
			pets:{type: String },
			heating: {type: String }, //yes or no
            typeofheating: {type: String },
            energyefficiency: {type: String },
            yearofbuilt: {type: Number },
            renovationyear: {type: Number },
            levels:{type: Number },
			parkingspace: {type: String }, //yes or no
			keller: {type: String }, //storage unit
			kichen: {type: Number },
			bathrooms: {type: Number },
            livingroom: {type: Number },
            bedroom: {type: Number },
            typeofflooring:{type: String },
            furniture: {type: String },
            alarmsystem: {type: String },//yes or no
            garden: {type: String },//yes or no
            typeofview: {type: String },
            forpeoplewithmobilityproblems: {type: String }, //yes or no
            floorlevel:{type: Number }
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Home', homeSchema);
