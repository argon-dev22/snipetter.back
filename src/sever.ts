import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";

import { connectToDB } from "./config/db";
import authRoutes from "./routes/authRoutes";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";
import uploadRoutes from "./routes/uploadRoutes";

dotenv.config();

connectToDB(process.env.MONGO_URL!);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public/images")));
app.use(cors());
app.use("/auth", authRoutes);
app.use("/post", postRoutes);
app.use("/user", userRoutes);
app.use("/upload", uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at PORT:${PORT}`));
