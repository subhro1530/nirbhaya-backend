import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  relation: String,
});

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
    bloodGroup: String,
    address: String,
    trustedContacts: [ContactSchema],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
