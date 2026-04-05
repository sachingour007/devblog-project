import { connectDB } from "@/lib/db";
import User from "@/models/user";

export async function POST(req: Request) {
	await connectDB();
  
	const { username, email, password } = await req.json();

	if (!username || !email || !password) {
		return Response.json(
			{ error: "All fields are required" },
			{ status: 400 },
		);
	}

	const user = await User.create({
		username,
		email,
		password,
	});

	return Response.json(user);
}
