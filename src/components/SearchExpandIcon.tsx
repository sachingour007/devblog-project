"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SearchExpandIcon = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (!target.closest(".search-container")) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<div className="flexProperty relative search-container">
			<input
				type="text"
				placeholder="Search..."
				id="searchInput"
				className={`
          transition-all duration-300 ease-in-out
          border border-gray-300 rounded-full pl-10 pr-4 py-2
          focus:outline-none
          ${isOpen ? "w-64 opacity-100" : "w-0 opacity-0"}
        `}
			/>
			<div
				className="absolute right-4 cursor-pointer"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<Image src="/search-icon.svg" alt="search" width={20} height={20} />
			</div>
		</div>
	);
};

export default SearchExpandIcon;
