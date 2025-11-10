import CustomError from "../middlewares/error_handler.middleware.js";
import Category from "../models/category.model.js";
import { asyncHandler } from "../utils/asynchandler.utils.js";
import { deleteFile, uploadToCloud } from "../utils/cloudinary.utils.js";

// create category
export const create = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const file = req.file;

  if (!name) {
    throw new CustomError("name is required", 400);
  }

  const category = new Category({ name, description });

  // image
  if (file) {
    const { path, public_id } = await uploadToCloud(file.path, "/categories");
    category.image = {
      path,
      public_id,
    };
  }

  await category.save();

  res.status(201).json({
    message: "Category created",
    status: "success",
    data: category,
  });
});

// get all
export const getAll = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json({
    message: "Category fetched",
    status: "success",
    data: categories,
  });
});

// get all
export const getById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findOne({ _id: id });

  if (!category) {
    throw new CustomError("Category not found", 404);
  }

  res.status(200).json({
    message: "Category fetched",
    status: "success",
    data: category,
  });
});

// update
export const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const file = req.file;

  const category = await Category.findById(id);

  if (!category) {
    throw new CustomError("Category not found", 404);
  }
  if (name) {
    category.name = name;
  }
  if (description) {
    category.description = description;
  }

  if (file) {
    if (category.image) {
      await deleteFile(category.image?.public_id);
    }
    const { public_id, path } = await uploadToCloud(file.path);
    category.image = {
      public_id,
      path,
    };
  }

  await category.save();

  res.status(200).json({
    message: "Category updated",
    status: "success",
    data: category,
  });
});

// delete
export const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({ _id: id });

  if (!category) {
    throw new CustomError("Category not found", 404);
  }

  if (category.image) {
    await deleteFile(category.image?.public_id);
  }

  await category.deleteOne();

  res.status(200).json({
    message: "Category deleted",
    status: "success",
    data: null,
  });
});
