import { Request, Response } from "express";

import authService from "../services/authService";
import { STATUS } from "../constant/responseStatus";
import { handleError } from "../middleware/handleError";

const signup = async (req: Request, res: Response) => {
  try {
    const user = await authService.signup(req.body);
    res.status(STATUS.OK).json({ message: "ユーザーを作成しました", user });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user = await authService.login(req.body);
    res.status(STATUS.OK).json({ message: "ログインしました", user });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

export default { signup, login };
