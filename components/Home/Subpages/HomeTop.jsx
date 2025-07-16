"use client";

import React, { useContext } from "react";
import HeroImg4 from "@/public/hero4.png";
import Link from "next/link";
import { QuoteFormContext } from "@/app/(user)/layout";
import Image from "next/image";
import { LiaStarSolid } from "react-icons/lia";
import TrustPilotSection from "./TrustPilotSection";

export default function HomeTop({ HeroSection, googleReviewsCount }) {
	const { heading, html, imageUrl } = JSON.parse(HeroSection);
	const gReviewsCount = JSON.parse(googleReviewsCount);
 
	const quoteContext = useContext(QuoteFormContext);


	 
	return (
		<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 relative newBg2 ">
			<div className="container mx-auto ">
				<div className=" flex    flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
					<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
						<h1 className=" text-5xl  max-lg:text-4xl mb-8 font-bold  text-tertiary max-lg:text-left leading-[3rem]   ">
							Online Accountants <br /> Services | UK's Affordable
							Accounting Firm
						</h1>
						<div
							className="mb-8 leading-relaxed  text-tertiary/[70] text-xl max-lg:text-lg    "
							dangerouslySetInnerHTML={{ __html: html }}
						></div>
						<div className="flex justify-center text-nowrap ">
							<Link href={"/services"}>
								<button className="inline-flex text-primary shadow-md shadow-black/15 bg-transparent border-0 py-2 px-6 outline-primary outline-1 outline   hover:bg-primary hover:text-secondary rounded-md text-lg font-semibold">
									{" "}
									Services{" "}
								</button>
							</Link>
							<button
								onClick={quoteContext.showModal}
								className="ml-4 inline-flex text-secondary shadow-md shadow-black/15 bg-primary border-0 py-2 px-6 hover:outline-primary outline outline-1 outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold"
							>
								{" "}
								Get a Quote{" "}
							</button>
						</div>
					</div>

					<div className=" w-[50%]  max-lg:w-full  max-lg:mb-4  ">
						<img
							className="object-cover object-center rounded  drop-shadow-xl   "
							alt="hero"
							src={HeroImg4.src}
						/>

						{/* <Image
                    className='object-cover object-center rounded  drop-shadow-xl   '
                    alt='hero'
                    src={HeroImg4}
                    height={3000}
                    width={3000}
                    

                    /> */}
					</div>
				</div>
				<div className="w-full flex justify-start max-xl:w-full ">
					<TrustPilotSection gReviewsCount={gReviewsCount}  />
				</div>
			</div>
		</section>
	);
}
