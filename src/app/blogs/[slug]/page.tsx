import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<section>
			<div className="wrapper">
				<div>
					<div className="flex items-center gap-2">
						<span className="font-bold text-[12px] leading-[100%] text-bgBlack">
							Travel
						</span>
						<span className="font-bold text-[12px] leading-[100%] text-lightGray">
							13 March 2023
						</span>
					</div>
					<h1>
						How to make a Game look more attractive with New VR & AI
						Technology
					</h1>
					<div className="rounded-2xl overflow-hidden">
						<Image
							src="/heilight-banner.webp"
							alt=""
							width={1232}
							height={608}
							loading="eager"
							className="w-full h-auto"
						/>
					</div>
					<p>
						Google has been investing in AI for many years and bringing
						its benefits to individuals, businesses and communities.
						Whether it's publishing state-of-the-art research, building
						helpful products or developing tools and resources that enable
						others, we're committed to making AI accessible to everyone.
						We're now at a pivotal moment in our AI journey. Breakthroughs
						in generative AI are fundamentally changing how people
						interact with technology — and at Google, we've been
						responsibly developing large language models so we can safely
						bring them to our products. Today, we're excited to share our
						early progress. Developers and businesses can now try new APIs
						and products that make it easy, safe and scalable to start
						building with Google's best AI models through Google Cloud and
						a new prototyping environment called MakerSuite. And in Google
						Workspace, we're introducing new features that help people
						harness the power of generative AI to create, connect and
						collaborate.
					</p>
				</div>
			</div>
		</section>
	);
};

export default page;
