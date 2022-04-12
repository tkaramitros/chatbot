const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const Post = require("../models/Post");
router.use(bodyParser.urlencoded({ extended: true }));
const multer = require("multer");
const generateData = require("../test/test");
const checkAuth = require("../middleware/check-auth");
const sharp = require("sharp");

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
  //checkAuth,
  let picture;
  if (req.file) {
    picture = req.file.buffer;

    await sharp(picture)
      .resize({ width: 250, height: 250 })
      .toBuffer()
      .then((data) => {
        picture = data;
        //console.log(resizedPhoto);
      })
      .catch((err) => {
        console.log(err);
      });
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
    image: picture.toString("base64"),
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
});

//##########################     GET A POST  ##################

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    var buf = Buffer.from(post.image, "base64");
    //send picture
    res.set("Content-Type", "image/png");
    res.send(buf);
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
});

//##########################     DELETE A POST  ##################
router.delete("/:id", async (req, res) => {
  //checkAuth,
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
