import connectDB from "../utils/db";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method !== "DELETE")
    return res.status(405).send("Method not allowed");

  await connectDB();

  const { id, phone } = req.body;

  const user = await User.findById(id);
  user.trustedContacts = user.trustedContacts.filter((c) => c.phone !== phone);
  await user.save();

  res
    .status(200)
    .json({ message: "Contact deleted", contacts: user.trustedContacts });
}
