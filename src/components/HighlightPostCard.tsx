import Image from "next/image";
import Link from "next/link";

const HighlightPostCard = () => {
	return (
		<section className="relative pb-32 mb-32">
			<div className="wrapper">
				<div className="relative">
					<Image
						src="/heilight-banner.webp"
						alt="desktop-banner"
						width={1884}
						height={864}
						style={{ width: "100%", height: "auto" }}
						className="max-md:hidden"
					/>
					<Image
						src="/heilight-banner-mbl.webp"
						alt="desktop-banner"
						width={440}
						height={299}
						style={{ width: "100%", height: "auto" }}
						className="md:hidden"
					/>
					<div className="p-8 max-w-3/4 absolute bottom-0 right-0 translate-y-1/3 bg-bgWhite rounded-2xl">
						<div className="flexProperty justify-start">
							<span className="font-bold mr-2 text-[12px]">
								DEVELOPMENT
							</span>
							<span className="text-[12px]">16 March 2023</span>
						</div>
						<h2 className="my-6 font-raleway font32 text-black font-bold">
							How to make a Game look more attractive with New VR & AI
							Technology
						</h2>
						<p className="font16 leading-[150%] mb-9">
							Google has been investing in AI for many years and bringing
							its benefits to individuals, businesses and communities.
							Whether it's publishing state-of-the-art research, building
							helpful products or developing tools and resources that
							enable others, we're committed to making AI accessible to
							everyone.
						</p>
						<Link
							href={"/"}
							className="whiteBtnWithoutBorder text-bgPurpul border border-bgPurpul"
						>
							Read More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HighlightPostCard;
