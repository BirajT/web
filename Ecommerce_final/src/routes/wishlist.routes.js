import express from "express"
import { authenticate } from "../middlewares/authentication.middleware.js"
import { USER_ROLE } from "../constants/enums.constants"

const router=express.router()

//create
router.post("/",authenticate([USER_ROLE]),create)


export default router