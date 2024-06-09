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
			return NextResponse.json({ error: "Invalid email" }, { status: 401 });
		}

		// Compare the provided password with the hashed password stored in the database
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return NextResponse.json({ error: "Invalid password" }, { status: 401 });
		}

		const jwtSecret = process.env.JWT_SECRET;
		if (!jwtSecret) {
			throw new Error("JWT_SECRET environment variable is not defined");
		}

		const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
			expiresIn: "1h",
		});

		const isProduction = process.env.NODE_ENV === "production";
		const response = NextResponse.json({
			message: "User is logged in",
			user: { id: user._id, email: user.email },
		});
		response.cookies.set("token", token, {
			httpOnly: true,
			secure: isProduction,
			maxAge: 60 * 60, // 1 hour in seconds
			path: "/",
			sameSite: isProduction ? "none" : "lax",
		});

		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};
