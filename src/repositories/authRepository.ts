import UserModel from "../models/User";
import { ISignupData } from "../types/authInputDataType";
import { IUser } from "../types/userType";

const insertUser = async (signupInput: ISignupData): Promise<IUser> => {
  return await UserModel.create({
    email: signupInput.email,
    password: signupInput.password,
  });
};

export default { insertUser };
