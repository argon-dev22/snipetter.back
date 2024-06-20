import { Request, Response } from "express";

import postService from "../services/postService";
import { STATUS } from "../constant/responseStatus";
import { handleError } from "../middleware/handleError";

const findAll = async (req: Request, res: Response) => {
  try {
    const posts = await postService.findAll();
    res.status(STATUS.OK).json({ message: "投稿を取得しました", posts });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const posts = await postService.find("authorId", req.params.userId);
    res.status(STATUS.OK).json({ message: "投稿を取得しました", posts });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const post = await postService.create(req.body);
    res.status(STATUS.OK).json({ message: "新規投稿を作成しました", post });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const like = async (req: Request, res: Response) => {
  try {
    const post = await postService.like(req.params.postId, req.body.userId);
    res.status(STATUS.OK).json({ message: "投稿にいいねしました", post });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const comment = async (req: Request, res: Response) => {
  try {
    const post = await postService.comment(req.params.postId, req.body.comment);
    res.status(STATUS.OK).json({ message: "投稿にコメントしました", post });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

// TODO　削除した投稿が取得できているか要チェック
const remove = async (req: Request, res: Response) => {
  try {
    const post = await postService.remove(req.params.postId);
    res.status(STATUS.OK).json({ message: "投稿を削除しました", post });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

export default {
  findAll,
  find,
  like,
  create,
  comment,
  remove,
};
