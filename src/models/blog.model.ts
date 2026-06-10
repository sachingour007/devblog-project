import mongoose, { Schema, models, model, Document, Types } from "mongoose";

export interface IBlog extends Document {
	postType: "featured" | "highlight" | "normal";
	featuredImage: string;
	bannerImage: string;
	mblImage: string;
	title: string;
	slug: string;
	category: string;
	content: string;
	author: Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

const blogSchema = new Schema(
	{
		postType: {
			type: String,
			enum: ["featured", "highlight", "normal"],
			default: "normal",
		},
		featuredImage: {
			type: String,
			trim: true,
			required: true,
		},
		bannerImage: {
			type: String,
			trim: true,
			required: true,
		},
		mblImage: {
			type: String,
			trim: true,
		},
		title: {
			type: String,
			trim: true,
			required: [true, "Title is required"],
			minlength: [10, "Title min 10 characters"],
			maxlength: [100, "Title cannot exceed 100 characters"],
		},
		slug: {
			type: String,
			trim: true,
			unique: true,
			lowercase: true,
		},
		category: {
			type: String,
			required: true,
			trim: true,
		},
		content: {
			type: String,
			trim: true,
			required: [true, "Description is required"],
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		status: {
			type: String,
			enum: ["draft", "published", "pending", "rejected"],
			default: "draft",
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

blogSchema.pre("save", function (next) {
	const blog = this as IBlog;

	if (blog.isModified("title") || blog.isNew) {
		blog.slug = generateSlug(blog.title);
	}
});

function generateSlug(title: string): string {
	return title
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "") // Remove special characters
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
		.replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
