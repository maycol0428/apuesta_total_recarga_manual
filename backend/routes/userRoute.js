import { login } from "../controllers/userController";
import express from "express";

const router = express.Router();

router.route("/login").post(login);

export const userRoute = router;
