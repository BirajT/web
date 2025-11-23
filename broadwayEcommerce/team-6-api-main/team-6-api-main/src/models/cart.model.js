import mongoose from "mongoose";
// cart 
//* user -> ref -> user collection
//* items -> [{product:, , quantity: total_price:
//* }]


const cartSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:[true,'user is required']
    },

    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required:[true,'product is required']
            },
            quantity: {
                type: Number,
                default:1
            }
        }
    ],

}, { timestamps:true })


const Cart = mongoose.model('cart',cartSchema)
export default Cart
