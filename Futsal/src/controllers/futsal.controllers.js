import CustomError from "../middleware/error_handler.middleware"
import Futsal from "../models/futsal.model"
import { asyncHandler } from "../utils/asynchandler.utils"

const dir='/futsals'

export const getAll=asyncHandler(async(req,res)=>{
    const futsals=await Futsal.find({})
    res.status(200).json({
        message:"Futsal fetched",
        status:"success",
        data:futsals,
    });
});

export const getById=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    
    const futsal=await Futsal.findOne({_id:id})
    if(!futsal)
    {
        throw new CustomError("Futsal not found",404)
    }

    res.status(200).json({
        message:"Futsal fetched",
        status:"success",
        data:futsal
        
    })
})

