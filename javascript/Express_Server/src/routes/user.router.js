import express from "express"
import { getAll,getById,create,remove,update } from "../controllers/user.controllers.js"
const router=express.Router()

router.get('/',getAll)
router.get('/:id',getById)
router.get('/',create)
router.get('/',update)
router.get('',remove)

export default router