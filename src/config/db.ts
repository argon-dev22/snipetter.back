import mongoose from "mongoose";

export const connectToDB = (url: string) => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected to database"))
    .catch((error) => console.log("An error has occurred", error));
};
