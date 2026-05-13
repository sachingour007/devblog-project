import BlogCard from "@/components/BlogCard";
import HighlightPostCard from "@/components/HighlightPostCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className="bg-bgPurpul w-full h-auto xl:h-dvh overflow-hidden relative bottomMargin">
				<div className="wrapper flexProperty xl:h-full pt-28 xl:pt-20 xl:pb-5 pb-10 gap-14 md:gap-10 lg:gap-20">
					<div className="w-full md:w-2/4 text-bgWhite">
						<h3 className="font-bold font16 leading-[150%] tracking-[10%] font-raleway">
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

			<section className="bottomMargin">
				<div className="wrapper">
					<div className="flexProperty justify-between flex-row mb-10 lg:mb-15 xl:mb-20">
						<h2 className=" font48 font-bold leading-[74%] text-bgBlack">
							Our Recent Post
						</h2>
						<Link href={"/"} className="purpuleBtn">
							View All
						</Link>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-10 ">
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</div>
				</div>
			</section>

			<section className="bottomMargin">
				<div className="wrapper">
					<div className="flexProperty justify-between flex-row mb-10 lg:mb-15 xl:mb-20">
						<h2 className=" font48 font-bold leading-[74%] text-bgBlack">
							Popular Post
						</h2>
						<Link href={"/"} className="purpuleBtn">
							View All
						</Link>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-10 ">
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</div>
				</div>
			</section>

			<section className="bg-bgPurpul overflow-hidden">
				<div className="wrapper relative text-center py-16 sm:py-20 lg:py-28 xl:py-32">
					<div className="relative z-10 max-w-4xl mx-auto">
						<h2 className="font-raleway text-white font-bold leading-[100%] tracking-[0.2px] font52">
							Get our stories delivered From us to your inbox weekly.
						</h2>

						<form
							action=""
							className="mt-10 flex flex-row items-center justify-center gap-2 lg:gap-4"
						>
							<input
								type="email"
								placeholder="Your Email"
								className="max-w-4/5 lg:w-5/12 xl:w-1/2 h-9 lg:h-14 px-5 rounded-md outline-none text-sm sm:text-base bg-bgWhite"
							/>
							<button className="sm:w-auto h-9 lg:h-14 px-3 lg:px-8 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-bgPurpul transition-all duration-300">
								Get started
							</button>
						</form>
						<p className="text-[#dbdbdb] font16 leading-relaxed max-w-2xl mx-auto mt-6 px-4">
							Get a response tomorrow if you submit by 9pm today. If we
							received after 9pm will get a response the following day.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
