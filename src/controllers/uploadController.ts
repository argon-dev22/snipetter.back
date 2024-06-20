import { handleError } from "./../middleware/handleError";
import { STATUS } from "./../constant/responseStatus";
import { Request, Response } from "express";

const upload = async (req: Request, res: Response) => {
  try {
    res.status(STATUS.OK).json({ message: "画像をアップロードしました" });
  } catch (error: unknown) {
    handleError(res, error);
  }
};

export default { upload };
