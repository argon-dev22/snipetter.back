import { STATUS } from "../constant/responseStatus";
import postRepository from "../repositories/postRepository";
import { IComment, IPost } from "../types/postType";
import { exist } from "../util/validation/existValue";

const findAll = async () => {
  return await postRepository.selectAll();
};

const find = async (key: string, value: string) => {
  const posts = await postRepository.select(key, value);
  await exist(posts, "Posts don't exist", STATUS.NOT_FOUND);

  return posts;
};

const create = async (post: IPost) => {
  return await postRepository.insert(post);
};

const like = async (postId: string, userId: string) => {
  const post = await postRepository.selectById(postId);
  await exist(post, "Post doesn't exist", STATUS.NOT_FOUND);

  if (post) {
    if (!post.likes.includes(userId)) {
      await postRepository.update(post, "$push", "likes", userId);
    } else {
      await postRepository.update(post, "$pull", "likes", userId);
    }
    const updatedPost = postRepository.selectById(post._id as string);
    return updatedPost;
  }
};

const comment = async (postId: string, comment: IComment) => {
  const post = await postRepository.selectById(postId);
  await exist(post, "Post doesn't exist", STATUS.NOT_FOUND);

  if (post) {
    await postRepository.update(post, "$push", "comments", comment);
    return postRepository.selectById(post._id as string);
  }
};

const remove = async (postId: string) => {
  const post = await postRepository.deleteById(postId);
  await exist(post, "Post doesn't exist", STATUS.NOT_FOUND);
  return post;
};

export default {
  findAll,
  find,
  create,
  like,
  comment,
  remove,
};
