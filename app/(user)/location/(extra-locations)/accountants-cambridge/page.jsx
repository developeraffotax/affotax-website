import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4 } from "@/public/assets/extra-locations";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";
import EmailPhone from "@/components/Home/Subpages/EmailPhone";

export const metadata = {
	title: "Accountants in Cambridge UK | Top Cambridge Accountants",
	description:
		"We are reliable accountants in Cambridge UK, ready to simplify your accounting and tax filings. Let our Cambridge accountants help your business succeed!",
		metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/location/accountants-cambridge`, },
		keywords: ['accountants in Cambridge']
};

export default function Cambridge() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								Chartered Accountants in Cambridge UK
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								Finding reliable accountants in Cambridge
								doesn't have to be a headache. Here at Affotax,
								we have a full suite of accounting and tax
								filing services designed to empower people and
								businesses in the Cambridge area.
								<br /> <br /> Send us a message or get a quote;
								our Cambridge accountants respond to you
								immediately to answer your queries and concerns.
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
							Why Choose us as Your Cambridge Accountants?
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
									Client-centric approach
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									We take the time to understand your unique
									financial situation and goals. We
									concentrate on long-term relationships,
									supporting and guiding our customers all the
									time.
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
									Competitive rates & transparent pricing
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									The rates we offer for our services are
									competitive and our pricing structures are
									transparent and without any hidden fees.
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
									Accessibility & communication
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our accountants Cambridge are easily
									accessible. We shall keep communication
									channels open with you so that you can
									easily reach us at any time.
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
									Technology-driven solutions
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									We leverage the latest accounting software
									and technologies for the effective and
									secure management of your financial data.
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
							What our accountants Cambridge offer
						</h2>

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
									Local expertise
								</h2>
								<p className="leading-relaxed text-base">
									Our qualified accountants have an excellent
									understanding of the local Cambridge
									business environment. We will ensure that
									you are kept updated with the most current
									tax regulations and financial trends that
									influence your business within Cambridge.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Streamlined accounting solutions
								</h2>
								<p className="leading-relaxed text-base">
									We pride ourselves on creating your
									accounting experience as smooth as possible.
									Whether you are merely an individual
									business proprietor, a budding business
									concern or an already existing business
									entity we ensure to provide services that
									address all your particular requirements.
									Our services range from keeping records of
									accounts and handling salaries of employees,
									to the act of preparing yearly tax returns
									and planning for future financial events.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Tax efficiency & peace of mind
								</h2>
								<p className="leading-relaxed text-base">
									Our accountants in Cambridge have extensive
									experience with all the nuances of UK tax
									law. We will work fast and furious to reduce
									your tax burden and ensure that all returns
									are correct and submitted on time.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Proactive financial planning
								</h2>
								<p className="leading-relaxed text-base">
									Beyond tax filing, we're committed to
									helping you meet your long-term financial
									goals. Our Cambridge accountants can offer
									insightful financial planning advice to give
									you a knowledgeable view about your business
									and personal finances.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Talk to expert accountants Cambridge!
						</h2>
						<p className="mt-4 text-md ">
							Ready to be in charge of your finances with a team
							of experienced and dependable accountants by your
							side? Contact Affotax for a free consultation today!
						</p>
						<Link href={"/contact-us"}>
							<button className="drop-shadow-md transition-all  mt-4 inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  ">
								{" "}
								Get a Quote{" "}
							</button>
						</Link>
					</div>
				</div>

				<div>
					<p className="hidden">
						Comprehensive Accounting Services in Cambridge At
						Affotax, we offer a wide range of accounting services to
						cater to the diverse needs of our clients. Whether you
						are a small business owner, a large corporation, or an
						individual seeking personal tax advice, our accountants
						in Cambridge have the expertise to assist you. Our
						services include but are not limited to: Bookkeeping and
						Financial Reporting Keeping accurate and up-to-date
						financial records Preparing comprehensive financial
						reports Ensuring compliance with accounting standards
						Tax Preparation and Planning Preparing and filing tax
						returns for individuals and businesses Providing
						strategic tax planning to minimize liabilities Advising
						on tax-efficient strategies and investments Payroll
						Services Managing payroll processing and compliance
						Handling employee benefits and deductions Ensuring
						timely and accurate salary payments Audit and Assurance
						Conducting thorough financial audits Providing assurance
						services to enhance credibility Identifying areas for
						improvement in financial management Financial Advisory
						and Planning Offering personalized financial planning
						advice Assisting with budgeting and cash flow management
						Advising on investments and retirement planning Business
						Advisory Services Supporting business start-ups with
						essential financial guidance Assisting with business
						growth strategies and planning Providing expert advice
						on mergers and acquisitions
					</p>
				</div>
			</section>

			<TrustPilotReviews />
						<EmailPhone />
		</main>
	);
}
