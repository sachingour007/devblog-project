import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="wrapper py-16 lg:py-20">
				{/* Logo */}
				<div className="flex justify-center">
					<div className="flex items-center gap-3 w-28 lg:w-37.5 ">
						<Image
							src="/logo.png"
							alt="Zarrin Logo"
							width={150}
							height={43}
							style={{ width: "100%", height: "auto" }}
							className="w-10 h-10 object-contain"
						/>
					</div>
				</div>

				{/* Nav Links */}
				<ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 lg:mt-10">
					<li>
						<Link
							href="#"
							className="text-sm sm:text-base text-black hover:text-bgPurpul transition"
						>
							Home
						</Link>
					</li>

					<li>
						<Link
							href="#"
							className="text-sm sm:text-base text-black hover:text-bgPurpul transition"
						>
							Blog
						</Link>
					</li>

					<li>
						<Link
							href="#"
							className="text-sm sm:text-base text-black hover:text-bgPurpul transition"
						>
							About
						</Link>
					</li>

					<li>
						<Link
							href="#"
							className="text-sm sm:text-base text-black hover:text-bgPurpul transition"
						>
							Contact Us
						</Link>
					</li>
				</ul>

				{/* Social Icons */}
				<div className="flex items-center justify-center gap-4 mt-7 lg:mt-10">
					<Link href={"/"} className="social-icon">
						<FaFacebookF />
					</Link>

					<Link href={"/"} className="social-icon">
						<FaInstagram />
					</Link>

					<Link href={"/"} className="social-icon">
						<FaLinkedinIn />
					</Link>

					<Link href={"/"} className="social-icon">
						<FaYoutube />
					</Link>
				</div>

				{/* Divider */}
				<div className="border-t border-bgPurpul/40 mt-14 pt-8">
					{/* Copyright */}
					<p className="text-center text-sm sm:text-base text-black/70">
						Copyright Ideapeel Inc © 2023. All Right Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
