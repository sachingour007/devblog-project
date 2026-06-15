import { connectDB } from "@/lib/db";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

type JwtPayloadType = {
	userId: string;
};

export async function GET(req: NextRequest) {
	await connectDB();
	try {
		const token = req.cookies.get("token")?.value;

		if (!token) {
			return NextResponse.json(
				{ message: "User unauthorized" },
				{ status: 401 },
			);
		}

		const decodeToken = jwt.verify(
			token,
			process.env.JWT_SECRET!,
		) as JwtPayloadType;

		const userId = decodeToken.userId;

		const user = await User.findById(userId).select("-password");

		if (!user) {
			return NextResponse.json(
				{ message: "User not found" },
				{ status: 404 },
			);
		}

		return NextResponse.json(
			{ message: "User get Successfully", user },
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
