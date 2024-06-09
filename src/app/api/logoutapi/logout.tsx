import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	// Clear the JWT cookie by setting its expiration date to the past
	const response = new NextResponse("User is logged out", { status: 200 });
	response.cookies.set("token", "", {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		expires: new Date(0), // Set the cookie to expire in the past
		path: "/",
	});
	return response;
};
