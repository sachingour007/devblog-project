import Image from "next/image";

const Navbar = () => {
	return (
		<header className="fixed top-0 left-0 w-full bg-white">
			<div className="py-5 px-8 flex items-center justify-between">
				<div className="flex items-center gap-5">
					<div className="w-48">
						<Image
							src="/logo.svg"
							alt="logo"
							width={250}
							height={70}
							loading="eager"
							style={{ width: "auto", height: "auto" }}
						/>
					</div>
					<div className="flex items-center bg-[#f3f3f3] rounded-full pl-2.5 focus-within:ring-1 focus-within:ring-greenforest">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								fillRule="evenodd"
								d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
								clipRule="evenodd"
							></path>
						</svg>
						<input
							type="text"
							placeholder="Search"
							className="bg-gray-100 px-4 py-2 rounded-full outline-none"
						/>
					</div>
				</div>
				<div className="flex items-center gap-5">
					<div className="flex gap-1 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
							></path>
							<path
								stroke="currentColor"
								d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
							></path>
						</svg>
						<p className="font18 font-inter ">Write</p>
					</div>
					<div>
						<button className="greenBtn cursor-pointer">Singup</button>
						<div className="hidden">
							<div className="w-12 h-12 border border-y-gray-50 rounded-full overflow-hidden">
								<Image
									src="/dummy-user.png"
									alt="user"
									width={50}
									height={50}
									style={{ width: "auto", height: "auto" }}
								/>
							</div>
							<div>
								<ul>
									<li>Profile</li>
									<li>logout</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
