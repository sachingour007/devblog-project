import SignupForm from "@/components/SignupForm";
import Link from "next/link";

const SignupPage = () => {
	return (
		<div className="bg-zinc-50 px-4 pb-10 pt-26 md:px-6 md:pt-24 md:min-h-screen md:flex md:items-center">
			<div className="mx-auto max-w-6xl">
				<div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
					<div className="grid lg:grid-cols-2">
						{/* Left Section */}

						<div className="hidden bg-violet-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
							<div>
								<h1 className="text-4xl font-bold leading-tight">
									Start Publishing
									<br />
									Your Ideas.
								</h1>

								<p className="mt-5 max-w-md text-violet-100">
									Create blogs, share knowledge, and build your
									personal brand with DevBlog.
								</p>
							</div>

							<div className="space-y-4">
								<div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
									Write articles
								</div>

								<div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
									Manage content
								</div>

								<div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
									Grow your audience
								</div>
							</div>
						</div>

						{/* Right Section */}

						<div className="p-6 sm:p-8 md:p-10 lg:p-12">
							<div className="mx-auto max-w-md">
								<div className="mb-8">
									<h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
										Create Account
									</h2>

									<p className="mt-2 text-sm text-zinc-500">
										Create your account to start blogging.
									</p>
								</div>

								<SignupForm />

								<p className="mt-6 text-center text-sm text-zinc-500">
									Already have an account?
									<Link
										href="/login"
										className="ml-1 font-medium text-violet-600"
									>
										Login
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
