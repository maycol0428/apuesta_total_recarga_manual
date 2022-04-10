import { compare, genSalt, hash } from "bcrypt";

export class HashService {
  static async hashPassword(data) {
    const salt = await genSalt(10);
    const hasherPassword = await hash(data, salt);
    return hasherPassword;
  }
  static async hashPasswordCompare(data, hash) {
    const match = await compare(data, hash);
    return match ? true : false;
  }
}
