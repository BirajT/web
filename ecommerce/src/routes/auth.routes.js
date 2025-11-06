import express from "express";
import { login,register } from "../controllers/auth.controllers.js";
import { uploadFile } from "../middlewares/multer.middleware.js";
const router=express.Router()

const uploader=uploadFile('/profiles')


router.post('/register',uploader.single('profile_image',register))

router.post('/login',login)

export default router