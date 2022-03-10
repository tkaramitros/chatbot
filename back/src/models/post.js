const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		title: { type: String },
		xrhsh: { type: String },		
		Floor: { type: Number },
		Tetragonika: { type: Number },
		Timi: { type: Number},
		Timi_tetragoniko: { type: Number },
		Perigrafi: { type: String },
		Diathesimo_apo: { type: String},
		area: {		
			
			properties: {
				address: { type: String },
				add_num: { type: Number },
				TK: { type: Number }
			}
		}
	},
	{
		timestamps: true
	}
);




module.exports = mongoose.model('Post', postSchema);
