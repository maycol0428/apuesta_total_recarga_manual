const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const userSchema = new Schema(
  {
    playerId: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
      unique: true,
      maxlength: [30, "PlayerId cannot exceed 30 characters"],
      minLength: [3, "Name should have more than 3 characters"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [8, "Name should be greater than 8 characters"],
    },
    avatar: {
      public_id: { type: String, required: false, default: "" },
      url: { type: String, required: false, default: "" },
    },
    role: { type: String, default: "user", enum: ["user", "promoter"] },
    balance: { type: Number, default: 0 },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
