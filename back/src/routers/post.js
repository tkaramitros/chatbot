const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/Post');

router.post('/', async (req, res) => {
	

	const post = new Post({
		_id: new mongoose.Types.ObjectId(),
		title:req.body.title,
		description:req.body.description,
		location:req.body.location,
		price:req.body.price,
		size:req.body.size,
		propType:req.body.propType,
		buyOrRent:req.body.buyOrRent,
		//image:req.body.image
	});

	try {
		await post.save();

		res.status(201).send({ post });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/', async (req, res) => {
	//res.send('Testing! Get')

	try {
		const posts = await Post.find();
		res.send({
			count: posts.length,
			aggelies: posts
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/:id', async (req, res) => {
	//res.send('Testing! Get')

	try {
		const post = await Post.findOne({ _id: req.params.id });
		res.send(post);
	} catch (error) {
		res.status(500).send({ message: 'User not found' });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const post = await Post.findOneAndDelete({ _id: req.params.id });

		if (!post) {
			return res.status(404).send();
		}
		res.send({
			message: 'Deleted Successfully',
			DeletedPost: post
		});
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
