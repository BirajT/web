import express from "express"
import { getAll, getById, remove } from "../controller/user.controller.js"
import authenticate from "../middleware/authenticate.middleware.js"
import { USER_ROLE } from "../constants/enums.constants.js"

const router=express.Router()

router.get("/getAll", authenticate([USER_ROLE.ADMIN, USER_ROLE.OWNER]), getAll)
router.get("/:id", authenticate(), getById)
router.delete('/:id', authenticate([USER_ROLE.ADMIN]), remove)

export default router

