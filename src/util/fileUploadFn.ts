export const uploadToCloudinary = async (
	file: File,
	type: string,
): Promise<string> => {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("type", type);

	console.log(formData, "frondend fn 9");
	const res = await fetch("/api/upload", 
		{ method: "POST", 
			body: formData 
		}
	);
	const data = await res.json();
	return data.url;
};
