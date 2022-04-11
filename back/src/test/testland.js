const mongoose = require("mongoose");
const Land = require("../models/Land");
const sharp = require('sharp');

async function generateData(x) {
  function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const title = ["Nice", "Big", "Great", "Old"];
  const descriptionLand = [
		' It is located in a residential area and its zoning is recreational with a great view',
		' Land Plot  building factor 3, coverage factor 70%, builds , it is a frontage, bright, in a unique location,  470 meters (5 minutes walk) , easy access to all facilities, near to schools, supermarkets, pharmacies, banks, coffee stores, restaurants, commercial stores, and public transportation.',
		'Plane plot with facade length of 20m with a Coefficient Building of 08, Coverage Ratio 405% and can build up to 4000sm',
		'Plane parcel  with a Coefficient Building of 0.046511627906976744 . It already includes a building and its zoning is agricultural with a great view. It is located 2km away from the nearest village, 4km from the nearest town.',
		'The plot is located between a new and old national road. Building factor 3, coverage factor 70%, builds , it is a frontage,'
	];
  const location = [ 'Rafina', 'Loutsa', 'Thessaloniki', 'Xalandri', 'Panormou', 'Ilioupoli','Pagkrati',
                      'Lamia','Gerakas','Nea Makri','Orestiada','Mitilini','Xalkida','Agia Parakskeuh' ]; //0-13
	const priceRent = [ 250, 280, 300, 350, 370, 375, 320, 330, 340, 400, 450, 500, 600,140,130,150,700,630,560 ]; //0-17
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
	]; //0-22
  const size = [ 100, 50, 40, 60, 70, 80, 90, 110, 120, 55, 45, 65, 105, 150 ]; //12
  const propType =  "Land";
  const buyOrRent = ["Buy", "Rent"];
  const land = [
		
		'./src/images/land/land.png',
		'./src/images/land/land1.png',
		'./src/images/land/land2.png',
		'./src/images/land/land3.png',
		'./src/images/land/land4.png',
		'./src/images/land/land5.png'
	];
  const withincityplan = ["Yes", "No"]; 
  const residentialzonearea = ["Yes", "No"];
  const forcompensation = ["Yes", "No"];
  const slope = ["Office", "Home" ]; 
  const orientation = ["South", "North", "East", "West"]; //0-3
  const coverageratio = [50, 100, 60, 80, 200, 150];
  const structurefactor = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];//0-9
  const	parkingspace = ["Yes", "No"];
  const typeofuse = ["Build a house", "Build an appartment complex", "Harvest", "Farm"]; 
  const accessfrom = ["Seaside", "Mapped Road", "Next Land", "Dirt Road"];
 
  var descriptionType;
  function description() {
    descriptionType = descriptionLand[between(0, descriptionLand.length-1)];
    return descriptionType;
  }
  var price;
  var BorR;
  function CategoryAndPrice() {
    BorR = buyOrRent[between(0, 1)];
    if (BorR === "Buy") {
      price = priceBuy[between(0, 22)];
    } else {
      price = priceRent[between(0, 17)];
    }
    return BorR, price;
  }

  for (let index = 0; index < x; index++) {
    description();
    CategoryAndPrice();
    image = land[between(0, land.length - 1)];
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
    const post = new Land({
      _id: new mongoose.Types.ObjectId(),
      title: title[between(0, 3)].toString() + " " + propType,
      description: descriptionType,
      city: location[between(0, 13)].toString(),
      price: price,
      size: size[between(0, 12)],
      propType: propType,
      buyOrRent: BorR,
      image: resizedPhoto.toString('base64'),
      additional:{
        withincityplan : withincityplan[between(0, 1)],
        residentialzonearea : residentialzonearea[between(0, 1)],
        forcompensation : forcompensation[between(0, 1)],
        slope : slope[between(0, 1)],
        orientation : orientation[between(0, 3)],
        coverageratio : coverageratio[between(0, 5)],
        structurefactor : structurefactor[between(0, 9)],
        parkingspace : parkingspace[between(0, 1)],
        typeofuse : typeofuse[between(0, 3)],
        accessfrom : accessfrom[between(0, 3)],
      }
    });
    try {
      await post.save();
      //console.log(post);
    } catch (e) {
      console.log(e);
    }
  }
  console.log("done");
}

module.exports = generateData;
//generateData(1);
