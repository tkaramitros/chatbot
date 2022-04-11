const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const Land = require("../models/land");

router.use(bodyParser.urlencoded({ extended: true }));
const multer = require("multer");
const generateData = require("../test/test");
const checkAuth = require("../middleware/check-auth");

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
router.post("/", upload.single("image"), async (req, res) => {
  // const buf = [];
  // req.files.forEach((element) => buf.push(element.buffer));
  // console.log(req.file)
  var picture;
  if (req.file) {
    picture = req.file.buffer;
  }
  console.log(req.body);
  const land = new Land({
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
      structurefactor: req.body.structurefactor,
      coverageratio: req.body.coverageratio,
      parkingspace: req.body.parkingspace,
      slope: req.body.slope,
      orientation: req.body.orientation,
      typeofuse: req.body.typeofuse,
      withincityplan: req.body.withincityplan,
      residentialzonearea: req.body.residentialzonearea,
      forcompensation: req.body.forcompensation,
      accessfrom: req.body.accessfrom,
    },
  });

  try {
    await land.save();
    res.status(201).send(land);
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
    const test = await Land.find(JSON.parse(queryStr));
    //pagination
    //.sort({price:-1})
    let lands = Land.find(JSON.parse(queryStr)).sort(x);

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 25;
    const skip = (page - 1) * pageSize;
    const total = test.length; //trick with test so error query already.... wont hit
    const pages = Math.ceil(total / pageSize);
    lands = lands.skip(skip).limit(pageSize);
    const aggelies = await lands;

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
    const land = await Land.findOne({ _id: req.params.id });

    var buf = Buffer.from(land.image, "base64");
    //send picture
    res.set("Content-Type", "image/png");
    res.send(buf);
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
});

//##########################     DELETE A POST  ##################
router.delete("/:id", async (req, res) => {
  try {
    const land = await Land.findOneAndDelete({ _id: req.params.id });
    if (!land) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({
      message: "Deleted Successfully",
      DeletedPost: land,
    });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
