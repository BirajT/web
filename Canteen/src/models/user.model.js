import mongoose from 'mongoose'
import { GENDER, USER_ROLE } from '../constants/enums.constants'


const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,'First name is required']
    },
    last_name:{
        type:String,
        required:[true,'Last name is required']
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,'User already exist']
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    role:{
        type:String,
        enum:Object.values(USER_ROLE),
        default:USER_ROLE.USER
    },
    gender:{
        type:String,
        enum:Object.values(GENDER)
    },   profile_image: {
        type: {
            path: String,
            public_id:String
        }
    },
    phone: {
        type:String
    }
     
}, { timestamps: true })

const User=mongoose.model('user',userSchema)
export default User