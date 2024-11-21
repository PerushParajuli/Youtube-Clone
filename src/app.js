import express from "express";
import dotenv from "dotenv"
dotenv.config()

const app = express();


app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})

app.get("/", (req, res) => {
    console.log("hello world");
})