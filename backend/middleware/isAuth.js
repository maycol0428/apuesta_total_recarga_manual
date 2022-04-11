import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { TokenService } from "../services/TokenService";
import { customError, error } from "./error/customError";
export default async (req, res, next) => {
  // const { token } = req.cookies;

  // if (!token) {
  //   return next(error("Please Login to access this resource", 401));
  // }

  // const decodedData = TokenService.verifyAccessToken(token, process.env.JWT_SECRET);
  // const user = await User.findById(decodedData.id);
  // req.user = user;

  const token = req.headers["access-token"];

  if (token < Date.now()) {
    next(customError("Tu session ah expirado vuelve a ingresar", 500));
  }

  console.log(req.headers);

  next();
};
