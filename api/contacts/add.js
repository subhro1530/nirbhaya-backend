import connectDB from "../utils/db";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  await connectDB();

  const { id, contact } = req.body;

  const user = await User.findById(id);
  user.trustedContacts.push(contact);
  await user.save();

  res
    .status(200)
    .json({ message: "Contact added", contacts: user.trustedContacts });
}
