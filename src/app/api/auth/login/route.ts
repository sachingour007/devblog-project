import { connectDB } from "@/lib/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		await connectDB();

		const { email, password } = await req.json();

		if (!email || !password) {
			return NextResponse.json(
				{ message: "All Fields Required." },
				{ status: 400 },
			);
		}

		const existUser = await User.findOne({ email });

		if (!existUser) {
			return NextResponse.json(
				{ message: "Invalid email or password" },
				{ status: 404 },
			);
		}

		const comparPass = await bcrypt.compare(password, existUser.password);

		if (!comparPass) {
			return NextResponse.json(
				{ message: "Invalid email or password" },
				{ status: 401 },
			);
		}

		const token = jwt.sign(
			{ userId: existUser._id, role: existUser.role },
			process.env.JWT_SECRET!,
			{ expiresIn: "7d" },
		);

		const userObj = existUser.toObject();
		const { password: _, ...safeUser } = userObj;

		const response = NextResponse.json(
			{ message: "Login Successfully", user: safeUser },
			{ status: 200 },
		);

		response.cookies.set("token", token, {
			httpOnly: true,
			maxAge: 7 * 24 * 60 * 60,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			path: "/",
		});

		return response;
	} catch (error) {
		console.error("Login error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
