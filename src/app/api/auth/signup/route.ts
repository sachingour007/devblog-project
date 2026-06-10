import { connectDB } from "@/lib/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		await connectDB();

		const { username, email, password } = await req.json();

		if (!username || !email || !password) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 },
			);
		}

		const hashPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			username,
			email,
			password: hashPassword,
		});

		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
			expiresIn: "7d",
		});

		const { password: string, ...safeUser } = user._doc;

		const response = NextResponse.json(
			{
				message: "user Register Successfully",
				user: safeUser,
			},
			{ status: 200 },
		);

		response.cookies.set("token", token, {
			httpOnly: true,
			maxAge: 7 * 24 * 60 * 60,
		});

		return response;
	} catch (error) {
		console.log(error);
		return Response.json(
			{ message: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
