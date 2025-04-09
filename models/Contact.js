// models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    phone: String,
    relation: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
