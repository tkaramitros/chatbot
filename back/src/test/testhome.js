const mongoose = require("mongoose");
const Home = require("../models/home");
const sharp = require("sharp");

async function generateData(x) {
  function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const title = ["Nice", "Big", "Great", "Old"];
  const descriptionHome = [
    "Luxury newly built apartments for sale , with view, in a very good location . They have  bedrooms,  bathrooms, living-dining room with Italian kitchens, marble and wood on the floors. They also have a storage room and a parking space in the basement are also included. The apartments are ideal for Golden Visa since they are rented with a current yield of 3% per year",
    "It includes  its own small garden, built in 2005. This wonderful property is located in a quiet area in , within walking distance from the Port and city center.On the ground floor we find the living room with a fireplace and balcony that leads to the garden, the open plan kitchen with a dining room and a guest’s WC.",
    "Apartment  In Plot 500 sq.m., Property Status: under construction,  Heating: Autonomous - Petrol, View: Sea view, Building Year: 2013, Energy Certificate: C, 1 parking(s), Floor type: Wooden floors + Tiles, Type of door frames: Aluminum, Elevator, Security door, Security alarm, CCTV, Storage room, Fireplace, Night stream, Double Glazed Windows, Window Screens, Balconies, Pets Allowed, Luxury, Airy, Roadside, Bright, On Corner, AirConditioning, Solar water system, Boiler, New Construction, Painted, Distance from: Airport (m(sad) 11000, Seaside (m(sad) 100, 	",
    "Property Code: 1-141 - Apartment . This  Apartment is built on the Ground floor and features 1 Bedroom, Livingroom, Kitchen, Bathroom The property also enjoys Heating system: Autonomous heating - Oil, View of the Sea, Window frames: Aluminium, Door: Armourplated door, accessible for people with disabilities, parking, garden, A/C, alarm system, furnished, appliances, pest net. Built in 2011, distance from sea 600 meters distance from airport 14000 meters distance from metro 14000 meters ",
    "Aiarchou street, 80 sqm, 2nd floor, modern construction, airy, bright, 2 bedrooms, open space living room-kitchen, bathroom, 3 spacious balconies, ground floor parking lot, storage space in the basement, aluminum window frames with double glazing, reinforced security door, alarm preinstallation, autonomous oil heating with reasonable monthly communal fees. The property is located in a great area next to marketplace, with access to means of public transport. ",
    "Apartment For Sale,, Property Status: Very Good, Floor: 3rd, 2 Bedrooms 1 Kitchen(s), 2 Bathroom(s), Heating: Central - Petrol, View: Cityscape, Building Year: 1978, Energy Certificate: E, Floor type: Wooden floors, Type of door frames: Aluminum, Features: Elevator, Security door, Electric Appliances, Double Glazed Windows, Balcony Cover, Balconies, Luxury, Airy, Roadside, Bright, AirConditioning, Renovated,",
    "Excellent apartment . on the 5th floor with extra room on the 6th floor, connected by an internal staircase. Built in 1988, extremely spacious and bright, with 2 very large terraces on both floors and a large auxiliary balcony on the back that serves the kitchen. Stunning views . It consists of 3 bedrooms with the possibility of 4th, living room, kitchen, bathroom, WC and storage - dressing room. It was built in 1965 and has central heating - gas, unrestricted views, sliding aluminum windows, fitted wardrobes, elevator, awnings, internal staircase and balconies of approximately 100 square meters.",
    "Floor Apartment For Sale or Rent Property Status: Amazing, Floor: 4th, 1 Level(s), 2 Bedrooms 1 Kitchen(s), 2 Bathroom(s), Heating: Personal - Electricity, View: Good, Building Year: 2022, Energy Certificate: A, 1 parking(s), Floor type: Wooden floors + Tiles, Type of door frames: Aluminum, Features: Elevator, Security door, CCTV, Storage room, Fireplace, Night stream, Double Glazed Windows, Window Screens, Balconies, Metro, Luxury, Airy, Bright, Underfloor, AirConditioning, Solar water system, New Construction,",
    "On the 1st floor. It consists of 2 bedrooms, living room, kitchen, bathroom. Renovated with excellent aesthetic materials. Bright and bright. It has central gas heating, aluminum windows, wooden floors, security door, many fitted wardrobes and storage spaces, elevator, double glazing",
    "Refurbished, Ground floor floor, 1 Level(s), 2 Bedrooms, (2 Master), 1 Kitchen(s), 2 Bathroom(s), 1 WC, Autonomous Heating, Construction 1979, Energy Certificate: C, Type of doors: Aluminum, Security door, Double Glazed Windows, Balcony Cover, Pets Allowed, For Investment, Not Roadside, Bright, AirConditioning, Back yard (Garden), Painted, Renovated",
  ]; //0-9
  const location = [
    "Rafina",
    "Loutsa",
    "Thessaloniki",
    "Xalandri",
    "Panormou",
    "Ilioupoli",
    "Pagkrati",
    "Lamia",
    "Gerakas",
    "Nea Makri",
    "Orestiada",
    "Mitilini",
    "Xalkida",
    "Agia Parakskeuh",
  ]; //0-13
  const priceRent = [
    250, 280, 300, 350, 370, 375, 320, 330, 340, 400, 450, 500, 600, 140, 130,
    150, 700, 630, 560,
  ]; //0-17
  const priceBuy = [
    40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000,
    140000, 150000, 160000, 170000, 180000, 190000, 200000, 210000, 220000,
    230000, 240000, 250000, 260000,
  ]; //0-22
  const size = [100, 50, 40, 60, 70, 80, 90, 110, 120, 55, 45, 65, 105, 150]; //12
  const propType = "Home";
  const buyOrRent = ["Buy", "Rent"];
  const homes = [
    "./src/images/home/house_PNG71.png",
    "./src/images/home/house_PNG72.png",
    "./src/images/home/house_PNG73.png",
    "./src/images/home/pho.png",
    "./src/images/home/pho2.png",
    "./src/images/home/pho3.png",
    "./src/images/home/pho4.png",
    "./src/images/home/pho5.png",
    "./src/images/home/pho6.png",
    "./src/images/home/pho7.png",
    "./src/images/home/pho8.png",
    "./src/images/home/pho9.png",
    "./src/images/home/pho10.png",
    "./src/images/home/pho11.png",
    "./src/images/home/pho12.png",
    "./src/images/home/pho13.png",
    "./src/images/home/pho14.png",
  ];
  const wifi = ["Yes", "No"];
  const pets = ["Yes", "No"];
  const heating = ["Yes", "No"];
  const typeofheating = [
    "Boilers",
    "Fireplaces",
    "Heat Pumps",
    "Electric Space Heaters",
  ];
  const energyefficiency = ["A", "B", "C", "D"]; //0-3
  const yearofbuilt = [
    1998, 1950, 1994, 1960, 2007, 1988, 1990, 2011, 2012, 2015, 2017, 1965,
  ];
  const renovationyear = [
    2010, 2015, 2014, 2016, 2007, 2018, 2019, 2011, 2012, 2015, 2017, 2013,
  ]; //0-11
  const levels = [1, 2, 3, 4];
  const parkingspace = ["Yes", "No"];
  const keller = ["Yes", "No"]; //storage unit
  const kichen = [1, 2];
  const bathrooms = [1, 2, 3, 4];
  const livingroom = [1, 2, 3, 4];
  const bedroom = [1, 2, 3, 4];
  const rooms = [1, 2, 3, 4];
  const typeofflooring = ["Wood", "Marble", "Cobblestone", "Tiles"];
  const furniture = ["Yes", "No"];
  const alarmsystem = ["Yes", "No"];
  const garden = ["Yes", "No"];
  const typeofview = ["Seaside", "Sea", "Mountain", "Field"];
  const forpeoplewithmobilityproblems = ["Yes", "No"];
  const floorlevel = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var descriptionType;
  function description() {
    descriptionType = descriptionHome[between(0, 9)];
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
  function Yearwithrenovation() {
    newrenovationyear = renovationyear[between(0, 11)];
    newyearofbuilt = yearofbuilt[between(0, 11)];
    while (newrenovationyear <= newyearofbuilt) {
      newyearofbuilt = yearofbuilt[between(0, 11)];
    }
    return newrenovationyear, newyearofbuilt;
  }

  for (let index = 0; index < x; index++) {
    description();
    CategoryAndPrice();
    Yearwithrenovation();
    image = homes[between(0, homes.length - 1)];
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
    const home = new Home({
      _id: new mongoose.Types.ObjectId(),
      title: title[between(0, 3)].toString() + " " + propType,
      description: descriptionType,
      city: location[between(0, 13)].toString(),
      price: price,
      size: size[between(0, 12)],
      propType: propType,
      buyOrRent: BorR,
      image: resizedPhoto.toString("base64"),
      additional: {
        wifi: wifi[between(0, 1)],
        pets: pets[between(0, 1)],
        keller: keller[between(0, 1)],
        kichen: kichen[between(0, 1)],
        heating: heating[between(0, 1)],
        furniture: furniture[between(0, 1)],
        alarmsystem: alarmsystem[between(0, 1)],
        forpeoplewithmobilityproblems:
          forpeoplewithmobilityproblems[between(0, 1)],
        garden: garden[between(0, 1)],
        energyefficiency: energyefficiency[between(0, 3)],
        floorlevel: floorlevel[between(0, 8)],
        renovationyear: newrenovationyear,
        yearofbuilt: newyearofbuilt,
        parkingspace: parkingspace[between(0, 1)],
        typeofheating: typeofheating[between(0, 3)],
        levels: levels[between(0, 3)],
        livingroom: livingroom[between(0, 3)],
        bedroom: bedroom[between(0, 3)],
        rooms: rooms[between(0, 3)],
        typeofflooring: typeofflooring[between(0, 3)],
        typeofview: typeofview[between(0, 3)],
        bathrooms: bathrooms[between(0, 3)],
      },
    });
    try {
      await home.save();
      //console.log(home);
    } catch (e) {
      console.log(e);
    }
  }
  console.log("done");
}

module.exports = generateData;
//generateData(2);
