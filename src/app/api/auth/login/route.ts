import { connectDB } from "@/lib/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { request } from "https";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
	try {
		await connectDB();

		const { email, password } = await req.json();

		if (!email || !password) {
			return Response.json(
				{ message: "All Fields Required." },
				{ status: 400 },
			);
		}

		const existUser = await User.findOne({ email });

		if (!existUser) {
			return Response.json(
				{ message: "Email not find, Please singup" },
				{ status: 404 },
			);
		}

		const comparPass = await bcrypt.compare(password, existUser.password);

		if (!comparPass) {
			return Response.json(
				{ message: "Invalid credentials" },
				{ status: 401 },
			);
		}

		const token = jwt.sign(
			{ userId: existUser._id },
			process.env.JWT_SECRET!,
			{ expiresIn: "7d" },
		);

		return Response.json(
			{ message: "Loing Successfully", token },
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
