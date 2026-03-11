import mongoose from 'mongoose'
import { AVAILABILITY } from '../constants/enums.constants'

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
        type:string,
        required:[true,"category is required"]
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