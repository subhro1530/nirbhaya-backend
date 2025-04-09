import { connectDB } from "@/lib/db";
import User from "@/models/User";

export default async function handler(req, res) {
  await connectDB();

  const { email } = req.body;

  if (req.method === "POST") {
    const { contact } = req.body;
    const user = await User.findOneAndUpdate(
      { email },
      { $push: { trustedContacts: contact } },
      { new: true }
    );
    return res.status(200).json(user);
  }

  if (req.method === "DELETE") {
    const { phone } = req.body;
    const user = await User.findOneAndUpdate(
      { email },
      { $pull: { trustedContacts: { phone } } },
      { new: true }
    );
    return res.status(200).json(user);
  }

  res.status(405).end("Method not allowed");
}
