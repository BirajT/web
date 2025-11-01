import express from "express"
import { getAll,getById,create,remove,update } from "../controllers/user.controllers.js"
const router=express.Router()

router.get('/',getAll)
router.get('/:id',getById)
router.post('/',create)
router.get('/',update)
router.delete('/',remove)

export default router