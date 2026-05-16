import { connectDB } from "@/lib/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
	try {
		await connectDB();

		const { username, email, password } = await req.json();

		if (!username || !email || !password) {
			return Response.json(
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

		return Response.json(
			{
				message: "user Register Successfully",
				token,
				user: safeUser,
			},
			{ status: 200 },
		);
	} catch (error) {
		console.log(error);
		return Response.json(
			{ message: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
