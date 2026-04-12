import express from 'express'
import { createOrder, getAll, getById, remove, updateOrder } from '../controller/order.controller.js'
import authenticate from '../middleware/authenticate.middleware.js'

const router = express.Router()

router.post('/create', authenticate(), createOrder)
router.get('/getAll', authenticate(), getAll)
router.get('/:id', authenticate(), getById)
router.put('/:id', authenticate(), updateOrder)
router.delete('/:id', authenticate(), remove)

export default router