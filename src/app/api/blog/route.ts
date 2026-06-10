import { connectDB } from "@/lib/db";
import Blog from "@/models/blog.model";
import { jwtFunction } from "@/util/jwtFunction";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	await connectDB();
	try {
		const token = req.cookies.get("token")?.value;

		if (!token) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		const userId = jwtFunction(token);

		const {
			featuredImage,
			bannerImage,
			mblImage,
			title,
			category,
			postType,
			content,
			status,
		} = await req.json();

		const fields = [featuredImage, bannerImage, title, category, content];

		const isEmpty = fields.some((field) => !field);

		if (isEmpty) {
			return NextResponse.json(
				{ message: "All fields are required" },
				{ status: 400 },
			);
		}

		const allowedStatus = ["draft", "pending"];
		if (!allowedStatus.includes(status)) {
			return NextResponse.json({ error: "Invalid status" }, { status: 400 });
		}

		const blogData = await Blog.create({
			featuredImage,
			bannerImage,
			mblImage,
			title,
			category,
			postType,
			content,
			author: userId,
			status,
		});

		return NextResponse.json(
			{
				message: "Blog created successfully",
				data: blogData,
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error("Blog create error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 },
		);
	}
}

export async function GET(req: NextRequest) {
	await connectDB();

	try {
		const { searchParams } = new URL(req.url);
		const page = parseInt(searchParams.get("page") || "1");
		const limit = parseInt(searchParams.get("limit") || "10");
		const skip = (page - 1) * limit;

		const blogs = await Blog.find({ status: "published" })
			.populate("author", "username email")
			.sort({ createdAt: -1 })
			.skip(skip)
			.limit(limit);

		const total = await Blog.countDocuments({ status: "published" });

		return NextResponse.json(
			{
				message: "Blogs fetched successfully",
				blogs,
				pagination: {
					total,
					page,
					limit,
					totalPages: Math.ceil(total / limit),
				},
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error("Blog fetch error:", error);
		return NextResponse.json(
			{ message: "Blogs fetching failed" },
			{ status: 500 },
		);
	}
}
