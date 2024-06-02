import connectDB from "@/lib/dbConnect";
import User from "@/models/user";

import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	const { username, email, password } = await req.json();

	// DB
	await connectDB();

	const existingUser = await User.findOne({ email });
	if (existingUser) {
		return new NextResponse("Email is already in use", { status: 400 });
	}

	const hashedPassword = await bcrypt.hash(password, 5);
	const newUser = new User({
		username,
		email,
		password: hashedPassword,
	});

	try {
		await newUser.save();
		return new NextResponse("User is registered", { status: 200 });
	} catch (error) {
		return new NextResponse(`${error}`, {
			status: 500,
		});
	}
};
