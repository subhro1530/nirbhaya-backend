import { connectDB } from "@/lib/db";
import User from "@/models/User";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const { email } = req.query;
    const user = await User.findOne({ email });
    return res.status(200).json(user);
  }

  if (req.method === "PUT") {
    const { email, updateData } = req.body;
    const user = await User.findOneAndUpdate({ email }, updateData, {
      new: true,
    });
    return res.status(200).json(user);
  }

  res.status(405).end("Method not allowed");
}
