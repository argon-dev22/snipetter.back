import { Request, Response } from "express";

import userService from "../services/userService";
import { STATUS } from "../constant/responseStatus";
import { handleError } from "./../middleware/handleError";

const findById = async (req: Request, res: Response) => {
  try {
    const user = await userService.findById(req.params.userId);
    res.status(STATUS.OK).json({ message: "ユーザーを取得しました", user });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const editProfile = async (req: Request, res: Response) => {
  try {
    const user = await userService.editProfile(req.params.userId, req.body);
    res.status(STATUS.OK).json({ message: "ユーザーを更新しました", user });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const follow = async (req: Request, res: Response) => {
  try {
    const users = await userService.follow(
      req.params.userId,
      req.body.followingUserId
    );
    res.status(STATUS.OK).json({
      message: "フォローしました",
      users,
    });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

export default { findById, editProfile, follow };
