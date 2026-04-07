import express from "express"
import { changePassword, forgotPassword, login, logout, register } from "../controller/auth.controller.js"
import authenticate from "../middleware/authenticate.middleware.js"
import { uploadFile } from "../middleware/multer.middleware.js"

const router=express.Router()

router.post('/register', uploadFile('/profile_images').single('image'), register)
router.post('/login', login)
router.post('/logout', authenticate(), logout)
router.post('/changePassword', authenticate(), changePassword)
router.post('/forgotPassword', forgotPassword)

export default router