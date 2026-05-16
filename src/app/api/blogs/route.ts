import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
	try {
		await connectDB();
		const {
			postType,
			featuredImage,
			bannerImage,
			mblImage,
			title,
			slug,
			category,
			content,
		} = await req.json();

		const fields = [
			postType,
			featuredImage,
			bannerImage,
			mblImage,
			title,
			slug,
			category,
			content,
		];

		const isEmpty = fields.some((field) => !field);

		if (isEmpty) {
			return Response.json(
				{ message: "All fields are required" },
				{ status: 400 },
			);
		}

    
	} catch (error) {}
}
