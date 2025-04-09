// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    mobile: String,
    dob: String,
    bloodGroup: String,
    avatar: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
