import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

 export const registerUser = async(req ,res)=>{
    const {name,email,password} = req.body

    try {
        const existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({msg:"User Already Exist"})
        }

        const hasedPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            name,
            email,
            password:hasedPassword,
        })
        await newUser.save()
        res.status(201).json({msg:"Registered Succesfully"})

    } catch (err) {
        res.status(500).json({error:err.message})
    }

};

export const loginUser = async (req ,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
           return res.status(400).json({msg:"Invalid Cradentials"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
           return res.status(400).json({msg:"Invalid Cradentials"})
        }

        const token = jwt.sign({userId: user._id,name:user.name},process.env.JWT_SECRET,{
            expiresIn:'10d'
        })

        res.json({
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                msg:"Login Succecfully",
            }
        })
        
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}