const mongoose = require('mongoose');
const Post = require('../models/Post');
const multer = require('multer');

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
	const priceRent = [ 250, 280, 300, 350, 370, 375, 320, 330, 340, 400, 450, 500, 600 ]; //0-12
	const priceBuy = [
		40000,
		50000,
		60000,
		70000,
		80000,
		90000,
		100000,
		110000,
		120000,
		130000,
		140000,
		150000,
		160000
	]; //0-12
	const size = [ 100, 50, 40, 60, 70, 80, 90, 110, 120, 55, 45, 65, 105, 150 ]; //13
	const propType = [ 'Home', 'Office', 'Land' ];
	const buyOrRent = [ 'Buy', 'Rent' ];

	const images = [
		'https://image.shutterstock.com/image-vector/home-icon-260nw-160210421.jpg',
		'https://image.shutterstock.com/image-vector/vector-illustration-cool-detailed-red-260nw-94498447.jpg'
	];
	
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
	var price;
	var BorR;
	function CategoryAndPrice() {
		BorR = buyOrRent[between(0, 1)];
		if (BorR === 'Buy') {
			price = priceBuy[between(0, 12)];
		} else {
			price = priceRent[between(0, 12)];
		}
		return BorR, price;
	}
	
	
	for (let index = 0; index < x; index++) {
		description();
		CategoryAndPrice();
		const post = new Post({
			_id: new mongoose.Types.ObjectId(),
			title: title[between(0, 3)].toString() + ' ' + propertyType,
			description: descriptionType,
			city: location[between(0, 5)].toString(),
			price: price,
			size: size[between(0, 13)],
			propType: propertyType,
			buyOrRent: BorR,
			image: images[between(0, 1)]
		});
		try {
			await post.save();
		} catch (e) {
			console.log(e);
		}
	
		
	}
}



module.exports = generateData;
