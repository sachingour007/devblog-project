import cloudinary from "@/lib/cloudinary";
import path from "path";

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

		const ext = path.extname(file.name);
		const uniqueName = `devblog-${Date.now()}-$${Math.random().toString(36).slice(2, 7)}${ext}`;

		const result = await new Promise((resolve, reject) => {
			cloudinary.uploader
				.upload_stream(
					{ folder: "dev_blog", public_id: uniqueName },
					(error, result) => {
						if (error) reject(error);
						else resolve(result);
					},
				)
				.end(buffer);
		});
		console.log(result, "backend 32");
		return Response.json({
			url: (result as any).secure_url,
		});
	} catch (error) {
		console.error("Upload error:", error);
		return Response.json({ error: String(error) }, { status: 500 });
	}
}
