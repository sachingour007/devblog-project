import { connectDB } from "@/lib/db";
import User from "@/models/user";
import jwt from "jsonwebtoken";

type JwtPayloadType = {
	userId: string;
};

export async function GET(req: Request) {
	await connectDB();
	try {
		const authHeader = req.headers.get("authorization");

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return Response.json({ message: "Unauthorized" }, { status: 401 });
		}

		const token = authHeader.split(" ")[1];

		const decodeToken = jwt.verify(
			token,
			process.env.JWT_SECRET!,
		) as JwtPayloadType;

		const userId = decodeToken.userId;

		const user = await User.findById(userId).select("-password");

		if (!user) {
			return Response.json({ message: "User not found" }, { status: 404 });
		}

		return Response.json(
			{ message: "User get Successfully", user },
			{ status: 200 },
		);
	} catch (error) {
		return Response.json(
			{ message: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
