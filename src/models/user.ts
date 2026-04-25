import { Schema, models, model } from "mongoose";

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
	},
	{
		timestamps: true,
	},
);

const User = models.User || model("User", userSchema);

export default User;
