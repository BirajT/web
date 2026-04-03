import { asyncHandler } from "../utils/asynchandler.utils.js";
import CustomError from "../middleware/error_handler.middleware.js";
import Menu from "../models/menu.model.js";
import { uploadToCloud } from "../utils/cloudinary.utils.js";

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

export const create=asyncHandler(async(req,res,next)=>{
    
    const {name,price,category}=req.body;
    const file=req.file;

    if(!file){
        throw new CustomError("image is required",400);
    }

    const menu=new Menu*({
        name,
        price,
        category
    });

    if (file) {
        const { path, public_id } = await uploadToCloud(
          image.path,
          "/profile_images"
        );
        user.profile_image = {
          path,
          public_id,
        };
      }

 await menu.save();

  res.status(201).json({
    message: "Account created",
    status: "success",
    data: menu,
  });
})

export const remove=asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const menu=await Menu.findByIdAndDelete(id)

    if(!menu){
        throw new CustomError("users not found")
    }

    res.status(200).json({
        message:'deleted',
        data:null
    })
})
