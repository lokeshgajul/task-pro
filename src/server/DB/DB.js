import mongoose from "mongoose";
import { config } from "dotenv";
export const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log("connected successfully ");
  } catch (error) {
    console.log(error);
  }
};
