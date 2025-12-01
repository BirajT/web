import CustomError from "../middleware/error_handler.middleware"
import Futsal from "../models/futsal.model"
import { asyncHandler } from "../utils/asynchandler.utils"
import { uploadToCloud } from "../utils/cloudinary.utils.js"

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

export const create=asyncHandler(async(req,res)=>{
    const {name,address,contact,opening_time,closing_time,price_per_hour}=req.body
    const file=req.file;

    if(!file){
        throw new CustomError('image is required',400)
    }

    const futsal=new Futsal({name,address,contact,opening_time,closing_time,price_per_hour})

     const { path, public_id } = await uploadToCloud(file.path,dir);
    
    futsal.futsal_image = {
        path,
        public_id
    }

    await futsal.save();

    res.status(201).json({
        message: 'Futsal created.',
        status: 'success',
        data:futsal
    })

})

export const update=asyncHandler(async(req,res)=>{

    const {name,address,contact,opening_time,closing_time,price_per_hour}=req.body
    const {id}=req.params
    const file=req.file

    const futsal=await Futsal.findOne({_id:id})

    if(!futsal)
    {
        throw new CustomError('Futsal not found',404)
    }
    if(name) Bra.name=name
})

