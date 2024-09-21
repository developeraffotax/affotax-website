import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4, } from "@/public/assets/extra-locations";

export const metadata = {
	title: "Chartered Accountants Bridgend | Top Bridgend Accountants",
	description:
		"We are chartered accountants Bridgend, ready to help small businesses, partnerships, sole traders, etc. to grow. Contact our accountants in Bridgend today!",
		metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/location/accountants-bridgend`, },
		keywords: ['accountants Bridgend']
};

export default function Bridgend() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								Chartered Accountants Bridgend
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								Operating a company is an exhilarating
								exploration in Bridgend. Between handling daily
								operations and pursuing expansion, it can appear
								unsafe to keep track of finances. This is where
								our chartered accountants in Bridgend become
								your game-changer.
								<br /> <br />
								Our experienced team understands every unique
								challenge businesses face in Bridgend. Without a
								doubt, our team of Bridgend accountants are
								available to help you go through the complex tax
								regulations and accurate bookkeeping.
							</p>
							<div className="flex justify-center text-nowrap ">
								<Link href={"/services"}>
									<button className="inline-flex text-secondary shadow-md shadow-black/15 bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold">
										{" "}
										Services{" "}
									</button>
								</Link>
								<Link href={"/contact-us"}>
									<button className="ml-4 inline-flex text-primary shadow-md shadow-black/15 bg-transparent border-0 py-2 px-6 outline-primary outline-1 outline hover:bg-primary hover:text-secondary rounded-md text-lg font-semibold">
										{" "}
										Get a Quote{" "}
									</button>
								</Link>
							</div>
						</div>

						<div className=" w-[50%]  max-lg:w-full  max-lg:mb-4 scale-125">
							<Image
								className="object-cover object-center rounded  drop-shadow-xl "
								alt="hero"
								src={hero}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* HOW IT WORKS */}
			<section className="bg-slate-50 py-12 sm:py-16 lg:py-12 xl:py-12 w-full drop-shadow-lg px-80 max-2xl:px-40 max-xl:px-20  max-lg:px-8  ">
				<div className="mx-auto max-w-7xl px-4  max-lg:px-4">
					<div className="text-center mb-12">
						<h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
							Why choose our Bridgend accountants?
						</h2>
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-primary inline-flex" />
						</div>
					</div>
					<ul className="mx-auto mt-12 grid grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-4">
						<li className="flex-start group relative flex lg:flex-col">
							<span
								className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
								aria-hidden="true"
							/>
							<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
								<Image
									src={icon1}
									alt="london icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Secure & accessible
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Users can upload their documents and
									communicate with their accountants at any
									time from any place using our secure online
									system.
								</h4>
							</div>
						</li>
						<li className="flex-start group relative flex lg:flex-col">
							<span
								className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
								aria-hidden="true"
							/>
							<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
								<Image
									src={icon2}
									alt="london icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Real-time collaboration
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our team ensures effortless collaboration.
									Access, track progress or inquire within the
									most convenient online client portal.
								</h4>
							</div>
						</li>
						<li className="flex-start group relative flex lg:flex-col">
							<span
								className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
								aria-hidden="true"
							/>
							<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
								<Image
									src={icon3}
									alt="london icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Affordability
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our online platform simplifies procedures
									and lessens overhead costs. For example, it
									comes with transparent pricing plans suited
									for whatever type of business one may have.
								</h4>
							</div>
						</li>
						<li className="flex-start group relative flex lg:flex-col">
							<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
								<Image
									src={icon4}
									alt="london icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Always up-to-date
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									You can quickly check the expenses you have
									incurred so far and the dates they are due
									through timely notifications.
								</h4>
							</div>
						</li>
					</ul>
				</div>
			</section>

			{/* WHY CHOOSE US */}

			<section className="text-gray-600 body-font px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8">
				<div className="container px-5 py-12 mx-auto">
					<div className="text-center mb-16">
						<h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
							How can our accountants Bridgend benefit you?
						</h2>
						{/* <p className="text-sm">
							Here are a few reasons why our Wrexham accountants
							could be the game changer for you:
						</p> */}
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-primary inline-flex" />
						</div>
					</div>
					<div className="flex max-md:flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
								<Image src={Tax} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Tax management
								</h2>
								<p className="leading-relaxed text-base">
									We will manage the entire tax compliance
									process for you, ensuring that all your
									returns are filed correctly and in good
									time. Thus, we will reduce the likelihood of
									fines and penalties while increasing tax
									effectiveness.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Financial guidance
								</h2>
								<p className="leading-relaxed text-base">
									Making financial decisions is crucial for
									enhancing business growth. Our chartered
									accountants in Bridgend will offer valuable
									insight into your fiscal well-being,
									enabling you to make informed decisions on
									investment, funding, and expansion plans.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Time-saving
								</h2>
								<p className="leading-relaxed text-base">
									You can save your time and resources through
									outsourcing of accounting tasks. We are
									dedicated to helping in bookkeeping,
									payroll, and cash flow management, which can
									help you concentrate on essential things in
									your business.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Peace of mind
								</h2>
								<p className="leading-relaxed text-base">
									Knowing your numbers well can help you make
									confident financial decisions. We ensure
									that you are on top of things by giving you
									constant updates and reaching out to you.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Chat with expert accountants Bridgend
						</h2>
						<p className="mt-4 text-md ">
							When partnering with chartered accountants in
							Bridgend, you will not only manage your finances but
							also tap into a financial partner who is interested
							in ensuring that your business succeeds.
						</p>
						<Link href={"/contact-us"}>
							<button className="drop-shadow-md transition-all  mt-4 inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  ">
								{" "}
								Get a Quote{" "}
							</button>
						</Link>
					</div>
				</div>
			</section>

			<section className="hidden">
				<p>
				Expert Services by Accountants Bridgend
Our Bridgend accountants offer a wide range of services tailored to meet the unique needs of businesses in the area. Whether you are a small start-up or an established enterprise, our team provides comprehensive solutions to ensure your financial health.
Bookkeeping and Accounting
Accurate bookkeeping is the backbone of any successful business. Our accountant Bridgend team ensures your books are maintained with precision, allowing you to have clear insights into your financial status. We handle everything from day-to-day transactions to preparing detailed financial reports, ensuring compliance with all regulatory standards.
Tax Planning and Compliance
Tax regulations can be complex and ever-changing. Our accountants in Bridgend are well-versed in the latest tax laws and can help you navigate these complexities. We provide proactive tax planning strategies to minimize your tax liabilities and ensure all returns are filed accurately and on time, reducing the risk of penalties.
Payroll Services
Managing payroll can be time-consuming and error-prone. Our payroll services in Bridgend ensure your employees are paid accurately and on time. We handle all aspects of payroll management, from calculating wages to filing payroll taxes, allowing you to focus on growing your business.
Financial Advisory
Our Bridgend accountants offer strategic financial advice to help you make informed decisions. Whether you need guidance on budgeting, forecasting, or investment opportunities, our team provides valuable insights to support your business goals. We work closely with you to develop customized financial strategies that drive growth and profitability.
Auditing Services
For businesses requiring auditing, our accountant Bridgend team delivers thorough and objective audits. We assess your financial statements for accuracy and compliance, providing you with reliable information to make sound business decisions. Our audits help identify areas for improvement and ensure transparency for stakeholders.




	
				</p>
			</section>
		</main>
	);
}
