
import Image from "next/image";

import img1 from "@/public/1.png";
import img2 from "@/public/2.png";
import img3 from "@/public/local.png";
import img4 from "@/public/4.png";
import img5 from "@/public/5.png";
import img6 from "@/public/6.png";
import { v4 as uuidv4 } from 'uuid';

const steps = [
	{
		title: "Expertise and Experience",
		key: uuidv4(),
		img: img1,
		content: ` Our cheap accountants have years of experience in the accounting industry. They stay up-to-date with the latest regulations and tax laws, ensuring that you receive accurate and reliable advice. Our affordable accountants are committed to providing you with the most current information and strategies to optimize your financial position.

`,
	},
	{
		title: "Personalized Service",
		key: uuidv4(),
		img: img4,
		content: `We believe that every client is unique, and we tailor our services to meet your specific requirements. Our cheap accountants take the time to understand your business and financial goals, offering personalized advice and solutions. Our affordable accountants are always available to answer your questions and provide support, ensuring you feel confident and informed about your financial matters.

`,
	},
	{
		title: "Transparent Pricing",
		key: uuidv4(),
		img: img3,
		content: `We believe in transparency and honesty in all our dealings. Our cheap accountants provide clear and upfront pricing, with no hidden fees or surprises. Our affordable accountants offer flexible payment plans to suit your budget, ensuring you get the services you need without breaking the bank.
`,
	},
	{
		title: "Client Satisfaction",
		key: uuidv4(),
		img: img2,
		content: ` Our clients are our top priority, and we strive to exceed their expectations in every way. Our cheap accountants are committed to providing high-quality services and excellent customer support. Our affordable accountants have built a reputation for reliability and trustworthiness, and we are proud to have a long list of satisfied clients.

`,
	},
	{
		title: "Technology-Driven Solutions",
		key: uuidv4(),
		img: img6,
		content: `We leverage the latest technology to provide efficient and effective accounting services. Our cheap accountants use advanced software for bookkeeping, payroll, and tax management, ensuring accuracy and compliance. Our affordable accountants provide you with access to real-time financial information, helping you make informed decisions and stay on top of your finances.

`,
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
			<div className="flex w-full py-20 max-lg:py-8   flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="relative  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
					Why Choose Our Affordable Accountants?

					</h2>
					<span className="mt-4 max-w-2xl text-center text-base leading-relaxed text-gray-800">
					Choosing our cheap accountants means you get high-quality services at affordable prices. We understand the financial constraints faced by small businesses and individuals, and our goal is to provide cost-effective accounting solutions that do not compromise on quality. Our team of experienced accountants is dedicated to helping you succeed, offering personalized services tailored to your unique needs.

					</span>


					<div className="mt-12 gap-8 w-full flex justify-center items-center content-center ">
						<ul className=" grid grid-cols-3 w-full	  gap-8 text-center max-lg:grid-cols-2  ">
							{steps.map((el, index) => {
								return (
									<li key={el.key} className="flex flex-col justify-center items-center gap-4  ">
										<div className="drop-shadow-md  flex justify-center items-center text-4xl font-oswald font-semibold  w-40">
											<Image
												src={el.img}
												cover
												className="  "
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
