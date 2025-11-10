import mongoose from "mongoose";

const categoryShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    description: {
        type: String,
    },
    image: {
        type: {
            path: String,
            public_id: String
        }
    }
}, { timestamps: true });


const Category = mongoose.model('category',categoryShema)
export default Category;