import dotenv from "dotenv";
import connectDb from "./db/db.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection Failed!!!", error);
  });
