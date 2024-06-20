import mongoose, { Model, Schema } from "mongoose";

import { IUser } from "../types/userType";

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      default: "no name",
    },
    profileImage: {
      type: String,
      required: true,
      default: "noAvatar.png",
    },
    info: {
      bio: {
        type: String,
        required: true,
        default: "Write Your Bio",
      },
      languages: {
        type: String,
        required: true,
        default: "Write Your Languages",
      },
      comment: {
        type: String,
        required: true,
        default: "Hello World",
      },
    },
    followings: {
      type: [String],
      required: true,
      default: [],
    },
    followers: {
      type: [String],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default UserModel;
