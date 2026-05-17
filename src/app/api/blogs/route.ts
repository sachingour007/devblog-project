import { connectDB } from "@/lib/db";
import Blog from "@/models/blog.model";
import { jwtFunction } from "@/util/jwtFunction";

export async function POST(req: Request) {
	await connectDB();
	try {
		const authHeader = req.headers.get("authorization");

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return Response.json({ message: "Unauthorized" }, { status: 401 });
		}
		const token = authHeader.split(" ")[1];

		const userId = jwtFunction(token);

		const { featuredImage, bannerImage, title, category, content } =
			await req.json();

		const fields = [featuredImage, bannerImage, title, category, content];

		const isEmpty = fields.some((field) => !field);

		if (isEmpty) {
			return Response.json(
				{ message: "All fields are required" },
				{ status: 400 },
			);
		}

		const blogData = await Blog.create({
			featuredImage,
			bannerImage,
			title,
			category,
			content,
			author: userId,
		});

		return Response.json(
			{
				message: "Blog created successfully",
				data: blogData,
			},
			{ status: 201 },
		);
	} catch (error) {
		return Response.json(
			{ message: "Blogs created failed" },
			{ status: 500 },
		);
	}
}

export async function GET(req: Request) {
	await connectDB();

	try {
		const blogs = await Blog.find()
			.populate("author", "username email")
			.sort({ createdAt: -1 });
		return Response.json(
			{ message: "Blogs fetched successfully", blogs },
			{ status: 200 },
		);
	} catch (error) {
		return Response.json(
			{ message: "Blogs fetching failed" },
			{ status: 500 },
		);
	}
}
