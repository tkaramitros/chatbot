const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const Home = require("../models/Home");

router.use(bodyParser.urlencoded({ extended: true }));
const multer = require("multer");
const generateData = require("../test/test");
const checkAuth = require('../middleware/check-auth');

//##########################     CREATE A POST - WITH IMAGE ##################
const upload = multer({
  //dest:'avatars',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(cb(new Error("Please upload a Image ")));
    }
    cb(undefined, true);
  },
});

//router.post('/', upload.array('images'), async (req, res) => {
// upload images
router.post("/", checkAuth, upload.single("image"), async (req, res) => {
  // const buf = [];
  // req.files.forEach((element) => buf.push(element.buffer));
  // console.log(req.file)
  var picture;
  if (req.file) {
    picture = req.file.buffer;
  }
  console.log(req.body)
  const home = new Home({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    city: req.body.location,
    price: req.body.price,
    size: req.body.size,
    propType: req.body.propType,
    buyOrRent: req.body.buyOrRent,
    //images: buf
    image: picture,
    additional: {
			wifi: req.body.wifi,
			pets: req.body.pets,
			heating: req.body.heating,
            typeofheating:req.body.typeofheating,
            energyefficiency: req.body.energyefficiency,
            yearofbuilt: req.body.yearofbuilt,
            renovationyear:req.body.renovationyear,
            levels:req.body.levels,
            parkingspace: req.body.parkingspace,
            keller: req.body.keller,
            kichen: req.body.kichen,
            bathrooms: req.body.bathrooms,
            livingroom: req.body.livingroom,
            bedroom: req.body.bedroom,
            typeofflooring:req.body.typeofflooring,
            furniture: req.body.furniture,
            alarmsystem: req.body.alarmsystem,
            garden: req.body.garden,
            typeofview: req.body.typeofview,
            forpeoplewithmobilityproblems: req.body.forpeoplewithmobilityproblems,
            floorlevel:req.body.floorlevel,
		}
  });

  try {
    await home.save();
    res.status(201).send(home);
  } catch (e) {
    res.status(400).send(e);
  }
});

//##########################     GET All POSTS  ##################
router.get("/", async (req, res) => {
  //SORT
  let x;
  if (req.query.sort) {
    let sortby = req.query.sort;
    x = sortby;
  } else {
    x = "createdAt";
  }
  const reqQuery = { ...req.query };
  const removeFields = ["sort"];
  removeFields.forEach((val) => delete reqQuery[val]);
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
  try {
    //find all the posts with that criteria   
    const test = await Home.find(JSON.parse(queryStr));
    //pagination
    //.sort({price:-1})
    let homes = Home.find(JSON.parse(queryStr)).sort(x);

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 25;
    const skip = (page - 1) * pageSize;
    const total = test.length; //trick with test so error query already.... wont hit
    const pages = Math.ceil(total / pageSize);
    homes = homes.skip(skip).limit(pageSize);
    const aggelies = await homes;

    res.send({
      countPerPage: aggelies.length,
      pages,
      page,
      aggelies: aggelies,
      //POSTMAN TEST --> localhost:4000/post?page=<page number>
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//##########################     GET A POST  ##################

router.get("/:id", async (req, res) => {
  try {
    const home= await Home.findOne({ _id: req.params.id });

    var buf = Buffer.from(home.image, "base64")
		//send picture
		res.set('Content-Type', 'image/png');
		res.send(buf);
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
});

//##########################     DELETE A POST  ##################
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const home = await Home.findOneAndDelete({ _id: req.params.id, check });
    if (!home) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({
      message: "Deleted Successfully",
      DeletedPost: home,
    });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
