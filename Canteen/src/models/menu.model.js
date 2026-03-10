import mongoose from 'mongoose'

const menuSchema=new mongoose.Schema({
    food_name:{
        type:String,
        required:{true,"name is required"}
    }
})