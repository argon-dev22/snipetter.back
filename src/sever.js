const express = require("express");
const app = express();

// サーバー立ち上げ
const PORT = 5000;
app.listen(PORT, () => console.log(`ポート${PORT}でサーバーが起動しました`));

// json解析
app.use(express.json());

// 静的ファイルの解析
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));

// CORS
const cors = require("cors");
app.use(cors());

// db接続
require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("データベースと接続しました"))
  .catch((err) => console.log("エラーが発生しました", err));

// ルーティング
const userRoute = require("./routes/users");
const postRoute = require("./routes/post");
const uploadRoute = require("./routes/upload");
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/upload", uploadRoute);
