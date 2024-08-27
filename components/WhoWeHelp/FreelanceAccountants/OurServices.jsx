"use client";


import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "./Card";
import img1 from "@/public/freelance1.PNG";
import img2 from "@/public/freelance2.PNG";
import img3 from "@/public/freelance3.PNG";
import img4 from "@/public/freelance4.PNG";
import img5 from "@/public/freelance5.PNG";
import img6 from "@/public/freelance6.PNG";

const steps = [
	{
		title: "Accounts",
		img: img1,
		link: `/annual-accounts`,
		content: `As a freelancer, maintaining accurate accounts is crucial for understanding your financial health and meeting regulatory requirements. Our accountants for freelancers offer tailored accounting services to suit your unique needs. We handle everything from setting up your accounting systems to preparing financial statements and reports. Our affordable accountants ensure that your accounts are up-to-date and compliant with all relevant regulations, giving you peace of mind and freeing you to focus on your work.
`,
	},
	{
		title: "Corporation Tax",
		img: img2,
		link: `/corporation-tax-ct600`,
		content: `Navigating corporation tax can be complex, especially for freelancers who have set up limited companies. Our accountants for freelancers specialize in corporation tax and can help you optimize your tax position. We provide comprehensive tax planning and compliance services, ensuring you take advantage of all available tax reliefs and incentives. Our affordable accountants work diligently to minimize your tax liabilities while ensuring full compliance with HMRC regulations. Let us handle your corporation tax so you can focus on growing your business.
`,
	},
	{
		title: "Booking & VAT",
		img: img3,
		link: `/vat-registration`,
		content: `Keeping your books in order and managing VAT can be time-consuming tasks for freelancers. Our accountants for freelancers provide expert bookkeeping and VAT services, ensuring your financial records are accurate and up-to-date. We manage your VAT returns, ensuring compliance with all regulations and deadlines. Our affordable accountants use the latest software and technology to streamline your bookkeeping processes, providing you with real-time financial information and insights. With our freelance bookkeeping UK services, you can stay on top of your finances and focus on your work.
`,
	},
	{
		title: "Payroll",
		img: img4,
		link: `/register-for-paye`,
		content: `If you employ others or operate through a limited company, managing payroll can be challenging. Our accountants for freelancers offer comprehensive payroll services to ensure your payroll is accurate and compliant. We handle everything from payslip generation to tax calculations and submissions to HMRC. Our affordable accountants manage auto-enrolment, statutory payments, and year-end reporting, giving you peace of mind and freeing up your time to focus on your business. Let us take care of your payroll so you can concentrate on what you do best.
`,
	},

	{
		title: "Self Assessment",
		img: img5,
		link: `/self-assessment-tax-return-sa100`,
		content: `Filing self-assessment tax returns can be daunting for freelancers, but our accountants for freelancers are here to simplify the process. We gather all necessary information, accurately complete your tax return, and submit it on time to HMRC. Our affordable accountants ensure that you meet all deadlines and avoid any penalties. We also provide ongoing advice on how to manage your finances and optimize your tax position. With our expertise, self-assessment becomes a hassle-free experience.
`,
	},

	{
		title: "Company Formation",
		img: img6,
		link: `/uk-company-registration-(uk-resident)`,
		content: `Thinking of setting up a limited company? Our accountants for freelancers can guide you through the entire company formation process. We provide expert advice on the best structure for your business and handle all the legal requirements and paperwork. Our affordable accountants ensure that your company is set up correctly from the start, giving you a solid foundation for success. Let us help you navigate the complexities of company formation so you can focus on building your business.
`,
	},
];

export default function OurServices() {

	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className=" w-full  py-16  border-b border-gray-300  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  font-bold text-transparent sm:max-w-2xl text-4xl">
						Our Services for Sole Traders
					</h2>
					<span className="mt-4 max-w-2xl   text-center text-lg leading-relaxed text-gray-800">
						We provide comprehensive online accountancy services for
						sole traders
					</span>

					<div className="mt-12 gap-8  w-full flex justify-center items-center p-8 ">
						<Splide
							options={{
								rewind: true,
								pagination: true,
								arrows: true,
								perPage: 3,
								breakpoints: {
									1000: {
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
										className=" py-12 px-8 max-lg:px-0  "
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
