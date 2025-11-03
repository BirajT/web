import express from "express"
import { createCategory,deleteCategory,getAll, getCategoryById, updateCategory } from "../controllers/category.controllers.js"

const router=express.Router()

router.post("/create",createCategory)
router.get("/",getAll)
router.get("/:id", getCategoryById);       
router.put("/:id", updateCategory);     
router.delete("/:id", deleteCategory);    

export default router
