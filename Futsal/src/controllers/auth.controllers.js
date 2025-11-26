import mongoose from "mongoose"
import { asynchandler } from "../utils/asynchandler.utils.js"
import CustomError from "../middleware/error_handler.middleware.js"
import { USER_ROLE } from "../constants/enums.constants.js"
import { hashPassword } from "../utils/bcrypt.utils.js"
import USER from "../models/user.model.js";
import { comparePassword } from "../utils/bcrypt.utils.js"

export const register=asynchandler(async(req,res)=>{
    const{name,email,password}=req.body
    const image=req.file
    if(!name)
    {
        throw new CustomError("name is required",400)
    }
    if(!email)
    {
        throw new CustomError("email is required",400)
    }
    const hashedPassword=await hashPassword(password)

    const user=new USER({
        name,
        email,
        password:hashedPassword,
        role:USER_ROLE.USER
    });

    await user.save();

    res.status(201).json({
        message:"Account created",
        status:"success",
        data:user,
    })
})

export const login=asynchandler(async(req,res)=>{
    const {email,password}=req.body
    if(!email)
    {
        throw new CustomError("email is required",400)
    }
    if(!password)
    {
        throw new CustomError("password is required",400)
    }
    const user=await USER.findOne({email})
    if(!user)
    {
        throw new CustomError("Credentials does not match",400)
    }

    const isMatch=await comparePassword(password,user.password)
    if(!isMatch)
    {
        throw new CustomError("Credentials does not match",400)
    }
    res.status(201).json({ 
    message: "login success",
    data: user,
  });

})