import authRepository from "../repositories/authRepository";
import { exist } from "../util/validation/existValue";
import { STATUS } from "../constant/responseStatus";
import { ILoginData, ISignupData } from "../types/authInputDataType";
import { equal } from "../util/validation/equalValue";
import userRepository from "../repositories/userRepository";

const signup = async (signupInput: ISignupData) => {
  exist(signupInput.email, "Email is empty", STATUS.UNAUTHORIZED);

  exist(signupInput.password, "Password is empty", STATUS.UNAUTHORIZED);

  exist(
    signupInput.confirmPassword,
    "Confirm password is empty",
    STATUS.UNAUTHORIZED
  );

  return await authRepository.insertUser(signupInput);
};

const login = async (loginInput: ILoginData) => {
  exist(loginInput.email, "Email is empty", STATUS.UNAUTHORIZED);

  exist(loginInput.password, "Password is empty", STATUS.UNAUTHORIZED);

  const user = await userRepository.select("email", loginInput.email);

  exist(user, "User doesn't exist", STATUS.NOT_FOUND);

  equal(
    user!.password,
    loginInput.password,
    "Password is incorrect",
    STATUS.UNAUTHORIZED
  );

  return user;
};

export default { signup, login };
