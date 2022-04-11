import { catchAsyncErrors } from "../middleware/error/catchAsyncErrors";
import { customError } from "../middleware/error/customError";
import User from "../models/user";

export const login = catchAsyncErrors(async (req, res, next) => {
  const { playerId, password } = req.body;
  // checking if user has given password and email both
  if (!playerId || !password) {
    return next(customError("Please enter your playerId & password", 400));
  }
  const user = await User.findOne({ playerId });

  if (!user) {
    return next(customError("Invalid playerId or password", 401));
  }

  if (user.password !== password) {
    return next(customError("Invalid playerId or password", 401));
  }

  let { password: removePassword, ...rest } = user._doc;

  let tokenFake = Date.now() + 3600000 * 24;
  res.status(200).json({ success: true, user: rest, accessToken: tokenFake });
});
