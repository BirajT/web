import { asyncHandler } from "../utils/asynchandler.utils.js";

export const getAll=asyncHandler(async(req,res,next)=>{
   const menus=await Menus.find({})
    res.status(200).json({
        message:"user fetched",
        data:menus,
    });
})

export const getById=asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const menu=await Menu.findOne({_id:id})
    res.status(200).json({
        message:"menu fetched",
        data:"menu"
    })
})

export const create=asyncHandler(aync(req,res,next)=>{
    
    const {name,price,category,}=req.body;
    
    
})