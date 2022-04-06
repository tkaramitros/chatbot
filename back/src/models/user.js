const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	post : { type : Array },
	parking : { type : Array }
	
});

module.exports = mongoose.model('User', userSchema);
