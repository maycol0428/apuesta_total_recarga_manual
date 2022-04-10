import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { TokenService } from "../services/TokenService";
import { error } from "./error/customError";
export default async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(error("Please Login to access this resource", 401));
  }

  const decodedData = TokenService.verifyAccessToken(token, process.env.JWT_SECRET);
  const user = await User.findById(decodedData.id);
  req.user = user;

  next();
};
