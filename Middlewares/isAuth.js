const jwt = require("jsonwebtoken")
const User = require("../models/User")

const isAuth= async(req,res,next)=>{

    try {
        const token=req.headers['x-auth-token']
        if(!token){return res.status(404).json({msg:'user not authentificated...'})}
        const decodedToken = await jwt.verify(token,process.env.SECRET_PASS)
        const id= decodedToken.userId
        const user = await User.findById(id)
        res.status(200).json(user)
        req.user=user
        next()
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
module.exports=isAuth