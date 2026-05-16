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
			trim: true,
			required: true,
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
			required: true,
		},
		title: {
			type: String,
			trim: true,
			required: [true, "Title is required"],
			minlength: [10, "Title min 10 characters"],
			maxlength: [100, "Title cannot exceed 100 characters"],
		},
		date: {
			type: String,
			required: [true, "Date is required"],
		},
		slug: {
			type: String,
			required: true,
			trim: true,
			unique: true,
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
	},
	{
		timestamps: true,
	},
);

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
