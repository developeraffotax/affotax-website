"use client";

import React, { useContext } from "react";
// import HeroImg4 from "@/public/hero4.png";
import Link from "next/link";
import { QuoteFormContext } from "@/app/(user)/layout";
 
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

					<div className=" w-[50%]  max-lg:w-full    ">
						{/* <img
							className="object-cover object-center rounded  drop-shadow-xl   "
							alt="hero"
							src={HeroImg4.src}
							 
						/>	 */}


						{/* <picture>
							<source
								media="(max-width: 768px)"
								srcSet="/heroCompress.webp"
								type="image/webp"
							/>
							 
							<source srcSet="/heroCompress.webp" type="image/webp" />
							<img
								className="object-cover object-center rounded drop-shadow-xl"
								alt="Online Accountant Services UK"
								src="/heroCompress.webp"
								decoding="async"
								fetchpriority="high"
								width="1200"
								height="800"
							/>
						</picture> */}


						<picture>
							<source
								media="(max-width: 768px)"
								srcSet="/heroCompress4.png"
								type="image/png"
							/>
							 
							<source srcSet="/heroCompress4.png" type="image/png" />
							<img
								className="object-cover object-center rounded drop-shadow-xl"
								alt="Online Accountant Services UK"
								src="/heroCompress4.png"
								decoding="async"
								fetchpriority="high"
								width="1200"
								height="800"
							/>
						</picture>

					 
					</div>
				</div>
				<div className="w-full flex justify-between items-center max-xl:w-full ">
					<TrustPilotSection gReviewsCount={gReviewsCount}  />



					{/* <div className="  w-[30%] max-xl:w-full flex flex-col h-full justify-between 
p-6 bg-white/50 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm 
hover:shadow-md transition-all duration-300 hover:scale-105 ">

						<div
					className="trustpilot-widget"
					data-locale="en-US"
					data-template-id="53aa8807dec7e10d38f59f32"
					data-businessunit-id="64d63b5dc33d714e75c680f9"
					data-style-height="150px"
					data-style-width="100%"
					data-token="9b8ea25f-7726-4697-adcf-caa3c92c64b8"
				>
					<a
						href="https://www.trustpilot.com/review/affotax.com"
						target="_blank"
						rel="noopener"
					>
						Trustpilot
					</a>
				</div>


					</div> */}
				</div>
			</div>
		</section>
	);
}

























// "use client";

// import React, { useContext } from "react";
// import Link from "next/link";
// import { QuoteFormContext } from "@/app/(user)/layout";
// import TrustPilotSection from "./TrustPilotSection";

// export default function HomeTop({ HeroSection, googleReviewsCount }) {
//   const { heading, html, imageUrl } = JSON.parse(HeroSection);
//   const gReviewsCount = JSON.parse(googleReviewsCount);
//   const quoteContext = useContext(QuoteFormContext);

//   return (
//     <section className="w-full bg-slate-50 text-gray-600 newBg2">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//         {/* HERO ROW */}
//         <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col items-start text-left max-w-xl w-full">
//             <h1 className="text-4xl sm:text-5xl font-bold text-tertiary leading-tight mb-6">
//               Online Accountants Services <br />
//               UK’s Affordable Accounting Firm
//             </h1>

//             <div
//               className="text-lg sm:text-xl text-tertiary/70 mb-8"
//               dangerouslySetInnerHTML={{ __html: html }}
//             />

//             <div className="flex flex-wrap gap-4">
//               <Link href="/services">
//                 <button className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-2 text-lg font-semibold text-primary shadow-md hover:bg-primary hover:text-secondary transition">
//                   Services
//                 </button>
//               </Link>

//               <button
//                 onClick={quoteContext.showModal}
//                 className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-lg font-semibold text-secondary shadow-md hover:bg-transparent hover:text-primary hover:border hover:border-primary transition"
//               >
//                 Get a Quote
//               </button>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="w-full max-w-xl">
//             <picture>
//               <source
//                 media="(max-width: 768px)"
//                 srcSet="/heroCompress2.png"
//                 type="image/png"
//               />
//               <img
//                 src="/heroCompress2.png"
//                 alt="Online Accountant Services UK"
//                 className="w-full h-auto rounded-xl drop-shadow-xl object-cover"
//                 decoding="async"
//                 fetchPriority="high"
//                 width="1200"
//                 height="800"
//               />
//             </picture>
//           </div>
//         </div>

//         {/* TRUST SECTION */}
//         <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-8">
//           <TrustPilotSection gReviewsCount={gReviewsCount} />
//         </div>
//       </div>
//     </section>
//   );
// }
