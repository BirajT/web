import express from "express";
import { create, getAll, getById } from "../controllers/product.controller.js";
import { uploadFile } from "../middlewares/multer.middleware.js";

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
  create
);

export default router;