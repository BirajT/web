import express from 'express'
import { login, register } from '../controllers/auth.controller.js'
import { uploadFile } from '../middlewares/multer.middleware.js'

const router = express.Router()


const uploader = uploadFile('/profiles')

// register
router.post('/register', uploader.single('profile_image'), register)

// login
router.post('/login',login)

router.post('/logout',logout)

export default router
