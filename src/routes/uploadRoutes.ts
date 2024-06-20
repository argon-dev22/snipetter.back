import express from "express";

import { upload } from "../middleware/multer";
import uploadController from "../controllers/uploadController";

const uploadRouter = express.Router();
uploadRouter.post("/", upload.single("file"), uploadController.upload);

export default uploadRouter;
