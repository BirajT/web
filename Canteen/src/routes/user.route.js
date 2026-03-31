import express from "express"
import { getAll, getById } from "../controller/user.controller.js"
const router=express.Router()

router.get("/getAll",getAll)
router.get("/:id",getById)
// router.put('/:id',updateUser)
// router.delete('/: id',deleteUser)

export default router

