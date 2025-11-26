import express from 'express';
import { authenticate } from '../middlewares/authenticate.middleware.js';
import { USER_ROLE } from '../constants/enums.constants.js';
import { cancel, create } from '../controllers/order.controller.js';


const router = express.Router();

//* place order
router.post('/', authenticate([USER_ROLE.USER]), create)
//*cancel
router.post('/:id',authenticate([USER_ROLE.USER]),cancel)


export default router

