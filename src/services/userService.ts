import { exist } from "../util/validation/existValue";
import userRepository from "../repositories/userRepository";
import { STATUS } from "../constant/responseStatus";
import { IUserProfile } from "../types/userType";

const findById = async (userId: string) => {
  const user = await userRepository.selectById(userId);
  await exist(user, "User doesn't exist", STATUS.NOT_FOUND);

  return user;
};

const editProfile = async (userId: string, newProfile: IUserProfile) => {
  return await userRepository.updateProfileById(userId, newProfile);
};

const follow = async (followedUserId: string, followingUserId: string) => {
  const followedUser = await userRepository.selectById(followedUserId);
  const followingUser = await userRepository.selectById(followingUserId);
  await exist(followedUser, "User doesn't exist", STATUS.NOT_FOUND);
  await exist(followingUser, "User doesn't exist", STATUS.NOT_FOUND);

  if (followedUser && followingUser) {
    if (!followedUser.followers.includes(followingUser._id as string)) {
      /**フォロー */
      await userRepository.update(
        followedUser,
        "$push",
        "followers",
        followingUser._id as string
      );
      await userRepository.update(
        followingUser,
        "$push",
        "followings",
        followedUser._id as string
      );
    } else {
      /**フォロー解除 */
      await userRepository.update(
        followedUser,
        "$pull",
        "followers",
        followingUser._id as string
      );
      await userRepository.update(
        followingUser,
        "$pull",
        "followings",
        followedUser._id as string
      );
    }

    const updatedFollowedUser = await userRepository.selectById(
      followedUser._id as string
    );
    const updatedFollowingUser = await userRepository.selectById(
      followingUser._id as string
    );
    return { updatedFollowedUser, updatedFollowingUser };
  }
};

export default { findById, editProfile, follow };
