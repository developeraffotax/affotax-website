"use client";


import { useScroll, useInView } from "@react-spring/web";
import { v4 as uuidv4 } from "uuid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import SingleSplide from "./SingleSplide";

const steps = [
	{
		title: "Accounts",
		content:
			"Accurate and timely accounting is crucial for ecommerce businesses to thrive. Our experienced accountants for ecommerce meticulously manage your financial records, ensuring all transactions are accurately recorded and categorized. Whether it's reconciling sales, tracking expenses, or managing inventory, our team is equipped to handle it all. We provide detailed financial reports that give you insights into your business's performance, helping you make informed decisions to drive growth.",
	},
	{
		title: "Corporation Tax",
		content: `Navigating corporation tax requirements can be daunting, especially for ecommerce businesses operating across different jurisdictions. Our Amazon accounting and Shopify accountant services include expert tax planning and compliance. We help you minimize tax liabilities while ensuring compliance with local tax regulations. Whether you're dealing with VAT, sales tax, or international tax issues, our specialists provide proactive advice tailored to your ecommerce business's unique circumstances.
`,
	},
	{
		title: "Booking & VAT",
		content: `Accurate bookkeeping and VAT compliance are essential for ecommerce businesses selling across borders. Our accountants provide meticulous bookkeeping services, ensuring your financial records are up-to-date and accurate. We manage your VAT obligations, including registration, filing, and compliance with local VAT regulations. Our Amazon accounting and Shopify accountant services use advanced software to streamline bookkeeping processes, giving you real-time visibility into your financial health.
`,
	},
	{
		title: "Payroll",
		content: `Managing payroll for your ecommerce business requires attention to detail and compliance with employment laws. Our accountants offer comprehensive payroll services, handling everything from employee wage calculations to statutory deductions. Whether you have contractors, freelancers, or full-time employees, we ensure payroll is processed accurately and on time. Our Amazon accounting and Shopify accountant services also cover auto-enrolment for pension schemes and compliance with payroll tax requirements.

`,
	},

	{
		title: "Self Assessment",
		content: `As an ecommerce entrepreneur, filing accurate self-assessment tax returns is crucial to avoid penalties and ensure compliance. Our dedicated team of accountants simplifies the self-assessment process for you. We gather all necessary income and expense information, complete your tax return accurately, and submit it on time. Our Amazon accounting and Shopify accountant services ensure you maximize allowable expenses and deductions, optimizing your tax position.
`,
	},

	{
		title: "Company Formation",
		content: `Starting an ecommerce business requires careful planning and compliance with legal requirements. Our accountancy services include comprehensive company formation assistance. Whether you're incorporating a new business or expanding internationally, we guide you through the process step-by-step. From registering your company to setting up your accounting systems, our Amazon accounting and Shopify accountant services ensure you start off on the right foot.
`,
	},
];

export default function OurServices() {
	const { scrollYProgress } = useScroll();

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
			<div className="flex w-full     flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="relative  py-16 border-b border-gray-300  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  font-bold text-transparent sm:max-w-2xl text-4xl">
						Our Services for Ecommerce Businesses
					</h2>
					<span className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-800">
					Explore our comprehensive suite of services

					</span>

					<Splide options={{ rewind: true, pagination: false, arrows: true, perPage: 3 }} className="w-full py-12"  >
						{steps.map((el) => {
							return (
								<SplideSlide key={el.title} className=" py-8">
									<SingleSplide
										title={el.title}
										content={el.content}
										key={uuidv4()}
									/>{" "}
								</SplideSlide>
							);
						})}
					</Splide>
				</div>
			</div>



		</>
	);
}
