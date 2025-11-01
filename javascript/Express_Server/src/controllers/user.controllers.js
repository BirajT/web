
export const getAll=async (req,res)=>{
   try{

   const users=await User.find({})
    res.status(200).json({
        data:users,
        message:"User fetched"
    });
   }
   catch(error)
   {
    res.status(500).json({
        message:"something went wrong"
    })
   }
}

export const getById=async(req,res)=>{
    try{
        const {id}=req.params
        const user=await User.findById(id)

    
    if(!user)
    {
        res.status(404).json({
            message:"User not found"
        })
    }
}
     catch(error)
   {
    res.status(500).json({
        message:"something went wrong"
    })
   }
}