import Image from "next/image";
import Link from "next/link";

const HighlightPostCard = () => {
	return (
		<section className="relative xl:pb-32 bottomMargin">
			<div className="wrapper">
				<div className="relative p-5 md:p-6 xl:p-0 flexProperty flex-col gap-6 border border-[#DBDBDB] xl:border-none rounded-xl">
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
					<div className="xl:p-8  relative max-w-full xl:max-w-3/4 xl:absolute xl:bottom-0 xl:right-0 xl:translate-y-1/3 bg-bgWhite rounded-2xl">
						<div className="flexProperty justify-start flex-row">
							<span className="font-bold mr-2 text-[12px]">
								DEVELOPMENT
							</span>
							<span className="text-[12px]">16 March 2023</span>
						</div>
						<h2 className="mt-2 mb-7 xl:my-6 font-raleway leading-[120%] font32 text-black font-bold">
							How to make a Game look more attractive with New VR & AI
							Technology
						</h2>
						<p className="font16 leading-[150%] mb-5 xl:mb-9">
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
