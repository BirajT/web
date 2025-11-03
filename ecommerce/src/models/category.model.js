import mongoose from "mongoose"

const categorySchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Category name is required"],
            unique:true
        },
        description:{
            type:String,
            
        },

    } ,{ timestamps: true }
);

const CATEGORY = mongoose.model("category",categorySchema);
export default CATEGORY;


