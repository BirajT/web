import mongoose from "mongoose";
import { MONGO_CONFIG } from "../constants/db.constants.js";


// mongo db connection


export const connectDB = () => {
  mongoose
    .connect(MONGO_CONFIG.uri, {
      dbName: MONGO_CONFIG.db_name,
      autoCreate: true,
    })
    .then(() => {
      console.log("Database connected.");
    })
    .catch((error) => {
      console.log(error);
    });
};