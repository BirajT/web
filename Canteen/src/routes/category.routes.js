import express from 'express'
import Category from '../models/category.model.js'
import { asyncHandler } from '../utils/asynchandler.utils.js'

const router = express.Router()

router.get('/getAll', asyncHandler(async (req, res) => {
  const categories = await Category.find({}).sort({ name: 1 })
  res.status(200).json({ success: true, data: categories })
}))

export default router
