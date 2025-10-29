import express from 'express'
import { create, getAll, getById } from '../controllers/user.controllers.js';


const router = express.Router();

router.get('/',getAll)
router.post('/',create)
router.get('/:id',getById)


export default router