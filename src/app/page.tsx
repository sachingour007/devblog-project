import HighlightPostCard from "@/components/HighlightPostCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className="bg-bgPurpul w-full h-auto xl:h-dvh overflow-hidden relative mb-32">
				<div className="wrapper flexProperty xl:h-full pt-28 xl:pt-20 xl:pb-5 pb-10 gap-14 md:gap-10 lg:gap-20">
					<div className="w-full md:w-2/4 text-bgWhite">
						<h3 className="font-bold font16 leading-[150%] font-raleway">
							Featured Post
						</h3>
						<h1 className="font-bold font64 font-raleway mt-2 lg:mt-7 xl:mt-9 mb-4 lg:mb-5 xl:mb-7  leading-[120%]">
							How AI will <br /> Change the Future
						</h1>
						<p className="font-raleway font16 leading-[150%] mb-6 w-full   xl:w-3/4">
							The future of AI will see home robots having enhanced
							intelligence, increased capabilities, and becoming more
							personal and possibly cute. For example, home robots will
							overcome navigation, direction
						</p>
						<Link href={"/"} className="whiteBtnWithoutBorder">
							Read more
						</Link>
					</div>
					<div className="w-full md:w-2/4 rounded-3xl overflow-hidden">
						<Image
							src="/feature-banner.webp"
							alt=""
							width={912}
							height={864}
							style={{ width: "100%", height: "auto" }}
							loading="eager"
							className="max-md:hidden"
						/>
						<Image
							src="/feature-banner-mbl.webp"
							alt=""
							width={491}
							height={495}
							style={{ width: "100%", height: "auto" }}
							loading="eager"
							className="md:hidden"
						/>
					</div>
				</div>
			</section>

			<HighlightPostCard />
		</>
	);
}
