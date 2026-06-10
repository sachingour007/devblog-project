"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		title: "Overview",
		href: "/dashboard",
	},
	{
		title: "New Story",
		href: "/dashboard/new-story",
	},
	{
		title: "My Blogs",
		href: "/dashboard/all-blogs",
	},
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<ul>
			{links.map((link) => (
				<li key={link.href}>
					<Link
						href={link.href}
						className={`block p-2 rounded ${
							pathname === link.href
								? "bg-blue-500 text-white"
								: "hover:bg-gray-100"
						}`}
					>
						{link.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
