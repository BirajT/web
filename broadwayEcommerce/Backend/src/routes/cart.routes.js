import express from 'express'
import { authenticate } from '../middlewares/authenticate.middleware.js';
import { USER_ROLE } from '../constants/enums.constants.js';
import { create, getCart } from '../controllers/cart.controller.js';



const router = express.Router();

//* create / add to cart
router.post('/', authenticate([USER_ROLE.USER]), create);

//* get cart
router.get('/',authenticate([USER_ROLE.USER]),getCart)

//* remove product  from cart

//* clear cart

export default router