import dotenv from "dotenv" 
import mongoose from "mongoose";

export const connectDB =async () => {

    console.log(process.env.MONGODB_URI)
    mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });
}