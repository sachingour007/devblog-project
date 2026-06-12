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

		// Duplicate check — DB error se pehle clear message
		const existingUser = await User.findOne({
			$or: [{ email }, { username }],
		});

		if (existingUser) {
			return NextResponse.json(
				{
					error:
						existingUser.email === email
							? "Email already registered"
							: "Username already taken",
				},
				{ status: 409 }, // Conflict
			);
		}

		const hashPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			username,
			email,
			password: hashPassword,
		});

		const token = jwt.sign(
			{ userId: user._id, role: user.role },
			process.env.JWT_SECRET!,
			{
				expiresIn: "7d",
			},
		);

		const userObj = user.toObject();
		const { pasword: _, ...safeUser } = userObj;

		const response = NextResponse.json(
			{
				message: "user Register Successfully",
				user: safeUser,
			},
			{ status: 201 },
		);

		response.cookies.set("token", token, {
			httpOnly: true,
			maxAge: 7 * 24 * 60 * 60,
			secure: process.env.NODE_ENV === "production", // HTTPS only in prod
			sameSite: "lax", // CSRF protection
			path: "/", // poori app mein accessible
		});

		return response;
	} catch (error: any) {
		if (error.code === 11000) {
			const field = Object.keys(error.keyValue)[0];
			return NextResponse.json(
				{ error: `${field} already exists` },
				{ status: 409 },
			);
		}

		console.error("Signup error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
