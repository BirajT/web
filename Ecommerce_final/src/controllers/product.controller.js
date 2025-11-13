import CustomError from "../middlewares/error_handler.middleware.js";
import Product from "../models/product.model.js";
import { asyncHandler } from "../utils/asynchandler.utils.js";
import Brand from "../models/brand.model.js";
import { deleteFile, uploadToCloud } from "../utils/cloudinary.utils.js";
import Category from "../models/category.model.js";

const dir = "/products";

//* get all
export const getAll = asyncHandler(async (req, res) => {
  const products = await Product.find({})
    .populate("category")
    .populate("brand");

  res.status(200).json({
    message: "Products fetched",
    status: "success",
    data: products,
  });
});

// get by id
export const getById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ _id: id })
    .populate("category")
    .populate("brand");
  if (!product) {
    throw new CustomError("Product not found", 404);
  }

  res.status(200).json({
    message: "Product fetched",
    status: "success",
    data: product,
  });
});

// create
export const create = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    stock,
    description,
    is_featured,
    new_arrival,
    category,
    brand,
  } = req.body;

  console.log(req.files);
  const { cover_image, images } = req.files;

  if (!brand) {
    cover_image;
    throw new CustomError("Brand is required", 400);
  }
  if (!category) {
    throw new CustomError("Category is required", 400);
  }

  if (!cover_image) {
    throw new CustomError("Cover image is required", 400);
  }

  const product = new Product({
    name,
    price,
    stock,
    description,
    is_featured,
    new_arrival,
  });

  const product_brand = await Brand.findOne({ _id: brand });

  if (!product_brand) {
    throw new CustomError("Brand not found", 400);
  }

  const product_category = await Category.findOne({ _id: category });

  if (!product_category) {
    throw new CustomError("Category not found", 400);
  }
  product.category = product_category._id;
  product.brand = product_brand._id;

  // cover image
  const { path, public_id } = await uploadToCloud(cover_image[0].path, dir);

  product.cover_image = {
    path,
    public_id,
  };

  // images
  if (images && Array.isArray(images) && images.length > 0) {
    const promises = images.map(
      async (image) => await uploadToCloud(image.path, dir)
    );

    product.images = await Promise.all(promises);

    // product.images = product_images
    // product.images = await Promise.all(images.map(async(image) => await uploadToCloud(image.path,dir)))
  }

  await product.save();

  res.status(201).json({
    message: "Product created",
    data: product,
    status: "success",
  });
});

//* upate
export const update = asyncHandler(async (req, res) => { 
    //
});




//! delete
export const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ _id: id });
  if (!product) {
    throw new CustomError("Product not found", 404);
  }

  await deleteFile(product.cover_image.public_id);

  if (product.images) {
    await Promise.all(
      product.images.map(async (image) => await deleteFile(image.public_id))
    );
  }

  await product.deleteOne();

  res.staus(200).json({
    message: "Product deleted",
    data: null,
    staus: "success",
  });
});

// get by category

export const getByCategory = asyncHandler(async (req, res) => {
    const {category_id} = req.params
  const products = await Product.find({category:category_id})
    .populate("category")
    .populate("brand");

  res.status(200).json({
    message: "Products fetched",
    status: "success",
    data: products,
  });
});

// get by brand
export const getByBrand = asyncHandler(async (req, res) => {
    const {brand_id} = req.params
  const products = await Product.find({brand:brand_id})
    .populate("category")
    .populate("brand");

  res.status(200).json({
    message: "Products fetched",
    status: "success",
    data: products,
  });
});
// get all featured
export const getAllfeatured = asyncHandler(async (req, res) => {
  const products = await Product.find({is_featured:true})
    .populate("category")
    .populate("brand");

  res.status(200).json({
    message: "Products fetched",
    status: "success",
    data: products,
  });
});
// get all new arrivals
export const getNewArrivals = asyncHandler(async (req, res) => {
  const products = await Product.find({new_arrival:true})
    .populate("category")
    .populate("brand");

  res.status(200).json({
    message: "Products fetched",
    status: "success",
    data: products,
  });
});