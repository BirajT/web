import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    // name
    name: {
        type: String,
        required: [true, 'name is required'],
        trim:true
    },
    // price
    price: {
        type: Number,
        required: [true, 'price is required'],
    },
    // stock
    stock: {
        type: Number,
        required: [true, 'stock is required'],
    },
    // cover_image
    cover_image: {
        type: {
            path: String,
            public_id:String
        },
        required: [true, 'cover_image is required'],

    },
    // images
    images: [{
        type: {
            path: String,
            public_id:String
        },

    }],
    // description
    description: {
        type:String
    },
    // is_featured
    is_featured: {
        type: Boolean,
        default:false
    },
    // new_arrival
    new_arrival: {
        type: Boolean,
        default:true
    },

    // category -> 'sdf743743rg34tr973'
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'category',
        requred:[true,'category is required']
    },
    // brand
       brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'brand',
        requred:[true,'brand is required']
    }


}, { timestamps: true })




// product model
const Product = mongoose.model('product', productSchema)
export default Product;