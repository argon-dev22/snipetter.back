import mongoose, { Model, Schema } from "mongoose";

import { IPost } from "../types/postType";

const PostSchema: Schema<IPost> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    environment: {
      type: String,
    },
    code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      required: true,
      default: [],
    },
    comments: {
      type: [
        {
          userId: {
            type: String,
            required: true,
          },
          content: {
            type: String,
            required: true,
          },
          createdAt: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const PostModel: Model<IPost> = mongoose.model<IPost>("post", PostSchema);
export default PostModel;
