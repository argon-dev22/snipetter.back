import { IUser } from "../types/userType";
import { IPost } from "../types/postType";

export type Value = string | IUser | IPost | IPost[] | null;
