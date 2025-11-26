
import  express  from 'express';
import { create, getAll, getById, remove, update } from '../controllers/brand.controller.js';
import { uploadFile } from '../middlewares/multer.middleware.js';
import { authenticate } from '../middlewares/authenticate.middleware.js';
import { USER_ROLE } from '../constants/enums.constants.js';


const router = express.Router()

const upload = uploadFile()

// create
router.post('/', upload.single('image'),authenticate([USER_ROLE.ADMIN]), create)

// update
router.put('/:id', upload.single('image'),authenticate([USER_ROLE.ADMIN]), update)

// get all 
router.get('/',getAll)

// get by id
router.get('/:id', getById);

// delete
router.delete('/:id',authenticate([USER_ROLE.ADMIN]),remove)


export default router