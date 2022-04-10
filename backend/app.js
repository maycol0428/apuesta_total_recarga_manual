import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import path from "path";
import "express-async-errors";
import errorCapture from "./middleware/error/errorCapture";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import { userRoute } from "./routes/userRoute";
import cors from "cors";
import { rechargeRoute } from "./routes/rechargeRoute";
//dotenv
dotenv.config();
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "backend/config/config.env" });
}
const app = express();

// database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connect db"))
  .catch((err) => console.log(err.message));
// middlewares
app.use(
  cors({
    origin: ["http://localhost:3000", "http://192.168.1.36:3000"],
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
// routes
app.use("/api/v1", userRoute);
app.use("/api/v1", rechargeRoute);
// frontend
app.use(express.static(path.join(__dirname, "../frontend2/build")));
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../frontend2/build/index.html"));
});

// Middlewares for errors
app.use(errorCapture);

const server = createServer(app);
export default server;
