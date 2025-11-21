import mongoose from "mongoose"

export const register=async(req,res)=>{
    const{name,email,password}=req.body

    if(!name || !password || !email){
        res.status(400).json({
            message:"password required",
            success:false
        })
    }
    try {
        
    } catch (error) {
        res.json({success:false,message:error,message})
    }
}