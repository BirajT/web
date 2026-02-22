import mongoose from 'mongoose'


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

    }

})