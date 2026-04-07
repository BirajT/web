import { asyncHandler } from "../utils/asynchandler.utils.js";
import CustomError from "../middleware/error_handler.middleware.js";
import Menu from "../models/menu.model.js";
import { uploadToCloud } from "../utils/cloudinary.utils.js";

export const getAll=asyncHandler(async(req,res,next)=>{
   const menus=await Menu.find({}).populate('category', 'name')
    res.status(200).json({
        message:"menus fetched",
        data:menus,
    });
})

export const getById=asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const menu=await Menu.findById(id)

    if(!menu){
        throw new CustomError("menu not found",404)
    }

    res.status(200).json({
        message:"menu fetched",
        data:menu
    })
})

export const create=asyncHandler(async(req,res,next)=>{
    
    const {name,price,category}=req.body;
    const file=req.file;

    if(!file){
        throw new CustomError("image is required",400);
    }

    const menu=new Menu({
        name,
        price,
        category
    });

   
        const { path, public_id } = await uploadToCloud(
          file.path,
          "/menu_images"
        );
        menu.image = {
          path,
          public_id,
        };


 await menu.save();

  res.status(201).json({
    message: "Menu created",
    status: "success",
    data: menu,
  });
})

export const remove=asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const menu=await Menu.findByIdAndDelete(id)

    if(!menu){
        throw new CustomError("menu not found",404)
    }

    res.status(200).json({
        message:'deleted',
        data:null
    })
})
