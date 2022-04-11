const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', async (req, res) => {
	User.find({email: req.body.email})
	.exec()
	.then(user => {
	 	if (user.length >= 1) {
			 return res.status(409).json({
				 message: 'Mail exists'
			 });
		 } else {
			bcrypt.hash(req.body.password, 10, (err, hash) =>{
				if (err) {
					return res.status(501).json({
						error: err
					})
				} else {
					const user = new User({
						_id: new mongoose.Types.ObjectId(),
						email: req.body.email,
						password: hash
					});
					user
					.save()
					.then(result =>{
						console.log(result);
						res.status(201).json({
							message: 'User created'
						});
					})
					
					.catch(err =>{
						console.log(err);
						res.status(500).json({
							error: err
						});
					});
				}
			})	
		 }
	})
	
});

console.log(req.body)

router.post('/login',async (req, res) => {
	User.find({ email: req.body.email})
	.exec()
	.then(user => {
		if (user.length < 1) {
			return res.status(401).json({
				message: 'Auth failed'
			});
		}
		bcrypt.compare(req.body.password, user[0].password, (err, result) => {
				if (err) {
					return res.status(401).json({
						message: 'Auth failed'
					});
				}
				if (result) {
					const token = jwt.sign(
						{
							email: user[0].email,
							userId: user[0]._id
						},
						process.env.JWT_KEY,
						{
							expiresIn: "1h"
						}
					);
					return res.status(200).json({
						message: "Auth successful",
						token: token
					});
				}
				res.status(401).json({
					message: 'Auth failed'
				});
			});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
}) ;	


///useless????
router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.send({
			count: users.length,
			xrhstes: users
		});
	} catch (error) {
		res.status(400).send(error);
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
