import express from "express"
import { create, getAll, getById, remove } from "../controller/menu.contoller.js"
import authenticate from "../middleware/authenticate.middleware.js"
import { USER_ROLE } from "../constants/enums.constants.js"
import { uploadFile } from "../middleware/multer.middleware.js"

const router=express.Router()

router.get('/getAll', getAll)
router.get('/:id', getById)
router.post('/create', authenticate([USER_ROLE.ADMIN, USER_ROLE.OWNER]), uploadFile('/menu_images').single('image'), create)
router.delete('/:id', authenticate([USER_ROLE.ADMIN, USER_ROLE.OWNER]), remove)

export default router