import connectDB from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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
			return new NextResponse("Invalid password", { status: 401 });
		}

		const token = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_SECRET, // make sure to set this environment variable
			{ expiresIn: "1h" } // you can adjust the expiration time as needed
		);

		const response = new NextResponse("User is logged in", { status: 200 });
		response.cookies.set("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60, // 1 hour in seconds
			path: "/",
		});

		return response;
	} catch (error) {
		return new NextResponse(`${error}`, { status: 500 });
	}
};
