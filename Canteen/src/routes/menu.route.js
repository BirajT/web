import express from "express"
import { create, getAll, getById, remove } from "../controller/menu.contoller.js"

const router=express.Router()

router.get('/getAll',getAll)
router.get('/:id',getById)
router.post('/create',create)
router.delete('/:id',remove)

export default router