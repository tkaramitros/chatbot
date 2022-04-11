const mongoose = require('mongoose');

const landSchema = mongoose.Schema(
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
			structurefactor: { type: Number},
			coverageratio: {type:Number},
			parkingspace: {type:String}, //yes or no
			slope: {type: String}, //slope for land and space (office or home)
			orientation: {type: String},// orientation for land and space (office or home)
			typeofuse: {type: String},
			withincityplan: {type:String}, //yes or no
			residentialzonearea: {type:String}, //yes or no
			forcompensation: {type:String}, //yes or no (antiparoxi)
			accessfrom:{type:String}
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Land', landSchema);
