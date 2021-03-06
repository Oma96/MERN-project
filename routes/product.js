const express= require("express");
const res = require("express/lib/response");
const Product = require("../models/Product");
const router=express.Router()
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken");
const isAuth = require("../Middlewares/isAuth");


//@role: testing
//@url: http://localhost:5000/api/product/test
router.get("/test", (req, res) => {
    res.send("it works ..");
  });
  // @role: create data
//url:http://localhost:5000/api/product/add

router.post("/add", async (req,res)=>{
    const {name,desc,price,adress,date,phone} =req.body
    try {
        const newProduct= new Product({name,desc,price,adress,date,phone})
        const product=  await newProduct.save()
        res
        .status(200)
        .json({msg:`${name} has been added to your product list`, product})
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
// @role: read all the  data
//url:http://localhost:5000/api/product/all

router.get("/all", async (req,res)=>{
    try {
        const products =await Product.find()
        res
        .status(200)
        .json({products})

    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
// @role: update data
//url:http://localhost:5000/api/product/edit/:id

router.put("/edit/:id",async (req,res)=>{
    const ID = req.params.id
    try {
        const product= await Product.findByIdAndUpdate(ID,{$set:req.body})
        res.status(200).json({product})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})
// @role: delete data
//url:http://localhost:5000/api/product/delete/:id

router.delete("/delete/:id", async (req,res)=>{
    const ID = req.params.id
    try {
        const product= await Product.findByIdAndDelete(ID)
        res.status(200).json({product})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})
// @role: get product by id
//url:http://localhost:5000/api/product/get/:id

router.get("/get/:id", async(req,res)=>{
    const ID =req.params.id
    try{
        const product = await Product.findById(ID)
        res.status(200).json({product})
    } catch{
        res.status(400).json({msg:error.message})
    }
})









module.exports = router;