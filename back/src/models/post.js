const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		title: { type: String ,required:true},
		description: { type: String,required:true },
		location: { type: String ,required:true},
		price: { type: Number ,required:true},
		size: { type: Number ,required:true},
		propType: { type: String ,required:true},
		buyOrRent: { type: String ,required:true},
		img: {
			data: Buffer,
			contentType: String
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Post', postSchema);
