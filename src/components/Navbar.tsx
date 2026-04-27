import Image from "next/image";
import SearchExpandIcon from "./SearchExpandIcon";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="fixed top-0 left-0 w-full bg-white">
			<div className="wrapper py-5 flexProperty justify-between">
				<div className="flex items-center gap-5">
					<div className="w-48 cursor-pointer">
						<Link href={"/"}>
							<Image
								src="/logo.png"
								alt="logo"
								width={250}
								height={70}
								loading="eager"
								style={{ width: "auto", height: "auto" }}
							/>
						</Link>
					</div>
				</div>

				<div className="flex items-center ">
					<ul className="flexProperty gap-14">
						<li className="font16 leading-[150%] font-medium text-bgBlack ">
							<Link href={"/blog"}>Blog</Link>
						</li>
						<li className="font16 leading-[150%] font-medium text-bgBlack ">
							<Link href={"/about"}>About</Link>
						</li>
						<SearchExpandIcon />
						<div>
							<button className="purpuleBtn cursor-pointer">
								Singup
							</button>
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
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
