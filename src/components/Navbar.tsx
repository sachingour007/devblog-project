"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchExpandIcon from "./SearchExpandIcon";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { logout, isAuthenticated, user } = useAuthStore();
	const router = useRouter();

	const logoutHandler = async () => {
		try {
			const res = await fetch("/api/auth/logout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			const data = res.json();
			logout();
			router.push("/login");
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {}, [isAuthenticated]);

	return (
		<header className="fixed top-0 left-0 w-full bg-white shadow-sm z-999">
			<div className="wrapper py-5 flex justify-between items-center">
				{/* Logo */}
				<Link href="/" className="w-28 md:w-32 xl:w-48">
					<Image src="/logo.png" alt="logo" width={250} height={70} />
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center gap-10">
					<li>
						<Link href="/blogs">Blog</Link>
					</li>
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<SearchExpandIcon />

					{isAuthenticated ? <p>Hi, {user?.username}</p> : ""}

					<button className="purpuleBtn">
						{isAuthenticated ? (
							<span className="cursor-pointer " onClick={logoutHandler}>
								logout
							</span>
						) : (
							<Link href={"/login"}> login</Link>
						)}
					</button>
				</ul>

				{/* Hamburger Button */}
				<button
					className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
					onClick={() => setIsOpen(!isOpen)}
				>
					<span
						className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
							isOpen ? "rotate-45" : "-translate-y-2"
						}`}
					></span>

					<span
						className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
							isOpen ? "opacity-0" : ""
						}`}
					></span>

					<span
						className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
							isOpen ? "-rotate-45" : "translate-y-2"
						}`}
					></span>
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white border-t ">
					<ul className="flex flex-col items-center gap-6 py-6">
						<li>
							<Link href="/blogs" onClick={() => setIsOpen(false)}>
								Blog
							</Link>
						</li>
						<li>
							<Link href="/dashboard" onClick={() => setIsOpen(false)}>
								Dashboard
							</Link>
						</li>
						<li>
							<SearchExpandIcon />
						</li>
						<button className="purpuleBtn">Signup</button>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Navbar;
