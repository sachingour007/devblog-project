"use client";

import { useCallback, useState } from "react";
import TiptapEditor from "@/components/editor/TiptapEditor";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import ImageUpload from "@/components/ImageUpload";
import { uploadToCloudinary } from "@/util/fileUploadFn";

type ImageState = {
	featured: File | null;
	banner: File | null;
	mblBanner: File | null;
};

const page = () => {
	const [titleData, setTitleData] = useState({
		title: "",
		category: "",
		postType: "normal",
	});
	const [images, setImages] = useState<ImageState>({
		featured: null,
		banner: null,
		mblBanner: null,
	});
	const [uploading, setUploading] = useState<boolean | null>(false);
	const [content, setContent] = useState<string>("");

	const handleContentChange = useCallback((cntent: string) => {
		setContent(cntent);
	}, []);

	const handlePublish = async (status: "draft" | "pending") => {
		if (!images.featured) {
			alert("Feature Image Required!");
			return;
		}

		if (!content) {
			alert("Please Enter Content");
			return;
		}

		if (!titleData.title) {
			alert("Title zaroori hai");
			return;
		}
		if (!titleData.category) {
			alert("Category select karo");
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

			const res = await fetch("/api/blog", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({
					title: titleData.title,
					category: titleData.category,
					postType: titleData.postType,
					featuredImage: featuredUrl,
					bannerImage: bannerUrl,
					mblImage: mblBannerUrl,
					content: content,
					status: status,
				}),
			});

			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.error("Upload failed:", error);
		} finally {
			setUploading(false);
		}
	};

	return (
		<div className=" bg-zinc-100 pt-8 px-8 pb-11 md:pb-20 xl:pb-25">
			<div className="mx-auto rounded-xl bg-white p-6 shadow">
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
								value={titleData.title}
								onChange={(e) =>
									setTitleData((prev) => ({
										...prev,
										title: e.target.value,
									}))
								}
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

						<select
							className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500"
							value={titleData.category}
							onChange={(e) =>
								setTitleData((prev) => ({
									...prev,
									category: e.target.value,
								}))
							}
						>
							<option value="">Select Category</option>
							<option value="technology">Technology</option>
							<option value="busines">Business</option>
							<option value="sports">Sports</option>
						</select>
					</div>
					<div className="">
						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700">
								Post Type
							</label>

							<select
								className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500"
								value={titleData.postType}
								onChange={(e) =>
									setTitleData((prev) => ({
										...prev,
										postType: e.target.value,
									}))
								}
							>
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
					<TiptapEditor value="" onChange={handleContentChange} />
				</div>

				{/* Footer Buttons */}
				<div className="mt-8 flex items-center justify-end gap-3">
					<button
						className="rounded-lg border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
						onClick={() => handlePublish("draft")}
					>
						Save Draft
					</button>

					<button
						className="rounded-lg bg-violet-600 px-5 py-2 text-sm font-medium text-white hover:bg-violet-700"
						onClick={() => handlePublish("pending")}
					>
						{uploading ? "uploading..." : "Publish Blog"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default page;
