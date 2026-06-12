"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "@/util/FormValidation";

const initialValues = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: loginSchema,
			onSubmit: async (values, acton) => {
				console.log(values);
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
				<div className="mb-2 flex items-center justify-between">
					<label className="text-sm font-medium text-zinc-700">
						Password
					</label>

					{/* <Link
						href="/forgot-password"
						className="text-sm text-violet-600 hover:text-violet-700"
					>
						Forgot Password?
					</Link> */}
				</div>

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
				Login
			</button>
		</form>
	);
};

export default LoginForm;
