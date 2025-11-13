
import  express  from 'express';
import { create, getAll, getById, remove, update } from '../controllers/category.controller.js';
import { uploadFile } from '../middlewares/multer.middleware.js';
import { authenticate } from "../middlewares/authentication.middleware.js";
import { USER_ROLE } from "../constants/enums.constants.js";


const router = express.Router();


const upload = uploadFile()


// create category
router.post('/', upload.single('image'),authenticate([USER_ROLE.ADMIN]), create)

// update
router.put('/:id', upload.single('image'),authenticate([USER_ROLE.ADMIN]), update)

// get all 
router.get('/', getAll);

// get by id
router.get('/:id', getById);

// delete
router.delete('/:id',remove)
    

export default router;