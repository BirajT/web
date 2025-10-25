import express from 'express'
import { getall,getById,create,update,remove} from '../controller/user.controller.js';
const router = express.Router()

router.get('/',getall);

//dynamic route {req,params}
router.get ('/:id',getById)

router.post ('/',create);
     

router.put('/:id',update)

router.delete('/:id',remove)
  export default router