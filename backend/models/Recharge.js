const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const rechargeSchema = new Schema(
  {
    playerId: { type: "string" },
    promoterId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    socialMedia: { type: String, enum: ["whatsapp", "telegram"], required: true },
    opNumber: { type: String, required: true },
    paymentMethod: { type: String, enum: ["bcp", "yape", "interbank"], required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Recharge", rechargeSchema);
