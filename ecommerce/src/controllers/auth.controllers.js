import { USER_ROLE } from "../constants/enums.constants.js";
import USER from "../models/user.model.js";
import { hashPassword ,comparePassword} from "../utils/bcrypt.utils.js";

// register user
export const register = async (req, res, next) => {
  try {
    console.log(req.body)
    const { first_name, last_name, email, password, phone, gender } = req.body;

    if(!password){
      throw new Error("passsword is required")
    }
    
const hashedPass=await hashPassword(password)
console.log(hashedPass);
    const user = await USER.create({
      first_name,
      last_name,
      email,
      password:hashedPass,
      phone,
      gender,
      role: USER_ROLE.USER,
    });

    res.status(201).json({
      message: "Account created",
      status: "succes",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// login
export const login = async (req, res, next) => {
  try {
    //!email pass
    const { email, password } = req.body;
    if (!email) {
      const error = new Error("email is required");
      next(error);
    }
    if (!password) {
      const error = new Error("password is required");
      throw error;
    }
    //! check/get user by email
    const user = await USER.findOne({ email });
    // throw error if user not found
    if (!user) {
      const error = new Error("Credentials does not match");
      throw error;
    }
    // compare password
    const isMatch = await comparePassword(password,user.password)
    // throw error if pass do not match
    if (!isMatch) {
      const error = new Error("Credentials does not match");
      throw error;
    }
      //! login success
      res.status(201).json({
          message: 'login success',
          data:user
      })
  } catch (error) {
    next(error);
  }
};



export const changePassword=async(req,res,next)=>{
  try{
    const{email,oldpassword,newpassword}=req.body;

    if(!email ||!oldpassword ||!newpassword){
      const error=new Error("Email oldpassword and new password are required")
      throw error;
    }

    const user=await USER.findOne({email})
    if(!user){
      console.log("USer not found");
    }

    if(user.password!==oldpassword)
    {
      console.log("Old password is incorrect");
    }
    if(user.password===oldpassword)
    {
      user.password=newpassword;
    }
    res.status(200).josn({
      message:"password change sucessfully"
    })
    
  }catch(error){
    next(error)
  }
}

