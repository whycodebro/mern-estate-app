import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongoose");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user/", userRouter);
app.use("/api/auth/", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    succes: false,
    statusCode,
    message,
  });
});

app.listen("3000", () => {
  console.log("app is running on port no 3000!!");
});
