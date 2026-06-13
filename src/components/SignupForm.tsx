"use client";

import { useFormik } from "formik";
import { registerSchema } from "@/util/FormValidation";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/router";

const initialValues = {
	username: "",
	email: "",
	password: "",
};

interface PropData {
	username: string;
	email: string;
	password: string;
}

const SignupForm = () => {
	const { setAuth } = useAuthStore();
	const router = useRouter();

	const userSingup = async (val: PropData) => {
		const res = await fetch("/api/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(val),
		});

		const data = await res.json();
		return data;
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: registerSchema,
			onSubmit: async (values, action) => {
				const result = await userSingup(values);
				setAuth(result.user);
				router.push("/dashboard");
				action.resetForm();

				console.log("submites", result);
				try {
				} catch (error) {
					console.log(error);
				}
			},
		});

	return (
		<form className="space-y-5" onSubmit={handleSubmit}>
			<div>
				<label className="mb-2 block text-sm font-medium text-zinc-700">
					Username
				</label>

				<input
					type="text"
					placeholder="john_doe"
					className="h-12 w-full rounded-xl border border-zinc-300 px-4 outline-none transition-all focus:border-violet-500"
					name="username"
					value={values.username}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.username && touched.username ? (
					<p className="mt-1 text-sm text-red-500">{errors.username}</p>
				) : null}
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-zinc-700">
					Email
				</label>

				<input
					type="email"
					placeholder="john@example.com"
					className="h-12 w-full rounded-xl border border-zinc-300 px-4 outline-none transition-all focus:border-violet-500"
					name="email"
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.email && touched.email ? (
					<p className="mt-1 text-sm text-red-500">{errors.email}</p>
				) : null}
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-zinc-700">
					Password
				</label>

				<input
					type="password"
					placeholder="••••••••"
					className="h-12 w-full rounded-xl border border-zinc-300 px-4 outline-none transition-all focus:border-violet-500"
					value={values.password}
					name="password"
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.password && touched.password ? (
					<p className="mt-1 text-sm text-red-500">{errors.password}</p>
				) : null}
			</div>

			<button
				type="submit"
				className="h-12 w-full rounded-xl bg-violet-600 font-medium text-white transition hover:bg-violet-700"
			>
				Create Account
			</button>
		</form>
	);
};

export default SignupForm;
