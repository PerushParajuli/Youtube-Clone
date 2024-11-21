import dovenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

dovenv.config();

const connectDb = async () => {
  try {
    const connectionString = `${process.env.MONGODB_URL}/${DB_NAME}`;
    const dataBaseInstance = await mongoose.connect(connectionString);
    console.log(
      `Database connected!! Host ${dataBaseInstance.connection.host}`
    );
  } catch (error) {
    console.error(`Error in Database connection: ${error}`);
    process.exit(1)
  }
};

export default connectDb;