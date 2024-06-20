import { Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  language: string;
  environment?: string;
  code: string;
  description: string;
  authorId: string;
  likes: string[];
  comments: IComment[];
}

export interface IComment extends Document {
  userId: string;
  content: string;
  createdAt: string;
}
