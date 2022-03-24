const express= require("express");
const res = require("express/lib/response");
const User = require("../models/User");
const router=express.Router()
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")
const isAuth = require('../Middlewares/isAuth')



//@role: testing
//@url: http://localhost:5000/api/user/test
router.get("/test", (req, res) => {
    res.send("it works ..");
  });
  //@role: register a new user
//@url: http://localhost:5000/api/user/register

router.post("/register", async (req,res)=>{
  // step1: add a new user

  // récuperer les data de l'utilisateur
  const {name,email,password}= req.body
  try {
    // check if the email is reserved
    let user= await User.findOne({email})
    if (user){
      return res.status(400).json({msg:"the email is already reserved.."})
    }
    // create a hashed password
    const hashedPassword= await bcrypt.hash(password,10)
    // create a new user
    user= new User({name,email,password:hashedPassword})
    // save the user in the db
    user.save()
// step 2: sign a token (acesss/ login)

// create a token
const token = jwt.sign({userId:user._id},process.env.SECRET_PASS)

    //response
    res.status(200).json({user,token})
  } catch (error) {
    res.status(500).json({msg:error.message})
    
  }
})
  //@role: login an existing user
//@url: http://localhost:5000/api/user/login

router.post("/login",async (req,res)=>{
// recuperer les data de l'utilisateur
const {email,password}= req.body
  try {
    // check if the email already exist
    let user= await User.findOne({email})
    console.log(user)
    res.status(200).json({msg:"the email has no account"})

  } 
  
    // if (!user){
    //   return res.status(404).json({msg:"the email has no account"})
    // }

//     const isMatch= await bcrypt.compare(password,user.password)
   
//     if(!isMatch){
//       return res.status(400).json({msg:'bad crediantials'})
//     } 
    
//     // sign a token
//     const token = await jwt.sign({userId:user._id},process.env.SECRET_PASS)
    
//     res.status(200).json({user,token})
   catch (error) {
    res.status(500).json({msg:error.message})
  }})

// })
 //@role: getting the authentificated user
//@url: http://localhost:5000/api/user/profile
router.get("/profile",isAuth,(req,res)=>{
  try {
    
  } catch (error) {
    res.status(500).json({msg:error.message})
    
  }
})






module.exports = router;