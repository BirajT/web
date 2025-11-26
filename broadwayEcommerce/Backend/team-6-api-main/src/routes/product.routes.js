import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/product.controller.js";
import { uploadFile } from "../middlewares/multer.middleware.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { USER_ROLE } from "../constants/enums.constants.js";

const router = express.Router();
const upload = uploadFile();

//* get all
router.get("/", getAll);
router.get("/:id", getById);


// post
router.post(
  "/",
  upload.fields([
    {
      name: "cover_image",
      maxCount: 1,
    },
    {
      name: "images",
      maxCount:5,
    },
  ]),
  authenticate([USER_ROLE.ADMIN]),
  create
);

router.put(
  "/:id",
  upload.fields([
    {
      name: "cover_image",
      maxCount: 1,
    },
    {
      name: "images",
      maxCount:5,
    },
  ]),
  authenticate([USER_ROLE.ADMIN]),
  update
);

router.delete('/:id',authenticate([USER_ROLE.ADMIN]),remove)




export default router;
