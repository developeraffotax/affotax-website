"use client";


import { useScroll, useInView } from "@react-spring/web";
import SingleSplide from "../EcommerceAccountants/SingleSplide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { v4 as uuidv4 } from "uuid";
import "@splidejs/react-splide/css";


const steps = [
	{
		title: "Accounts",
		key: uuidv4(),
		content:
			"Our property accountants ensure your financial statements are prepared in compliance with UK accounting standards, providing you with a clear and accurate picture of your financial position.",
	},
	{
		title: "Corporation Tax",
		key: uuidv4(),
		content:
			"Our experts provide comprehensive corporation tax services, ensuring you meet all tax obligations while maximizing tax efficiency.",
	},
	{
		title: " VAT",
		key: uuidv4(),
		content: `Our property accountants provide expert advice on VAT registration, compliance, and planning, helping you manage your VAT obligations effectively.
`,
	},
	{
		title: "Payroll",
		key: uuidv4(),
		content: `We offer a full range of payroll solutions, including processing payroll, managing PAYE and NICs, and ensuring compliance with auto-enrolment pensions.
`,
	},

	{
		title: "Self Assessment",
		key: uuidv4(),
		content: `We handle everything from tax return preparation to filing, ensuring your tax returns are accurate and submitted on time.
`,
	},

	{
		title: "Company Formation",
		key: uuidv4(),
		content: `Our property accountants provide expert guidance on company formation, ensuring your new company is structured in the most tax-efficient way.
`,
	},

	{
		title: "Company Secretarial ",
		key: uuidv4(),
		content: `Our company secretarial services ensure all statutory obligations are met, including company formation, maintaining statutory registers, and filing annual returns.
`,
	},

	{
		title: "Bookkeeping",
		key: uuidv4(),
		content: `Our bookkeeping services ensure your financial records are maintained accurately and up-to-date, using the latest accounting software.
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
			<div className="flex w-full     flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="w-full   py-16 border-b border-gray-300  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  font-bold text-transparent sm:max-w-2xl text-4xl">
					Comprehensive Property Accounting Services in UK
					</h2>
					<span className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-800">
					

					</span>

					<div className="mt-12 gap-8  w-full flex justify-center items-center ">
								<Splide options={{ rewind: true, pagination: false, arrows: true, perPage: 3, breakpoints: {
                                    1000: {
                                        perPage: 1,
                                        pagination: true,
										arrows: false
                                    }
                                }}} className="w-full p-12  " >
									{steps.map((el) => {
										return (
											<SplideSlide key={el.key} className=" py-8" >
												<SingleSplide title={el.title} content={el.content} key={uuidv4()} />{" "}
											</SplideSlide>
										);
									})}
								</Splide>
							</div>
				</div>
			</div>
		</>
	);
}
