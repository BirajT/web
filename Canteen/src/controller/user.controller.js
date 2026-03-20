import CustomError from "../middleware/error_handler.middleware.js";
import { asyncHandler } from "../utils/asynchandler.utils.js";

export const getAll=asyncHandler(async(req,res,next)=>{
    const users=await UserActivation.find({});
    res.status(200).json({
        message:"user fetched",
        data:users,
    });
})
export const getById=asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const user=await User.findById(id)

    if(!user){
        throw new CustomError('user not found',404)
    }

    res.status(200).json({
        message:'user by id',
        data:user,
    })
})