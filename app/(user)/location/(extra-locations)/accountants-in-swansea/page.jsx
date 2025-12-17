import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4, } from "@/public/assets/extra-locations";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";
import EmailPhone from "@/components/Home/Subpages/EmailPhone";

export const metadata = {
	title: "Affordable Accountants in Swansea | Top Accountants Swansea",
	description:
		"Grow your business with our accountants in Swansea. Manage your accounting and tax filing expertly with our accountants Swansea.",
		metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/location/accountants-in-swansea`, },
		keywords: ['accountants in swansea']
};

export default function Swansea() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								Affordable Accountants in Swansea
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								Swansea is a fabulous place for business, but in
								2021-22, businesses fell by 4.4% from 7,735 to
								7,395, implying significant entrance and exit
								patterns. That is why our chartered accountants
								in Swansea are here to reverse that decline. Our
								Swansea accountants understand that managing a
								business can be challenging, especially when
								keeping up with your business finances, and the
								HMRC’s changing tax regulations.
								<br /> <br />
								Affotax is one of the leading accountancy firms
								in Swansea, providing simple online experience.
								Our expert Swansea accountants have the local
								expertise in the Swansea business world,
								empowering businesses like yours to prosper. Get
								a quote today!
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
							Here's what sets our accountants in Swansea apart:
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
									Efficiency
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									We have the most efficient yet affordable
									accountants in Swansea that can save you
									from cumbersome paperwork and endless visits
									to the tax office in Swansea. You can access
									your financial data, communicate with your
									dedicated Swansea accountant – all from the
									comfort of wherever you want to be.
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
									Custom solutions
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our accountants in Swansea understand that
									businesses are different in their industry,
									services, target market, values, size and
									structure. That is why it is also important
									to understand businesses’ specific
									requirements and situations; that is
									precisely what our Swansea accountants do
									before presenting a solution.
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
									Peace of mind
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Let our chartered accountants in Swansea
									help you comply with HMRC rules and
									regulations. Our expert team of Swansea
									accountants stays informed with the latest
									tax laws and filing requirements. We help
									your business follow all the HMRC
									regulations, minimise tax liabilities, and
									avoid penalties.
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
									Financial insights
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									Our expert accountants in Swansea are your
									valuable partners in your financial journey
									and growth. We will provide you with
									insightful reports, identify money-saving
									opportunities, and offer guidance to support
									your business’s success. Please send us a
									message, and our Swansea accounts will
									respond immediately.
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
							Why choose our Swansea accountants?
						</h2>
						<p className="text-sm">
							Finding reliable accountants in Swansea can make a
							big difference to your company. Below are a few
							reasons you should partner with us:
						</p>
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
									Swansea businesses
								</h2>
								<p className="leading-relaxed text-base">
									Our team of Swansea accountants apply their
									in-depth local business landscape knowledge
									to customising these services for individual
									businesses in Swansea, ensuring that you
									will get both Swansea-specific expertise, as
									well as our national reach. Get a quote
									today, and our accountants in Swansea will
									respond immediately.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Online experience
								</h2>
								<p className="leading-relaxed text-base">
									It is a simple online experience, which
									means you can work with your Swansea
									accountant from any part of Swansea City
									using our easy-to-use online platform. On
									this website, you can communicate, share
									documents, access financial data, and
									cooperate quickly with your accountants in
									Swansea.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Affordability
								</h2>
								<p className="leading-relaxed text-base">
									The accountancy services we provide in
									Swansea are competitively priced and
									transparent. There are no concealed charges
									since our accountants in Swansea offer you
									fixed-fee plans.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Dedicated support
								</h2>
								<p className="leading-relaxed text-base">
									Our friendly and professional team of
									Swansea accountants is dedicated to helping
									our clients succeed. We are available
									throughout the year for answers, motivation,
									or any other support.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Ready to chat?
						</h2>
						<p className="mt-4 text-md ">
							Affotax's chartered accountants in Swansea take the
							accounting and tax filing burden off your shoulders.
							Contact us today and see how our Swansea accountants
							can help you achieve financial clarity and move your
							business to a new level.
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
				Comprehensive Accountancy Services in Swansea
Our accountants in Swansea offer a wide range of services to meet all your financial needs. Whether you are a small business owner, a large corporation, or an individual seeking personal tax advice, our Swansea accountants have the expertise to assist you. Here are some of the key services we provide:
Accounts
Our accountants in Swansea ensure that your financial statements are prepared accurately and on time. We handle all aspects of financial accounting, including the preparation of balance sheets, profit and loss statements, and cash flow statements. Our meticulous approach helps you maintain a clear and precise financial overview of your business.
Corporation Tax
Navigating corporate tax laws can be complex. Our Swansea accountants specialize in corporation tax planning and compliance, ensuring your business meets all statutory requirements while optimizing your tax position. We prepare and file your corporation tax returns, helping you maximize deductions and credits.
Self Assessment
For individuals and sole traders, self-assessment can be a daunting task. Our expert accountants in Swansea take the stress out of self-assessment tax returns. We accurately prepare and file your tax returns, ensuring you meet HMRC deadlines and avoid penalties.
Company Secretarial
Maintaining statutory records and ensuring compliance with company law is essential for every business. Our Swansea accountants offer comprehensive company secretarial services, including the preparation of minutes, filing of annual returns, and maintaining company registers.
Payroll
Managing payroll can be time-consuming and complex. Our payroll services in Swansea ensure your employees are paid accurately and on time. We handle all aspects of payroll processing, including payslips, tax calculations, and submissions to HMRC.
VAT
Our accountants in Swansea provide expert advice on VAT registration, planning, and compliance. We assist with VAT return preparation and submission, ensuring you stay compliant with all VAT regulations and take advantage of any available reliefs.
Bookkeeping
Accurate bookkeeping is the foundation of any successful business. Our Swansea accountants offer reliable bookkeeping services, maintaining your financial records meticulously. We manage your day-to-day transactions, ensuring your books are always up to date.
Company Formation
Starting a new business in Swansea? Our accountants provide comprehensive company formation services, guiding you through the entire process. We help with business structure advice, registration with Companies House, and setting up all necessary accounts.



				</p>
			</section>


			<TrustPilotReviews />
						<EmailPhone />
		</main>
	);
}
