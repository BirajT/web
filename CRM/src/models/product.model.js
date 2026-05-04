import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  brand: {
    type: String
  },
  barcode: {
    type: String,
    unique: true
  },
  sku: {
    type: String
  },
  costPrice: {
    type: Number,
    required: true
  },
  sellingPrice: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  unit: {
    type: String,
    default: "pcs"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},{timestamps:true});

const Product=mongoose.model('product',productSchema)
export default Product
