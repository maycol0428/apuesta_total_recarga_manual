import jwt from "jsonwebtoken";
import { TokenService } from "./TokenService";
export class TokenResponseService {
  static async SendToken(user, statusCode, res) {
    // crypto.randomBytes(32).toString("hex")
    const token = await TokenService.generateAccessToken({ id: user.id });
    const options = {
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.status(statusCode).cookie("token", token, options).json(user);
  }
}
