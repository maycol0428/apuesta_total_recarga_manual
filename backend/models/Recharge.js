const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const rechargeSchema = new Schema(
  {
    playerId: { type: "string", required: true },
    promoterId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    socialMedia: { type: String, enum: ["whatsapp", "telegram"], required: true },
    opNumber: { type: String, required: true, index: true },
    paymentMethod: { type: String, enum: ["bcp", "yape", "interbank"], required: true, index: true },
  },
  { timestamps: true }
);
rechargeSchema.index({ paymentMethod: 1, opNumber: 1 }, { unique: true });

module.exports = mongoose.model("Recharge", rechargeSchema);
