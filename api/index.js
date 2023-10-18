import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongoose");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen("3000", () => {
  console.log("app is running on port no 3000!!");
});
