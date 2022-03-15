const mongoose = require('mongoose');
const Post = require('../models/Post');

async function generateData(x) {
	function between(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const title = [ 'Nice', 'Big', 'Great', 'Old' ];
	const descriptionHome = [
		'House with view',
		'Great for Students',
		'Cozy with modern decoration',
		'Ideal for families',
		'Only five minutes from the town center',
		'near the sea',
		'needs renovation',
		'out of the center',
		'very quiet place to live',
		'on the 2on Floor'
	]; //home
	const descriptionOffice = [
		'with view',
		'Renovated one month ago',
		' On the 2on Floor',
		' On the 1st Floor',
		'Only five minutes from the town center',
		'with warehouse'
	]; //office
	const descriptionLand = [
		'with olives',
		'with animals',
		'with farm',
		'great for cultivation',
		'near the sea',
		'on the mountain',
		'near the forest'
	];
	const location = [ 'Rafina', 'Loutsa', 'Thessaloniki', 'Xalandri', 'Panormou', 'Hlioupoli' ]; //5
	const price = [ 100000, 120000, 200000, 30000, 10000, 125000, 110000, 450000, 80000, 75000, 65000, 70000, 45000 ]; //12
	const size = [ 100, 50, 40, 60, 70, 80, 90, 110, 120, 55, 45, 65, 105, 150 ]; //13
	const propType = [ 'Home', 'Office', 'Land' ];

	//for (let index = 0; index < x; index++) {
	var propertyType;
	var descriptionType;
	function description() {
		propertyType = propType[between(0, 2)];
		if (propertyType === 'Home') {
			descriptionType = descriptionHome[between(0, 9)];
		} else if (propertyType === 'Office') {
			descriptionType = descriptionOffice[between(0, 5)];
		} else {
			descriptionType = descriptionLand[between(0, 6)];
		}
		return propertyType, descriptionType;
	}

	for (let index = 0; index < x; index++) {
		description();
		const post = new Post({
			_id: new mongoose.Types.ObjectId(),
			title: title[between(0, 3)].toString() + ' ' + propertyType,
			description: descriptionType,
			location: location[between(0, 5)].toString(),
			price: price[between(0, 12)].toString(),
			size: size[between(0, 13)].toString(),
			propType: propertyType,
			buyOrRent: 'Rent'//change manually between Buy or Rent
		});
		try {
			await post.save();
		} catch (e) {
			console.log(e);
		}
        console.log(index)
	}
}

;

module.exports = generateData;
