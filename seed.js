const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./backend/models/User");
const fs = require("fs");
const Recharge = require("./backend/models/Recharge");
//dotenv
dotenv.config();
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "backend/config/config.env" });
}

// database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connect db"))
  .catch((err) => console.log(err.message));
const seedUsers = JSON.parse(
  fs.readFileSync("user.json", {
    encoding: "utf-8",
  })
);
const seedRecharge = JSON.parse(
  fs.readFileSync("recharge.json", {
    encoding: "utf-8",
  })
);
const seedDB = async () => {
  await User.deleteMany();
  await User.insertMany(seedUsers);
  await Recharge.deleteMany();
  await Recharge.insertMany(seedRecharge);
};
seedDB().then(() => {
  mongoose.connection.close();
});
