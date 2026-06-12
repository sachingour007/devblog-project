import LoginForm from "@/components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div className="bg-zinc-50 pt-26 pb-10 px-4 md:px-6 lg:min-h-screen lg:flex lg:items-center">
			<div className="mx-auto w-full max-w-6xl">
				<div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
					<div className="grid lg:grid-cols-2">
						{/* Left Panel */}

						<div className="hidden bg-violet-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
							<div>
								<h1 className="text-4xl font-bold leading-tight">
									Welcome Back
									<br />
									Writer.
								</h1>

								<p className="mt-5 max-w-md text-violet-100">
									Continue writing, managing articles, and growing your
									audience on DevBlog.
								</p>
							</div>

							<div className="space-y-4">
								<div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
									Create engaging content
								</div>

								<div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
									Track blog performance
								</div>

								<div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
									Manage your publications
								</div>
							</div>
						</div>

						{/* Right Panel */}

						<div className="p-6 sm:p-8 md:p-10 lg:p-12">
							<div className="mx-auto max-w-md">
								<div className="mb-8">
									<h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
										Login
									</h2>

									<p className="mt-2 text-sm text-zinc-500">
										Enter your credentials to access your account.
									</p>
								</div>

								<LoginForm />

								<div className="relative my-6">
									<div className="absolute inset-0 flex items-center">
										<div className="w-full border-t border-zinc-200" />
									</div>

									<div className="relative flex justify-center">
										<span className="bg-white px-4 text-sm text-zinc-400">
											OR
										</span>
									</div>
								</div>

								<button
									type="button"
									className="h-12 w-full rounded-xl border border-zinc-300 bg-white font-medium text-zinc-700 transition hover:bg-zinc-50"
								>
									Continue with Google
								</button>

								<p className="mt-6 text-center text-sm text-zinc-500">
									Don't have an account?
									<Link
										href="/signup"
										className="ml-1 font-medium text-violet-600"
									>
										Create Account
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
export default LoginPage;
