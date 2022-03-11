const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { getPosts, postPosts, getOnePost, DeletePost } = require('../controllers/post.js');
const Post = require('../models/Post');

router.use(bodyParser.urlencoded({ extended: true }));



router.post('/', postPosts());
router.get('/', getPosts());
router.get('/:id', getOnePost());
router.delete('/:id', DeletePost());
// router.patch('/:id', async (req,res)=>{
// 	const updates = Object.keys(req.body)

// 	try {
// 		const post = await Post.findById({_id:req.params.id})
// 		updates.forEach((update) => {
// 			post[update] = req.body[update];
// 		});
// 		await post.save();
// 	} catch (error) {
// 		res.status(400).send(e);
// 	}
// })

module.exports = router;
