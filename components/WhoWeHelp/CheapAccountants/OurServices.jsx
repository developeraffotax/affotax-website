"use client";


import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import Card from "./Card";
import img1 from "@/public/freelance1.png";
import img2 from "@/public/freelance2.png";
import img3 from "@/public/freelance3.png";
import img4 from "@/public/freelance4.png";
import img5 from "@/public/freelance5.png";
import img6 from "@/public/freelance6.png";

import { v4 as uuidv4 } from 'uuid';

const steps = [
	{
		title: "Expert Bookkeeping",
		key: uuidv4(),
		img: img1,
		link: `/annual-accounts`,
		content: `Managing your accounts effectively is crucial for the success of your business. Our cheap accountants specialize in delivering comprehensive account management services that ensure your financial records are accurate, up-to-date, and compliant with all statutory requirements. We prepare annual accounts and financial statements, offering you clear insights into your business’s financial health. With our affordable accountants, you can rest assured that your accounts are in capable hands, allowing you to focus on what matters most – growing your business.
`,
	},
	{
		title: "Reliable VAT Returns",
		key: uuidv4(),
		img: img2,
		link: `/corporation-tax-ct600`,
		content: `Corporation tax can be a complex and daunting aspect of running a business. Our cheap accountants are well-versed in all aspects of corporation tax, ensuring that your business remains compliant while optimizing your tax position. We provide detailed tax planning and advisory services, helping you navigate the intricacies of tax regulations and take advantage of available tax reliefs. With our affordable accountants handling your corporation tax, you can minimize your tax liabilities and maximize your profitability.
`,
	},
	{
		title: " Payroll Services",
		key: uuidv4(),
		img: img3,
		link: `/vat-registration`,
		content: `Accurate bookkeeping and VAT compliance are essential for any business. Our cheap accountants provide reliable bookkeeping services, maintaining your financial records with precision and attention to detail. We manage your VAT returns, ensuring that you meet all deadlines and comply with regulations. Our affordable accountants use the latest software and technology to streamline your bookkeeping processes, providing you with real-time financial information and insights that help you make informed business decisions.

`,
	},
	{
		title: "Limited Company Accounting",
		key: uuidv4(),
		img: img4,
		link: `/register-for-paye`,
		content: `Managing payroll can be a challenging and error-prone task. Our cheap accountants offer comprehensive payroll services tailored to your business needs. We handle everything from payslip generation to tax calculations, ensuring compliance with all relevant regulations. Our affordable accountants take care of auto-enrolment, statutory payments, and year-end reporting, giving you peace of mind and freeing up your time to focus on running your business. Trust our experts to manage your payroll efficiently and accurately.

`,
	},

	{
		title: "Self Assessment",
		key: uuidv4(),
		img: img5,
		link: `/self-assessment-tax-return-sa100`,
		content: `Corporation tax can be a complex and daunting aspect of running a business. Our cheap accountants are well-versed in all aspects of corporation tax, ensuring that your business remains compliant while optimizing your tax position. We provide detailed tax planning and advisory services, helping you navigate the intricacies of tax regulations and take advantage of available tax reliefs. With our affordable accountants handling your corporation tax, you can minimize your tax liabilities and maximize your profitability.
`,
	},

	{
		title: " Support for Freelancers and Contractors",
		key: uuidv4(),
		img: img6,
		link: `/uk-company-registration-(uk-resident)`,
		content: `Starting a new business can be an overwhelming process, but our cheap accountants are here to make it easy for you. We offer complete company formation services, from registering your company to setting up your financial systems. Our affordable accountants provide expert advice on the best structure for your business and ensure you meet all legal requirements. Let us help you lay a solid foundation for your new venture and set you on the path to success.

`,
	},
];

export default function OurServices() {

	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className=" w-full  py-16  border-b border-gray-300  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  font-bold text-transparent sm:max-w-2xl text-4xl">
						Comprehensive Cheap Accounting Services in UK

					</h2>
					<span className="mt-4 max-w-2xl   text-center text-lg leading-relaxed text-gray-800">
						We provide comprehensive online accountancy services for
						UK Businesses
					</span>

					<div className="mt-12 gap-8  w-full flex justify-center items-center p-8 ">
						<Splide
							options={{
								rewind: true,
								pagination: true,
								arrows: true,
								perPage: 3,
								breakpoints: {
									1600: {
										perPage: 2,
										arrows: false,
									},
									1024: {
										perPage: 1,
										arrows: false,
									},
								},
							}}
							className="w-full  "
						>
							{steps.map((el) => {
								return (
									<SplideSlide
										key={el.title}
										className=" py-12 px-8 max-lg:px-0  w-full"
									>
										<Card {...el} />
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
