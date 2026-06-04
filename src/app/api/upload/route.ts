import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
	try {
		const formData = await req.formData();
		const file = formData.get("file") as File;

		if (!file) {
			return Response.json({ error: "File not Found" }, { status: 400 });
		}

		//2. file ko buffer me conver

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const result = await new Promise((resolve, reject) => {
			cloudinary.uploader
				.upload_stream({ floder: "dev_blog" }, (error, result) => {
					if (error) reject(error);
					else resolve(result);
				})
				.end(buffer);
		});
		return Response.json({
			url: (result as any).secure_url,
		});
	} catch (error) {
		console.error("Upload error:", error);
		return Response.json({ error: String(error) }, { status: 500 });
	}
}
