import mongoose from "mongoose";
import {GENDER,USER_ROLE} from "../constants/enums.constants.js";

const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"First name is required"],
    },
    last_name:{
        type:String,
        required:[true,"last name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"USer already exists with provided email"],
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:6
    },
    role:{
    type:String,
    enum:Object.values(USER_ROLE),
    default:USER_ROLE.USER
    },

    profile_image:{
        type:{
            path:String,
            public_id:String
        }
    },
})

const User =mongoose.model('user',userSchema)
export default User