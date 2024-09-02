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
		title: "Simplified bookkeeping & payroll",
		key: uuidv4(),
		img: img1,
		content:
			"We handle all your bookkeeping needs from recording transactions to reconciling accounts to managing payroll and auto-enrolment pensions, all using cloud accounting software for easy access and real-time financial insights.",
	},
	{
		title: "Dividend planning & tax advice",
		key: uuidv4(),
		img: img2,
		content:
			"At Affotax, we specialise in structuring businesses finances to maximise tax efficiency. We help you find your way around dividend payments efficiently to reduce overall tax liabilities.",
	},
	{
		title: "Annual accounts & corporation tax returns",
		key: uuidv4(),
		img: img3,
		content:
			" Our experienced accountants will ensure your annual accounts (including CT600 forms) comply with Companies House and HMRC regulations while also identifying all available tax deductions to reduce your corporation tax bill..",
	},
	{
		title: "VAT returns",
		key: uuidv4(),
		img: img4,
		content:
			"We take care in managing and filing for VAT calculations and submissions on time - whether standard-rated, flat rate or VAT registered overseas. We're here to guide you through complex VAT rules while helping to avoid penalties along the way.",
	},
	{
		title: "Financial reporting & business insights",
		key: uuidv4(),
		img: img6,
		content:
			"At Affotax, we go beyond simple bookkeeping by translating your financial data into clear, actionable insights so you can make informed business decisions and track growth effectively.",
	},
	{
		title: "Unlimited Support",
		key: uuidv4(),
		img: img5,
		content:
			"At Affotax, we understand that your financial journey doesn't stop after our initial consultation. That's why we offer unlimited support to our clients, ensuring you have peace of mind knowing that expert guidance is always just a phone call or email away.",
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
						<ul className=" grid grid-cols-3 w-full	items-start   gap-8 text-center max-lg:grid-cols-2  ">
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
