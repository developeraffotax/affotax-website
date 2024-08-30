"use client";

import Image from "next/image";

import img1 from "@/public/1.png";
import img2 from "@/public/2.png";
import img3 from "@/public/3.png";
import img4 from "@/public/4.png";
import img5 from "@/public/5.png";
import img6 from "@/public/6.png";

import { v4 as uuidv4 } from "uuid";

const steps = [
	{
		title: "Simplified Accounting",
		key: uuidv4(),
		img: img1,
		content:
			"We take the burden of accounting off your shoulders, managing your daily business transactions, including receipts and invoices, through user-friendly cloud-based applications.",
	},
	{
		title: "Tax-Related Expertise",
		key: uuidv4(),
		img: img2,
		content:
			"We ensure you receive all applicable deductions and allowances, reducing your tax burden. Stay updated with the latest tax laws affecting sole traders in the UK.",
	},
	{
		title: "HMRC Compliance",
		key: uuidv4(),
		img: img3,
		content:
			"We handle all communication with HMRC, ensuring you never miss a deadline or incur penalties.",
	},
	{
		title: "Strategic Planning",
		key: uuidv4(),
		img: img4,
		content:
			"Receive valuable financial advice tailored to your business, helping you set realistic goals, make informed decisions, and plan for the future.",
	},
	{
		title: "Simple bookkeeping software",
		key: uuidv4(),
		img: img6,
		content:
			"Pandle was developed for our clients, and is now used by over 90,000 businesses around the world. Our bookkeeping team will regularly review your entries to ensure they're accurate.",
	},
	{
		title: "Unlimited Support",
		key: uuidv4(),
		img: img5,
		content:
			"Our friendly team is always available to answer queries and offer guidance on business decisions.",
	},
];

export default function WhyChooseUs() {
	return (
		<>
			<div className="flex w-full py-20 max-lg:py-8  flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="relative  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						Why Choose Us for Your Sole Trader Accounting Needs?
					</h2>
					<span className="mt-4 max-w-2xl text-center text-xl leading-relaxed text-gray-800">
						We have helped over 3,000+ businesses in the UK to
						thrive.
					</span>

					<div className="mt-12 gap-8 w-full flex justify-center items-center content-center ">
						<ul className=" grid grid-cols-3 w-full	  gap-8 text-center max-lg:grid-cols-2  ">
							{steps.map((el, index) => {
								return (
									<li
										key={el.key}
										className="flex flex-col justify-center items-center gap-4  "
									>
										<div className="drop-shadow-md  flex justify-center items-center text-4xl font-oswald font-semibold  w-40">
											<Image
												src={el.img}
												cover
												className="saturate-  "
											/>
										</div>
										<h3 className="font-semibold text-xl font-poppins max-w-72">
											{el.title}
										</h3>
										<p className="text-sm max-w-72">
											{el.content}
										</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
