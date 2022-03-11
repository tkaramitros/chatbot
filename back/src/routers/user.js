const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

router.post('/', async (req, res) => {
	const user = new User({
		_id: new mongoose.Types.ObjectId(),
		email: req.body.email,
		password: req.body.password
	});
	try {
		await user.save();

		res.status(201).send({ user });
	} catch (e) {
		res.status(400).send(e);
	}
});

///useless???
router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.send({
			count: users.length,
			xrhstes: users
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		res.send(user);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const user = await User.findOneAndDelete({ _id: req.params.id });

		if (!user) {
			return res.status(404).send();
		}
		res.send({
			message: 'Deleted Successfully',
			DeletedUSer: user
		});
	} catch (e) {
		res.status(500).send();
	}
});

//ADD A POST - MONADIKOTITA

router.post('/userPost/:id', async (req, res) => {
	//find the user-AUTH

	const user = await User.findById({ _id: req.params.id });
	if (!user) {
        
		return res.status(404).send();
	}

	// contract.blk_data.push(blk_data);
	user.post.push(req.body.post);
	console.log(user);
	try {
		await user.save();
		res.send(user);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get('/userPost/:id', async (req, res) => {
    const post = await User.find({ post: req.params.id })
    try {
		//post[0].post = post[0].post.filter
        console.log( post[0].post)
		res.send(post)
        
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
