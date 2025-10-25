import express from 'express'
import { getall,getById,create,update,remove} from '../controller/user.controller.js';
const router = express.Router()

const routeMiddleware=(req,res,next)=>{
    console.log("route");
    next()
}

router.get('/',routeMiddleware,getall);

//dynamic route {req,params}
router.get ('/:id',getById)

router.post ('/',create);
     

router.put('/:id',update)

router.delete('/:id',remove)
  export default router