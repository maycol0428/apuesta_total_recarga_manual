import { catchAsyncErrors } from "../middleware/error/catchAsyncErrors";
import { customError } from "../middleware/error/customError";
import Recharge from "../models/Recharge";
import User from "../models/user";
import mongoose from "mongoose";

export const rechargeCreate = catchAsyncErrors(async (req, res, next) => {
  const { playerId, promoterId, amount, socialMedia, opNumber, paymentMethod } = req.body;
  // checking if user has given password and email both
  const recharge = await Recharge.create({ playerId, promoterId, amount: amount * 100, socialMedia, opNumber, paymentMethod });

  const user = await User.findOne({ playerId });
  user.balance += Number(recharge.amount);
  await user.save();
  res.status(200).json({ success: true, recharge });
});

export const rechargeUpdate = catchAsyncErrors(async (req, res, next) => {
  const { playerId, opNumber, promoterId, amount: newAmount } = req.body;
  // checking if user has given password and email both

  console.log(playerId, opNumber, promoterId, newAmount * 100);
  const recharge = await Recharge.findOne({ playerId, opNumber, promoterId });

  let lastAmount = recharge.amount;
  let difAmount = lastAmount - Number(newAmount * 100);
  recharge.amount = Number(newAmount * 100);
  await recharge.save();
  const user = await User.findOne({ playerId });
  user.balance = user.balance + difAmount * -1;
  await user.save();
  res.status(200).json({ success: true, recharge });
});
export const rechargeGetAll = catchAsyncErrors(async (req, res, next) => {
  const { promoterId } = req.params;
  // checking if user has given password and email both
  const recharges = await Recharge.find({ promoterId }).sort({ createdAt: -1 });

  res.status(200).json({ success: true, recharges });
});
