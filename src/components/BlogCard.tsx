import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
	return (
		<div className="rounded-3xl border border-gray-200">
			<div className="overflow-hidden rounded-2xl mb-7 xl:mb-10">
				<Image
					src="/blog-feature-img.webp"
					alt="img"
					width={600}
					height={540}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div className="px-2 pb-2">
				<div className="flex items-center gap-2">
					<span className="font-bold text-[12px] leading-[100%] text-bgBlack">
						Travel
					</span>
					<span className="font-bold text-[12px] leading-[100%] text-lightGray">
						13 March 2023
					</span>
				</div>
				<div>
					<h5 className="my-2.5 xl:my-4 text-bgBlack font-raleway font24 leading-[120%] font-bold">
						8 Rules of Travelling In Sea You Need To Know
					</h5>
					<p className="font16 leading-[150%] text-darkGray">
						Travelling in sea has many advantages. Some of the advantages
						of transporting goods by sea include: you can ship large
						volumes at costs
					</p>

					<Link
						href={"/"}
						className="text-bgPurpul underline font18 font-bold mt-3.5 xl:mt-5 inline-block"
					>
						Read More...
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
