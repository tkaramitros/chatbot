const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const fs = require("fs");

const Post = require("../models/Post");

router.use(bodyParser.urlencoded({ extended: true }));
const multer = require("multer");

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

router.post("/", upload.single("image"), async (req, res) => {
  // upload images
  //router.post('/', upload.single('image'), async (req, res) => {
  //const buf = [];
  //req.files.forEach((element) => buf.push(element.buffer));
  //console.log(req.file)
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

//get: /localhost:4000/post
//##########################     GET All POSTS  ##################
router.get("/", async (req, res) => {
  const reqQuery = { ...req.query };
  let queryStr = JSON.stringify(req.query);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
  try {
    //JSON.parse(queryStr)
    const posts = await Post.find(JSON.parse(queryStr));
    res.send({
      count: posts.length,
      aggelies: posts,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//##########################     GET A POST  ##################

// router.get('/:id', async (req, res) => {
// 	try {
// 		const post = await Post.findOne({ _id: req.params.id });

// send picture
// res.set('Content-Type', 'image/jpg');
// res.send(post.image);
// 		res.send(post);

// 	} catch (error) {
// 		res.status(500).send({ message: 'User not found' });
// 	}
// });
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    //send photo to browser
    // res.set('Content-Type', 'image/jpg');
    // res.send(post.image);
    res.send({ post });
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
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
