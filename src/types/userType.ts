import { Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  username: string;
  profileImage: string;
  info: {
    bio: string;
    languages: string;
    comment: string;
  };
  followings: string[];
  followers: string[];
}

export interface IUserProfile {
  username: string;
  profileImage: string;
  info: {
    bio: string;
    languages: string;
    comment: string;
  };
}
