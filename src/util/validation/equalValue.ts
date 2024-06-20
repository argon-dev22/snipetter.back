import { Value } from "../../types/valueType";
import { STATUS } from "../../constant/responseStatus";
import { IError } from "../../types/errorType";

export const equal = (
  value1: Value,
  value2: Value,
  message: string,
  statusCode: STATUS
) => {
  if (value1 !== value2) {
    const error: IError = new Error(message);
    error.statusCode = statusCode;
    throw error;
  }
};
