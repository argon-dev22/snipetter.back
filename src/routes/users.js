const express = require("express");
const router = express.Router();
const User = require("../mongodb/User");

// ユーザー新規登録
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 特定のユーザーを取得
router.get("/:id", async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 全てのユーザーを取得
router.get("/all/users", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// フォロー
router.put("/:id/follow", async (req, res) => {
  const targetUser = await User.findById(req.params.id);
  const authUser = await User.findById(req.body.authId);

  try {
    if (!targetUser.followers.includes(req.body.authId)) {
      await targetUser.updateOne({
        $push: {
          followers: authUser._id,
        },
      });
      await authUser.updateOne({
        $push: {
          followings: targetUser._id,
        },
      });
      res.status(200).end();
    } else {
      await targetUser.updateOne({
        $pull: {
          followers: authUser._id,
        },
      });
      await authUser.updateOne({
        $pull: {
          followings: targetUser._id,
        },
      });
      res.status(200).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/edit/name", async (req, res) => {
  try {
    const authUser = await User.findById(req.body.authId);
    await authUser.updateOne({
      name: req.body.name,
    });
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/edit/email", async (req, res) => {
  try {
    const authUser = await User.findById(req.body.authId);
    await authUser.updateOne({
      email: req.body.email,
    });
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/edit/bio", async (req, res) => {
  try {
    const authUser = await User.findById(req.body.authId);
    await authUser.updateOne({
      profile: {
        bio: req.body.profile.bio,
        languages: req.body.profile.languages,
        comment: req.body.profile.comment,
      },
    });
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/edit/languages", async (req, res) => {
  try {
    const authUser = await User.findById(req.body.authId);
    await authUser.updateOne({
      profile: {
        bio: req.body.profile.bio,
        languages: req.body.profile.languages,
        comment: req.body.profile.comment,
      },
    });
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/edit/comment", async (req, res) => {
  try {
    const authUser = await User.findById(req.body.authId);
    await authUser.updateOne({
      profile: {
        bio: req.body.profile.bio,
        languages: req.body.profile.languages,
        comment: req.body.profile.comment,
      },
    });
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/edit/profileImg", async (req, res) => {
  try {
    const authUser = await User.findById(req.body.authId);
    await authUser.updateOne({
      profileImage: req.body.profileImage,
    });
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
