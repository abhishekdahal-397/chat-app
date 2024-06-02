// pages/api/register.ts
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../lib/dbConnect";
import User from "../../../models/user";
import bcrypt from "bcrypt";
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { username, email, password } = req.body;

		// Connect to MongoDB
		await connectToDatabase();

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user
		const newUser = new User({ username, email, password: hashedPassword });
		await newUser.save();

		// Return success response
		return res.status(200).json({ message: "Registration successful" });
	} else {
		// Method not allowed
		return res.status(405).end();
	}
}
