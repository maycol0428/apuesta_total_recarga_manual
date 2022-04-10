import jwt from "jsonwebtoken";
export class TokenService {
  static async generateAccessToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return { accessToken };
  }
  static async verifyAccessToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}
