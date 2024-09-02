"use client";

import {  animated, useInView } from "@react-spring/web";

import { v4 as uuidv4 } from "uuid";

const steps = [
	{
		title: "Dedicated account manager",
		key: uuidv4(),
		content: "You will have a dedicated point of contact within our firm who knows about and understands your business, ready to address your queries or concerns.",
	},
	{
		title: "Proactive & timely service",
		key: uuidv4(),
		content: "We stay informed about deadlines and will keep you up-to-date about upcoming filings and tax obligations, providing regular updates so you won't have to worry about missed dates or penalties.",
	},
	{
		title: "Cloud-based technology",
		key: uuidv4(),
		content: "We use secure and user-friendly cloud accounting software that facilitates seamless collaboration and real-time access to your financial data.",
	},
	{
		title: "Competitive fees & transparent pricing",
		key: uuidv4(),
		content: "We offer various service packages to meet the needs of businesses at highly competitive fees and transparent pricing structures.",
	},
	{
		title: "Focus on your business growth",
		key: uuidv4(),
		content: "By handling all accounting and tax matters efficiently, we give you more time to devote yourself to growing and running a successful Limited Company.",
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
					Why choose Affotax for your Limited Company?

					</h2>
					{/* <span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
						We can have you all set up in just in four simple steps…
					</span> */}

					<animated.div ref={ref} style={springs}>
						{" "}
						{
							<div className="mt-12 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4  flex justify-center items-center ">
								<ul className="  flex justify-center items-start gap-8 text-center max-lg:flex-col   ">
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
