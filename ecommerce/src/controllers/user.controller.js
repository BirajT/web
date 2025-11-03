import User from "../models/user.model";

export const getAll = async (req, res, next) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      message: "user fetched",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProfile=async(req,res,next)=>{
  try{
    const {id}=req.params
    const {fname,lname,phone,gender}=req.body;
    const user=await User.findByIdAndUpdate(id,{fname,lname,phone,gender},{new:true})
    id(!user)
    {
      throw new Error("User not found")
    }
      

  }catch(error){
      next(error)
  }
}

export const getById=async(req,res,next)=>{
  try{
    const{id}=req.params
    const user=await User.findById(id)
      res.status(200).json({
        message:"User fetched",
        data:user
      })

      if(!user)
      {
        res.status(404).json({
          message:"USer not found",
          data:null

        })
      }
    }

  catch(error)
  {
    res.status(500).json({
      message:"Something went wrong"
    })
  }
}


export const remove = async (req, res,next) => {
  try {
    const { id } = req.params;
   const user = await User.findByIdAndDelete(id)

    if (!user) {
      res.status(404).json({
        message: "user not found",
        data: null,
      });

      return;
    }

    res.status(200).json({
      data: null,
      message: "user deleted",
    });
  } catch (error) {
     next(error)
  }
};