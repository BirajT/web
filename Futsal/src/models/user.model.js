import mongoose from "mongoose"
import { USER_ROLE } from "../constants/enums.constants.js"

const userSchema=new mongoose.Schema({
    name:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true
    },
    role:{
        type:String,
        enum:Object.values(USER_ROLE),
        default:USER_ROLE.USER
    }

},{timestamps:true})

const User=mongoose.model('user',userSchema)
export default User