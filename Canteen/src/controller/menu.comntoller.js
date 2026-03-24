import { asyncHandler } from "../utils/asynchandler.utils.js";

export const getAll=asyncHandler(async(req,res,next)=>{
   const menus=await Menus.find({})
})

export const getById=asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const menu=await Menu.findOne({_id:id})
})

export const create=asyncHandler(aync)