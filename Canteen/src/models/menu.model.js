import mongoose from 'mongoose'
import { AVAILABILITY } from '../constants/enums.constants.js'

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    _id:{
        type:string,
        required:[true,"id is required"]
    },
    price:{
        type:string,
        required:[true,"price is required"]
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    },
    image:{
        type: {
            path: String,
            public_id:String
        }
    },
    availability:{
        type:String,
        enum:Object.values(AVAILABILITY)
    }
},{timestamps:true})

const Menu=mongoose.model('menu',menuSchema)

export default Menu