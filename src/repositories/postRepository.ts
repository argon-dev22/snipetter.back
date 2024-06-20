import PostModel from "../models/Post";
import { IComment, IPost } from "../types/postType";

const selectAll = async (): Promise<Array<IPost>> => {
  return await PostModel.find();
};

const selectById = async (postId: string): Promise<IPost | null> => {
  return await PostModel.findById(postId);
};

const select = async (key: string, value: string): Promise<IPost[] | null> => {
  return await PostModel.find({ [key]: value });
};

const insert = async (post: IPost): Promise<IPost | null> => {
  return await PostModel.create(post);
};

const update = async (
  post: IPost,
  action: "$push" | "$pull",
  key: string,
  value: string | IComment
) => {
  await post.updateOne({
    [action]: {
      [key]: value,
    },
  });
};

const deleteById = async (postId: string): Promise<IPost | null> => {
  return await PostModel.findByIdAndDelete(postId);
};

export default {
  selectAll,
  selectById,
  select,
  insert,
  update,
  deleteById,
};
