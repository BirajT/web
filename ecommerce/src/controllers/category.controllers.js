import CATEGORY from "../models/category.model.js"

export const createCategory=async(req,res,next)=>{
    try {
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

    } catch (error) {
        next(error)
    }
}

export const getAll=async(req,res,next)=>{
    try {
        const categories=await CATEGORY.find({})
        res.status(200).json({
            data:categories,
            message:"Category fetched",
            status:"sucess"
        })
    } catch (error) {
        next(error)
    }
}
export const getCategoryById=async(req,res,next)=>{
    try{
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
}catch(error)
{
    next(error)
}
}

export const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const category = await CATEGORY.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );

    if (!category) {
      const error = new Error("Category not found");
      throw error;
    }

    res.status(200).json({
      message: "Category updated successfully",
      status: "success",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};


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
