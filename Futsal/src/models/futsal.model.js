import mongoose from "mongoose";

const futsalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    contact:{
        type:Number,
        required:[true,"number is required"]
    },
    opening_time:{
        type:Date,
        required:[true,"time is required"]
    },
    closing_time:{
        type:Date,
        required:[true,"time is required"]
    },
    price_per_hour:{
        type:Number,
        required:[true,"price is required"]
    }
})