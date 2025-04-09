import connectDB from "../utils/db";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).send("Method not allowed");

  await connectDB();

  const { id } = req.query;

  const user = await User.findById(id);
  res.status(200).json({ contacts: user.trustedContacts });
}
