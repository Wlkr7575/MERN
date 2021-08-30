const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const user = require('../database/user')

const signin = async(req,res)=>{
    const {email,password} = req.body

    try {
        const existingUser = await user.findOne({email})
        if(!existingUser){
            return res.status(404).json({message:"User doesn't exist"})
        }else{
            const  isPasswordCorrect= await bcrypt.compare(password,existingUser.password)
            if(!isPasswordCorrect){
                return res.status(404).json({message:"invalid credentials"})
            }else{
                const token= jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:'1h'})
                res.status(200).json({result:existingUser,token})
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"something  went wrong"})
    }
}
const signup = async(req,res)=>{
    const {email,password,confirmPassword,firstname,lastname} = req.body;
    try {
        const existingUser = await user.findOne({email});
        if(existingUser) return res.status(400).json({message:"User already exist"});
        if(password !== confirmPassword) return res.status(400).json({message:"Password invalid"})
        const  hashedPassword = await bcrypt.hash(password, 12 );
        const result=  await user.create({email,password:hashedPassword,name:`${firstname}${lastname}`})
        const token= jwt.sign({email:result.email,id:result._id},'test',{expiresIn:"1h"})
        res.status(200).json({result,token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
    }
}
const getUser = async(req,res)=>{
    try {
        const users = await user.find();
        console.log(users)
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
        res.status(404).json({message:error.message})
    }
}

module.exports = {
    signin,
    signup,
    getUser
}