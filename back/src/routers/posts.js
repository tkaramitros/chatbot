const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const Post = require("../models/Post");

router.use(bodyParser.urlencoded({ extended: true }));
const multer = require("multer");
const generateData = require("../test/test");
=======
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const Post = require('../models/Post');
router.use(bodyParser.urlencoded({ extended: true }));
const multer = require('multer');
const generateData = require('../test/test');


>>>>>>> c7f7e90fbd58e1b98ca76e6a06163871a0c5ac22

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

<<<<<<< HEAD
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

  const post = new Post({
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
  });

  try {
    await post.save();
    res.status(201).send(post);
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
    const test = await Post.find(JSON.parse(queryStr));
    //pagination
    //.sort({price:-1})
    let posts = Post.find(JSON.parse(queryStr)).sort(x);

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 25;
    const skip = (page - 1) * pageSize;
    const total = test.length; //trick with test so error query already.... wont hit
    const pages = Math.ceil(total / pageSize);
    posts = posts.skip(skip).limit(pageSize);
    const aggelies = await posts;

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
=======
router.post('/', upload.single('image'), async (req, res) => {
	// const buf = [];
	// req.files.forEach((element) => buf.push(element.buffer));
	// console.log(req.file)
	var picture;
	if (req.file) {
		picture = req.file.buffer;
	}

	const post = new Post({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		description: req.body.description,
		city: req.body.location,
		price: req.body.price,
		size: req.body.size,
		propType: req.body.propType,
		buyOrRent: req.body.buyOrRent,
		//images: buf
		image: picture
	});

	try {
		await post.save();
		res.status(201).send(post);
	} catch (e) {
		res.status(400).send(e);
	}
});

//##########################     GET All POSTS  ##################
router.get('/', async (req, res) => {
	//SORT
	let x;
	if (req.query.sort) {
		let sortby = req.query.sort;
		x = sortby;
	} else {
		x = 'createdAt';
	}
	const reqQuery = { ...req.query };
	const removeFields = [ 'sort' ];
	removeFields.forEach((val) => delete reqQuery[val]);
	let queryStr = JSON.stringify(reqQuery);
	queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
	try {
		//find all the posts with that criteria
		const test = await Post.find(JSON.parse(queryStr));
		//pagination
		//.sort({price:-1})
		let posts = Post.find(JSON.parse(queryStr)).sort(x);
		const page = parseInt(req.query.page) || 1;
		const pageSize = parseInt(req.query.limit) || 25;
		const skip = (page - 1) * pageSize;
		const total = test.length; //trick with test so error query already.... wont hit
		const pages = Math.ceil(total / pageSize);
		posts = posts.skip(skip).limit(pageSize);
		const aggelies = await posts;

		res.send({
			countPerPage: aggelies.length,
			pages,
			page,
			aggelies: aggelies
			//POSTMAN TEST --> localhost:4000/post?page=<page number>
		});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
>>>>>>> c7f7e90fbd58e1b98ca76e6a06163871a0c5ac22
});

//##########################     GET A POST  ##################

<<<<<<< HEAD
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    //send picture
    res.set("Content-Type", "image/jpg");
    res.send(post.image);
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
=======
router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id });

		//send picture
		res.set('Content-Type', 'image/jpg');
		res.send(post.image);
	} catch (error) {
		res.status(500).send({ message: 'User not found' });
	}
>>>>>>> c7f7e90fbd58e1b98ca76e6a06163871a0c5ac22
});

//##########################     DELETE A POST  ##################
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id });
    if (!post) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({
      message: "Deleted Successfully",
      DeletedPost: post,
    });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
