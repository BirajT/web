import CATEGORY from "../models/category.model.js"
import { asyncHandler } from "../utils/asynchandler.utils.js";

export const createCategory=asyncHandler(async(req,res,next)=>{
  
          console.log("Request body:", req.body);
        const {name,description}=req.body
        if(!name)
        {
            throw new Error("Category name is required")
           
        }
         const category = await CATEGORY.create({ name, description });
    console.log("Category saved to DB:", category);

    res.status(201).json({
      message: "Category created successfully",
      status: "success",
      data: category,
    });
})

export const getAll=asyncHandler(async(req,res,next)=>{
  
        const categories=await CATEGORY.find({})
        res.status(200).json({
            data:categories,
            message:"Category fetched",
            status:"sucess"
        })
     
})
export const getCategoryById=asyncHandler(async(req,res,next)=>{
  
    const {id}=req.params;
    const category=await CATEGORY.findById({id})
    id(!category)
    {
        const error= new error("Category not found")
        throw error
    }
    res.status(200).json({
        message:"Category fetched sucessfully",
        status:"sucess",
        data:category
    })
})


export const updateCategory = asyncHandler(async (req, res, next) => {
  
    const { id } = req.params;
    const { name, description } = req.body;

    const category = await CATEGORY.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );

    if (!category) {
      throw new customError("category required",400)
    }

    res.status(200).json({
      message: "Category updated successfully",
      status: "success",
      data: category,
    });
  } 
)

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await CATEGORY.findByIdAndDelete(id);
    if (!category) {
      const error = new Error("Category not found");
      throw error;
    }

    res.status(200).json({
      message: "Category deleted successfully",
      status: "success",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};


    const file=req.file
          const category=new CATEGORY({name,description})
        const {name,description}=req.body

        if(file){
          const {path,public_id}=await uploadToCloud(file.path,"/categories")
          category.image={
            path,public_id,
          };
        }