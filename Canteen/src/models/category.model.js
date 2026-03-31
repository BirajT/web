import mongoose from "mongoose"

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    _id:{
        type:String,
        required:[true,"id is required"]
    }
    


    },{timestamps:true})

    const Category=mongoose.model('category',categorySchema)
    export default Category