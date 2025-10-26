import express from 'express'
import { getAll,getById,create } from '../controllers/user.controllers.js'

const router=express.Router()

router.get('/',getAll);
router.get('/',create)
router.get('/:id',getById);


export default router