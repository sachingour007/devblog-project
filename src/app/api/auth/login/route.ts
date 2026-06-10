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
				{ message: "Email not find, Please singup" },
				{ status: 404 },
			);
		}

		const comparPass = await bcrypt.compare(password, existUser.password);

		if (!comparPass) {
			return NextResponse.json(
				{ message: "Invalid credentials" },
				{ status: 401 },
			);
		}

		const token = jwt.sign(
			{ userId: existUser._id },
			process.env.JWT_SECRET!,
			{ expiresIn: "7d" },
		);

		const response = NextResponse.json(
			{ message: "Loing Successfully" },
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
