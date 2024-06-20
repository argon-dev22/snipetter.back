import { Response } from "express";

import { STATUS } from "../constant/responseStatus";
import { IError } from "../types/errorType";

export const handleError = (res: Response, error: unknown) => {
  if (error instanceof Error) {
    res
      .status((error as IError).statusCode || STATUS.INTERNAL_SERVER_ERROR)
      .json({
        statusCode: (error as IError).statusCode,
        message: error.message,
      });
  } else {
    res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};
