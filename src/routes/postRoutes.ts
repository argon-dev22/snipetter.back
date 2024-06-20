import express from "express";

import postController from "../controllers/postController";

const postRouter = express.Router();

postRouter.post("/", postController.create);
postRouter.get("/", postController.findAll);
postRouter.get("/:userId", postController.find);
postRouter.put("/:postId/like", postController.like);
postRouter.put("/:postId/comment", postController.comment);
postRouter.delete("/:postId", postController.remove);

export default postRouter;
