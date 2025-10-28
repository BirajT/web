const Users=[]

export const getAll=async(req,res)=>{
    try{
        res.status(200).json({
            data:Users,
            message:"User fetched",
        });
    }catch{
        res.status(500).json({
            message:"Something went wrong"
        });

    }
}

export const getById=async(req,res)=>{
    try{
        const {id}=req.params
        const user = Users.find((u) => u.id === parseInt(id));
        if(!user)
        {
            res.send(404).json({
                message:"User not found"
            })
            return
        }
         res.status(200).json({
            data:Users,
            message:"User fetched",
        });
        
    }catch{
        res.status(500).json({
            message:"Something went wrong"
        });
    }

}
export const create=async(req,res)=>{
    try{
        const data=req.body
         if(!data)
        {
            res.send(404).json({
                message:"data expected"
            })
            return;
        }
        Users.push({...data,id:Users.length+1,})
    }catch{
        res.status(500).json({
            message:"Something went wrong"
        });
    }
}
