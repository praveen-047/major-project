const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = express.Router()


//middleware function
const authMiddleware = (req,res,next)=>{
    const token = req.headers['authorization']
    if (!token){
        return res.status(401).json({erroe_msg:"no token provided"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.userId = decoded.id
        next();
    }catch(err){
        return res.status(401).json({error_msg:"Invalid token"})
    }
}


//me
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password"); // don’t send password
    if (!user) {
      return res.status(404).json({ error_msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error_msg: "Server error" });
  }
});


//avatar uplode
router.put('/avatar',authMiddleware, async(req,res)=>{
    try{
        const {avatar} = req.body 

        if(!avatar){
            return res.status(400).json({error_msg:"Avatar is required"})
        }
        const user = await User.findByIdAndUpdate(
            req.userId,
            {avatar},
            {new:true}
        )

        res.json({Success_msg:"avatar updated successfully", avatar:user.avatar})
    }catch(err){
        console.log(err)
        res.status(500).json({error_msg:"server error"})
    }
})



//signup
router.post('/signup', async(req,res)=>{
    try{
        const{name,email,password} = req.body

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({error_msg:"User already exist"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User({name,email,password:hashedPassword})
        await newUser.save()

        // const token = jwt.sign({id:newUser._id}, process.env.JWT_SECRET,{expiresIn:'30d'})
        
        res.status(201).json({success_msg:"User registered successfully"})
    }catch{
        res.status(500).json({error_msg:'Server error'})
    }
})



//login
router.post('/login', async(req,res)=>{
    try{
        const{email,password} = req.body

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error_msg:"Invalid email"})
        }


        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({error_msg:'Invalid password'})
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'30d'})

        res.status(201).json({jwt_token:token})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error_msg:"server error"})
    }
})

module.exports = router;