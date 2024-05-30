const mongoose = require("mongoose");

const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "noAvatar.png",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      bio: {
        type: String,
        default: "",
      },
      languages: {
        type: String,
        default: "",
      },
      comment: {
        type: String,
        default: "Hello World",
      },
    },
    followings: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
