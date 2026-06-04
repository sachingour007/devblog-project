"use client";
import React, { useState, useRef, useEffect } from "react";

interface Props {
	lable: string;
	size: string;
	onFileSelect: (file: File | null) => void;
}

const ImageUpload = ({ lable, size, onFileSelect }: Props) => {
	const [file, setFile] = useState<File | null>(null);
	const [preview, setPreview] = useState<string | null>(null);
	const [upload, setUpload] = useState<boolean | null>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		if (preview) URL.revokeObjectURL(preview);

		setFile(file);
		setPreview(URL.createObjectURL(file));
		onFileSelect(file);

		setUpload(true);
		// try {
		// 	const formData = new FormData();
		// 	formData.append("file", selected);

		// 	const res = await fetch("/api/upload", {
		// 		method: "POST",
		// 		body: formData,
		// 	});

		// 	const data = await res.json();
		// 	console.log("cloudinary URL", data.url);
		// } catch (err) {
		// 	console.error("Upload failed:", err);
		// } finally {
		// 	setUpload(false);
		// }
	};

	const handleRemove = () => {
		if (preview) URL.revokeObjectURL(preview);
		setFile(null);
		setPreview(null);
		if (inputRef.current) inputRef.current.value = "";
		onFileSelect(null)
	};

	useEffect(() => {
		return () => {
			if (preview) URL.revokeObjectURL(preview);
		};
	}, [preview]);

	return (
		<div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
			<label className="mb-3 block text-sm font-semibold text-zinc-700">
				{lable}
			</label>

			<input
				type="file"
				className="hidden"
				accept="image/*"
				ref={inputRef}
				onChange={handleChange}
			/>

			{preview ? (
				<div className="relative">
					<img
						src={preview}
						alt="Preview"
						className="h-56 w-full rounded-xl object-cover"
					/>
					<button
						onClick={handleRemove}
						className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white hover:bg-black/80"
					>
						Remove
					</button>
				</div>
			) : (
				<div
					onClick={() => inputRef.current?.click()}
					className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-white transition hover:border-violet-500"
				>
					<div className="text-4xl">🖼️</div>

					<p className="mt-3 text-sm font-medium text-zinc-700">
						Upload Featured Image
					</p>

					<p className="mt-1 text-xs text-zinc-400">{size} recommended</p>
				</div>
			)}

			{file && (
				<p className="mt-2 text-xs text-zinc-400">
					{file.name} — {(file.size / 1024).toFixed(1)} KB
				</p>
			)}
		</div>
	);
};

export default ImageUpload;
