import mongoose from "mongoose"
import { asynchandler } from "../utils/asynchandler.utils"
import CustomError from "../middleware/error_handler"

export const register=asynchandler(async(req,res)=>{
    const{name,email,password}=req.body
    const image=req.file
    if(!name)
    {
        throw new CustomError("name is required",400)
    }
    if(!email)
    {

    }

})