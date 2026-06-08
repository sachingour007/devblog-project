"use client";

import { useState } from "react";
import TiptapEditor from "@/components/editor/TiptapEditor";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/ImageUpload";
import { uploadToCloudinary } from "@/util/fileUploadFn";

type ImageState = {
	featured: File | null;
	banner: File | null;
	mblBanner: File | null;
};

const page = () => {
	const [images, setImages] = useState<ImageState>({
		featured: null,
		banner: null,
		mblBanner: null,
	});
	const [uploading, setUploading] = useState<boolean | null>(false);
	const [content, setContent] = useState(null);

	const handlePublish = async () => {
		if (!images.featured) {
			alert("Feature Image Required!");
			return;
		}

		setUploading(true);
		try {
			const featuredUrl = await uploadToCloudinary(
				images.featured,
				"featured",
			);
			const bannerUrl = images.banner
				? await uploadToCloudinary(images.banner, "banner")
				: featuredUrl;
			const mblBannerUrl = images.mblBanner
				? await uploadToCloudinary(images.mblBanner, "mblBanner")
				: bannerUrl;

			console.log({ featuredUrl, bannerUrl, mblBannerUrl });
		} catch (error) {
			console.error("Upload failed:", error);
		} finally {
			setUploading(false);
		}
	};

	console.log(images);

	return (
		<div className=" bg-zinc-100 pt-28 md:pt-32 xl:pt-44 pb-11 md:pb-20 xl:pb-25">
			<div className="mx-auto max-w-7xl rounded-xl bg-white p-6 shadow">
				{/* Header */}
				<div className="mb-6 flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold text-zinc-800">
							Create Blog
						</h1>

						<p className="mt-1 text-sm text-zinc-500">
							Write and publish your blog post
						</p>
					</div>
				</div>

				{/* Top Meta Section */}
				<div className="">
					{/* Title */}
					<div>
						<Field>
							<FieldLabel htmlFor="input-field-username">
								Title
							</FieldLabel>
							<Input
								id="input-field-username"
								type="text"
								placeholder="Enter your Title"
							/>
						</Field>
					</div>
					{/* Category */}
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-5">
					<div>
						<label className="mb-2 block text-sm font-medium text-zinc-700">
							Category
						</label>

						<select className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500">
							<option>Technology</option>
							<option>Business</option>
							<option>Sports</option>
						</select>
					</div>
					<div className="">
						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Post Type
							</label>

							<select className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500">
								<option>Normal</option>
								<option>Featured</option>
								<option>Highlight</option>
							</select>
						</div>
					</div>
				</div>

				{/* Upload Section */}
				<div className="mt-8">
					<h2 className="mb-4 text-lg font-semibold text-zinc-800">
						Media Uploads
					</h2>

					<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
						<ImageUpload
							lable="Featured Image"
							size="1200 x 630"
							onFileSelect={(file) =>
								setImages((prev) => ({ ...prev, featured: file }))
							}
						/>
						<ImageUpload
							lable="Banner Image"
							size="1920 x 600"
							onFileSelect={(file) =>
								setImages((prev) => ({ ...prev, banner: file }))
							}
						/>
						<ImageUpload
							lable="Mobile Banner"
							size="600 x 800"
							onFileSelect={(file) =>
								setImages((prev) => ({ ...prev, mblBanner: file }))
							}
						/>
					</div>
				</div>

				{/* Content Editor */}
				<div className="mt-8">
					<TiptapEditor value={content} onChange={setContent} />
				</div>

				{/* Footer Buttons */}
				<div className="mt-8 flex items-center justify-end gap-3">
					<button className="rounded-lg border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
						Save Draft
					</button>

					<button
						className="rounded-lg bg-violet-600 px-5 py-2 text-sm font-medium text-white hover:bg-violet-700"
						onClick={handlePublish}
					>
						{uploading ? "uploading..." : "Publish Blog"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default page;
