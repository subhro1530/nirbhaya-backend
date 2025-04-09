import { connectDB } from "@/lib/db";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  await connectDB();

  try {
    const { name, email, password, phone, bloodGroup, address } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({
      name,
      email,
      password, // hash before using in real app
      phone,
      bloodGroup,
      address,
      trustedContacts: [],
    });

    return res.status(201).json({ message: "User created", user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Signup failed" });
  }
}
