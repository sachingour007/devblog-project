import { connectDB } from "@/lib/db";
import Blog from "@/models/blog.model";

export async function GET(
	req: Request,
	{ params }: { params: { slug: string } },
) {
	await connectDB();
	const { slug } = await params;
	try {
		const getBlog = await Blog.findOne({ slug }).populate(
			"author",
			"username email",
		);

		if (!getBlog) {
			return Response.json({ message: "Blog not found" }, { status: 404 });
		}

		return Response.json(
			{ message: "Blog fetched successfully", getBlog },
			{ status: 200 },
		);
	} catch (error) {
		return Response.json(
			{ message: "Blogs fetching failed " },
			{ status: 500 },
		);
	}
}
