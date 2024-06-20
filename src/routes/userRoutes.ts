import express from "express";

import userController from "../controllers/userController";

const userRouter = express.Router();
userRouter.get("/:userId", userController.findById);
userRouter.put("/:userId", userController.editProfile);
userRouter.put("/:userId/follow", userController.follow);

export default userRouter;
