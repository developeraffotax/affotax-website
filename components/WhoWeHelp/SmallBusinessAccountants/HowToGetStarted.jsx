"use client";

import { useScroll, animated, useInView } from "@react-spring/web";
import { v4 as uuidv4 } from "uuid";

const steps = [
	{
		title: "Start-ups",
		key: uuidv4(),
		content:
			"We understand the unique challenges faced by new businesses. We'll guide you through setting up your accounting systems, ensuring compliance from day one.",
	},
	{
		title: "Established Businesses",
		key: uuidv4(),
		content:
			"As your business grows, so do your financial needs. We'll adapt and evolve alongside you, providing ongoing support and helping you navigate the complexities of a maturing business",
	},
	{
		title: "Freelancers & Contractors",
		key: uuidv4(),
		content:
			"We understand the complexities of self-employment. We'll ensure you maintain accurate records, claim all allowable expenses, and pay the correct taxes.",
	},
];

export default function HowToGetStarted() {
	

	const [ref, springs] = useInView(() => ({
		from: {
			opacity: 0,
			y: 300,
		},
		to: {
			opacity: 1,
			y: 0,
		},
	}));

	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="relative  py-16 max-lg:py-0 max-lg:pb-16  border-b border-gray-300  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						Who We Help in Small Business Accounting
					</h2>

					<animated.div ref={ref} style={springs}>
						{" "}
						{
							<div className="mt-12 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4  flex justify-center items-center ">
								<ul className="  flex justify-center items-start gap-10 text-center max-lg:flex-col  ">
									{steps.map((el, index) => {
										return (
											<li
												key={el.key}
												className="flex flex-col justify-center items-center gap-4"
											>
												<div className="bg-[#23314E] drop-shadow-md  rounded-full aspect-square flex justify-center items-center text-4xl font-oswald font-semibold text-white w-24 ">
													{index + 1}
												</div>
												<h3 className="font-semibold text-xl font-poppins ">
													{el.title}
												</h3>
												<p className="text-sm max-w-52">
													{el.content}
												</p>
											</li>
										);
									})}
								</ul>
							</div>
						}
					</animated.div>
				</div>
			</div>
		</>
	);
}
