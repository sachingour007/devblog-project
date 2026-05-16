import BlogCard from "@/components/BlogCard";
import React from "react";

const page = () => {
	return (
		<>
			<section className="pt-28 md:pt-32 xl:pt-44 mb-11 md:mb-20 xl:mb-25">
				<div className="wrapper flexProperty flex-col">
					<h4 className="font-raleway uppercase font-bold font16 leading-[150%] tracking-widest text-darkGray">
						Our Blogs
					</h4>
					<h1 className="font-raleway font-bold text-[24px] sm:font48 text-bgBlack leading-[100%] my-4 md:my-6">
						Find our all blogs from here
					</h1>
					<p className="font16 text-darkGray leading-[150%] max-w-full md:max-w-3/4 xl:max-w-1/2 text-center ">
						our blogs are written from very research and well known
						writers so that we can provide you the best blogs and articles
						for you to read them all along
					</p>
				</div>
			</section>
			<section className="bottomMargin">
				<div className="wrapper grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-10">
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</section>
		</>
	);
};

export default page;
