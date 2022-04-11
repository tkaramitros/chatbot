const mongoose = require('mongoose');
const Post = require('../models/Post');
const fs = require('fs');
const sharp = require('sharp');

async function generateData(x) {
	function between(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const title = [ 'Nice', 'Big', 'Great', 'Old' ];
	const descriptionHome = [
		'Luxury newly built apartments for sale , with view, in a very good location . They have  bedrooms,  bathrooms, living-dining room with Italian kitchens, marble and wood on the floors. They also have a storage room and a parking space in the basement are also included. The apartments are ideal for Golden Visa since they are rented with a current yield of 3% per year',
		'It includes  its own small garden, built in 2005. This wonderful property is located in a quiet area in , within walking distance from the Port and city center.On the ground floor we find the living room with a fireplace and balcony that leads to the garden, the open plan kitchen with a dining room and a guest’s WC.',
		' Apartment  In Plot 500 sq.m., Property Status: under construction,  Heating: Autonomous - Petrol, View: Sea view, Building Year: 2013, Energy Certificate: C, 1 parking(s), Floor type: Wooden floors + Tiles, Type of door frames: Aluminum, Elevator, Security door, Security alarm, CCTV, Storage room, Fireplace, Night stream, Double Glazed Windows, Window Screens, Balconies, Pets Allowed, Luxury, Airy, Roadside, Bright, On Corner, AirConditioning, Solar water system, Boiler, New Construction, Painted, Distance from: Airport (m): 11000, Seaside (m): 100, 	',
		'Property Code: 1-141 - Apartment . This  Apartment is built on the Ground floor and features 1 Bedroom, Livingroom, Kitchen, Bathroom The property also enjoys Heating system: Autonomous heating - Oil, View of the Sea, Window frames: Aluminium, Door: Armourplated door, accessible for people with disabilities, parking, garden, A/C, alarm system, furnished, appliances, pest net. Built in 2011, distance from sea 600 meters distance from airport 14000 meters distance from metro 14000 meters ',
		'Aiarchou street, 80 sqm, 2nd floor, modern construction, airy, bright, 2 bedrooms, open space living room-kitchen, bathroom, 3 spacious balconies, ground floor parking lot, storage space in the basement, aluminum window frames with double glazing, reinforced security door, alarm preinstallation, autonomous oil heating with reasonable monthly communal fees. The property is located in a great area next to marketplace, with access to means of public transport. ',
		'Apartment For Sale,, Property Status: Very Good, Floor: 3rd, 2 Bedrooms 1 Kitchen(s), 2 Bathroom(s), Heating: Central - Petrol, View: Cityscape, Building Year: 1978, Energy Certificate: E, Floor type: Wooden floors, Type of door frames: Aluminum, Features: Elevator, Security door, Electric Appliances, Double Glazed Windows, Balcony Cover, Balconies, Luxury, Airy, Roadside, Bright, AirConditioning, Renovated,',
		'Excellent apartment . on the 5th floor with extra room on the 6th floor, connected by an internal staircase. Built in 1988, extremely spacious and bright, with 2 very large terraces on both floors and a large auxiliary balcony on the back that serves the kitchen. Stunning views . It consists of 3 bedrooms with the possibility of 4th, living room, kitchen, bathroom, WC and storage - dressing room. It was built in 1965 and has central heating - gas, unrestricted views, sliding aluminum windows, fitted wardrobes, elevator, awnings, internal staircase and balconies of approximately 100 square meters.',
		' Floor Apartment For Sale or Rent Property Status: Amazing, Floor: 4th, 1 Level(s), 2 Bedrooms 1 Kitchen(s), 2 Bathroom(s), Heating: Personal - Electricity, View: Good, Building Year: 2022, Energy Certificate: A, 1 parking(s), Floor type: Wooden floors + Tiles, Type of door frames: Aluminum, Features: Elevator, Security door, CCTV, Storage room, Fireplace, Night stream, Double Glazed Windows, Window Screens, Balconies, Metro, Luxury, Airy, Bright, Underfloor, AirConditioning, Solar water system, New Construction,',
		'On the 1st floor. It consists of 2 bedrooms, living room, kitchen, bathroom. Renovated with excellent aesthetic materials. Bright and bright. It has central gas heating, aluminum windows, wooden floors, security door, many fitted wardrobes and storage spaces, elevator, double glazing',
		' Refurbished, Ground floor floor, 1 Level(s), 2 Bedrooms, (2 Master), 1 Kitchen(s), 2 Bathroom(s), 1 WC, Autonomous Heating, Construction 1979, Energy Certificate: C, Type of doors: Aluminum, Security door, Double Glazed Windows, Balcony Cover, Pets Allowed, For Investment, Not Roadside, Bright, AirConditioning, Back yard (Garden), Painted, Renovated'
	]; //home
	const descriptionOffice = [
		'Office ready for use, Floor: Ground floor, 1 level(s), Heating: Autonomous - Natural Gas, 2 WC, Building Year: 1967, Energy Certificate: E,  Property Plan',
		' Store , ground floor, year of construction 1999, reconstructed in 2021, renovated, with energy class N/A, wiring, shop window 13m, ',
		' Warehouse close to Imittos street, basement storage room 350 sqm. It is undivided with, usable for any appropriation with WC.',
		' This 140 sq. m. Office is built on the Ground floor and features 3 Spaces, Livingroom, Kitchen, Bathroom The property also enjoys Heating system: Central oil heating, Window frames: Aluminium, A/C, furnished, appliances, pest net. Built in 1964, and renovated in 2015',
		'2 levels, ground floor 85 sq.m., deck 40 sq.m., for commercial use, year of construction 1972, kali, 2 WC, front facing, bright, heating n/a, with energy class I, with floor type plakaki, internal staircase, suspended ceiling, three face, freight elevator 150kgr, facade 6m, height 6m, shop window 6m, n/a access, level inclination, with sewerage dimosia apoxeteysi, ',
		'ully renovated, 5 office /meeting/ reception spaces, 2 wc, kitchenette, small balcony, air-conditioning in every space, freshly painted, 2 entrances, oil central heating with reasonable monthly communal fees. The property is located in a great area, with easy access to many means of public transport.'
	]; //office
	const descriptionLand = [
		' It is located in a residential area and its zoning is recreational with a great view',
		' Land Plot  building factor 3, coverage factor 70%, builds , it is a frontage, bright, in a unique location,  470 meters (5 minutes walk) , easy access to all facilities, near to schools, supermarkets, pharmacies, banks, coffee stores, restaurants, commercial stores, and public transportation.',
		'Plane plot with facade length of 20m with a Coefficient Building of 08, Coverage Ratio 405% and can build up to 4000sm',
		'Plane parcel  with a Coefficient Building of 0.046511627906976744 . It already includes a building and its zoning is agricultural with a great view. It is located 2km away from the nearest village, 4km from the nearest town.',
		'The plot is located between a new and old national road. Building factor 3, coverage factor 70%, builds , it is a frontage,'
	];
	const location = [ 'Rafina', 'Loutsa', 'Thessaloniki', 'Xalandri', 'Panormou', 'Ilioupoli','Pagkrati','Lamia','Gerakas','Nea Makri','Orestiada','Mitilini','Xalkida','Agia Parakskeuh' ]; //5
	const priceRent = [ 250, 280, 300, 350, 370, 375, 320, 330, 340, 400, 450, 500, 600,140,130,150,700,630,560 ]; //0-12
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
		160000,
		170000,180000,190000,200000,210000,220000,230000,240000,250000,260000
	]; //
	const size = [ 100, 50, 40, 60, 70, 80, 90, 110, 120, 55, 45, 65, 105, 150 ]; //13
	const propType = [ 'Home', 'Office', 'Land' ];
	const buyOrRent = [ 'Buy', 'Rent' ];

	const homes = [
		
		'./src/images/home/house_PNG71.png',
		'./src/images/home/house_PNG72.png',
		'./src/images/home/house_PNG73.png',
		'./src/images/home/pho.png',
		'./src/images/home/pho2.png',
		'./src/images/home/pho3.png',
		'./src/images/home/pho4.png',
		'./src/images/home/pho5.png',
		'./src/images/home/pho6.png',
		'./src/images/home/pho7.png',
		'./src/images/home/pho8.png',
		'./src/images/home/pho9.png',
		'./src/images/home/pho10.png',
		'./src/images/home/pho11.png',
		'./src/images/home/pho12.png',
		'./src/images/home/pho13.png',
		'./src/images/home/pho14.png'
	];

	const land = [
		
		'./src/images/land/land.png',
		'./src/images/land/land1.png',
		'./src/images/land/land2.png',
		'./src/images/land/land3.png',
		'./src/images/land/land4.png',
		'./src/images/land/land5.png'
	];

	const office = [
		
		'./src/images/office/off.png',
		'./src/images/office/off1.png',
		'./src/images/office/off2.png',
		'./src/images/office/off3.png',
		'./src/images/office/off4.png',
		'./src/images/office/off5.png',
		'./src/images/office/off6.png',
		'./src/images/office/off7.png',
		'./src/images/office/off8.png',
		'./src/images/office/off9.png'
	];

	var propertyType;
	var descriptionType;
	function description() {
		propertyType = propType[between(0, 2)];
		if (propertyType === 'Home') {
			descriptionType = descriptionHome[between(0, descriptionHome.length - 1)];
		} else if (propertyType === 'Office') {
			descriptionType = descriptionOffice[between(0, descriptionOffice.length - 1)];
		} else {
			descriptionType = descriptionLand[between(0, descriptionLand.length - 1)];
		}
		return propertyType, descriptionType;
	}
	var price;
	var BorR;
	function CategoryAndPrice() {
		BorR = buyOrRent[between(0, 1)];
		if (BorR === 'Buy') {
			price = priceBuy[between(0, priceBuy.length - 1)];
		} else {
			price = priceRent[between(0, priceRent.length - 1)];
		}
		return BorR, price;
	}

	for (let index = 0; index < x; index++) {
		description();
		if (propertyType === 'Home') {
			image = homes[between(0, homes.length - 1)];
		} else if (propertyType === 'Office') {
			image = office[between(0, office.length - 1)];
		} else {
			image = land[between(0, land.length - 1)];
		}
		CategoryAndPrice();

		//const buffer = fs.readFileSync(image);

		let resizedPhoto;
		await sharp(image)
			.resize({ width: 250, height: 250 })
			.toBuffer()
			.then((data) => {
				resizedPhoto = data;
				//console.log(resizedPhoto);
			})
			.catch((err) => {
				console.log(err);
			});

		const post = new Post({
			_id: new mongoose.Types.ObjectId(),
			title: title[between(0, 3)].toString() + ' ' + propertyType,
			description: descriptionType,
			city: location[between(0, location.length - 1 )].toString(),
			price: price,
			size: size[between(0, size.length-1)],
			propType: propertyType,
			buyOrRent: BorR,
			//image: buffer.toString('base64')
			image: resizedPhoto.toString('base64')
		});
		try {
			console.log(post)
			//await post.save();
		} catch (e) {
			console.log(e);
		}
	}
	console.log('DONE ');
}

module.exports = generateData;
