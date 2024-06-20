import UserModel from "../models/User";
import { IUser, IUserProfile } from "../types/userType";

const select = async (key: string, value: string): Promise<IUser | null> => {
  return await UserModel.findOne({ [key]: value });
};

const selectById = async (userId: string): Promise<IUser | null> => {
  return await UserModel.findById(userId);
};

const update = async (
  user: IUser,
  action: "$push" | "$pull",
  key: string,
  value: string
) => {
  await user.updateOne({
    [action]: {
      [key]: value,
    },
  });
};

const updateProfileById = async (
  userId: string,
  profile: IUserProfile
): Promise<IUser | null> => {
  return await UserModel.findByIdAndUpdate(userId, profile, { new: true });
};

export default { select, selectById, updateProfileById, update };
