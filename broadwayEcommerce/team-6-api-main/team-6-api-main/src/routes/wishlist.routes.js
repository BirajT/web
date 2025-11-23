
import express from 'express'
import { authenticate } from '../middlewares/authenticate.middleware.js'
import { USER_ROLE } from '../constants/enums.constants.js'
import { clear, create, getAll } from '../controllers/wishlist.controller.js'


const router = express.Router()

router.post('/',authenticate([USER_ROLE.USER]),create)

// get all 
router.get('/', authenticate([USER_ROLE.USER]), getAll)

// clear all
router.delete('/',authenticate(USER_ROLE.USER),clear)


export default router