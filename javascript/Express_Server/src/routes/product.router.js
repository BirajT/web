import express from 'express'
import { getAll } from '../controllers/product.controllers.js'

const router=express.Router()

router.get('/',getAll)

export default router