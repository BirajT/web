import mongoose from "mongoose"

const orderSchema=new mongoose.Schema({
    menu:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"menu",
        required:true
    }
    ,
    quantity:{
        type:String,
        required:[true,"quantity is required"]
    }
},{timestamps:true})

const Order=mongoose.model('order',orderSchema)

export default Order