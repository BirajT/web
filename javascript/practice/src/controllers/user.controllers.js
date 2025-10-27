const users=[]

export const getAll=async(req,res)=>{
    try{
        res.status(200).json({
            data:users,
            message:'User fetched'
        })
    
   
}catch{
     res.status(500).json({
        message:'something went wrong'
    })
}
}

export const getById=async(req,res)=>{
    try{
       const {id}=req.params
       const user=users.find((user)=>user.id===id)
        if(!user)
        {
            res.status(404).json({
                message:"user not found",
                data:null
            });
            return
        }

        res.status(200).json({
        message:'user fetched'    
        })
    }catch{
          res.status(500).json({
        message:'something went wrong'
    })
    }
}



