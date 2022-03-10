const express = require('express');
const router = express.Router()
const mongoose= require('mongoose')

const Post = require('../models/Post')



router.post('/',  async (req,res)=>{ 
    //res.send('Testing! Post') 
    //Create Post
    //console.log(req.body.area.properties.address)
    const post = new Post( {
      _id: new mongoose.Types.ObjectId(),
      title:req.body.title,
      xrhsh:req.body.xrhsh,
      Floor:req.body.Floor,     
		Tetragonika: req.body.Tetragonika, 
		Timi: req.body.Timi, 
		Timi_tetragoniko: req.body.Timi_tetragoniko, 
		Perigrafi: req.body.Perigrafi, 
		Diathesimo_apo: req.body.Diathesimo_apo,
      area: {		
			
			properties: {
				address: req.body.area.properties.address, 
				add_num: req.body.area.properties.add_num, 
				TK:req.body.area.properties.TK
			}
		}
   }
		
      
      )    
    try{
       await post.save()

       
        res.status(201).send({post})
    }catch(e){
        res.status(400).send(e)   
    }       
 })


 router.get('/',async(req,res) =>{
    //res.send('Testing! Get') 


    try {
       const posts = await Post.find()
       res.send({count:posts.length,
               aggelies:posts})
    } catch (error) {
      res.status(500).send(error)
    }  

 })


 router.get('/:id',async(req,res) =>{
   //res.send('Testing! Get') 


   try {
      const post = await Post.findOne({_id:req.params.id})
      res.send(post)
   } catch (error) {
     res.status(500).send({message:'User not found'})
   }  

})

 router.delete('/:id',async (req,res)=>{
    
   try {  
       const post = await Post.findOneAndDelete({_id:req.params.id})
      
       if(!post){
           return res.status(404).send() 
       }
       res.send({
               message:'Deleted Successfully',
               DeletedPost:post})
   } catch (e) {
       res.status(500).send()
   }
})



module.exports=router