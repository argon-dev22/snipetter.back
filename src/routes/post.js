const express = require("express");
const router = express.Router();
const Post = require("../mongodb/Post");

// 新規投稿
router.post("/new", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const result = await newPost.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 全ての投稿を取得
router.get("/all", async (req, res) => {
  try {
    const result = await Post.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// いいね
router.put("/:id/like", async (req, res) => {
  try {
    const targetPost = await Post.findById(req.params.id);

    if (!targetPost.likes.includes(req.body.authId)) {
      await targetPost.updateOne({
        $push: {
          likes: req.body.authId,
        },
      });
      res.status(200).end();
    } else {
      await targetPost.updateOne({
        $pull: {
          likes: req.body.authId,
        },
      });
    }
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

// コメントする
router.put("/:id/comment", async (req, res) => {
  try {
    const targetPost = await Post.findById(req.params.id);
    await targetPost.updateOne({
      $push: {
        comments: req.body,
      },
    });
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
