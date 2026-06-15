import { Schema, models, model } from "mongoose";

export interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	role: "reader" | "writer" | "admin";
}

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
			trim: true,
			minLength: [5, "Minimum 5 characters required"],
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
			match: [/^\S+@\S+\.\S+$/, "Please use valid email"],
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["reader", "writer", "admin"],
			default: "writer", // ← automatically assign hoga
		},
	},
	{
		timestamps: true,
	},
);

const User = models.User || model("User", userSchema);

export default User;
