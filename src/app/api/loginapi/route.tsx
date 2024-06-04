import connectDB from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	const { email, password } = await req.json();

	// Connect to the database
	await connectDB();

	try {
		// Find the user by email
		const user = await User.findOne({ email });
		if (!user) {
			return new NextResponse("Invalid email", { status: 401 });
		}

		// Compare the provided password with the hashed password stored in the database
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return new NextResponse("Invalid  password", { status: 401 });
		}

		// Authentication successful
		return new NextResponse("User is logged in", { status: 200 });
	} catch (error) {
		return new NextResponse(`${error}`, { status: 500 });
	}
};
