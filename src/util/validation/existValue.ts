import { Value } from "../../types/valueType";
import { STATUS } from "../../constant/responseStatus";
import { IError } from "../../types/errorType";

export const exist = (value: Value, message: string, statusCode: STATUS) => {
  if (!value) {
    const error: IError = new Error(message);
    error.statusCode = statusCode;
    throw error;
  }
};
