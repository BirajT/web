import express from "express"
import { create, getAll,getById } from "../controllers/user.controllers.js"

const router=express.Router()

router.get('/',getAll)
router.get('/:id',getById)
router.post('/',create)

export default router