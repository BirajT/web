import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:[true]
    }



},{timestamps:true})

const Product=mongoose.model('product',productSchema)

export default Product