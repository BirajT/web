import mongoose from "mongoose"
import { STATUS } from "../constants/enums.constants.js"
const orderSchema=new mongoose.Schema({
    menu:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"menu",
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    quantity:{
        type:Number,
        required:[true,"quantity is required"]
    },
    status: {
        type: String,
        enum:Object.values(STATUS),
        default: STATUS.PENDING
    },
    totalPrice: {
        type: Number,
        required: false
    }
},{timestamps:true})

const Order=mongoose.model('order',orderSchema)

export default Order