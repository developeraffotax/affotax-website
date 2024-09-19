import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4 } from "@/public/assets/extra-locations";

export const metadata = {
	title: "Accountants in Sheffield | Top Sheffield Accountants",
	description:
		"Looking for accountants Sheffield? We are accountants in Sheffield ready to help you in accounts & tax filing. Chat with expert Sheffield accountants now!",
		metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/accountants-in-sheffield`, },
};

export default function Sheffield() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								Chartered Accountants in Sheffield
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								If you are looking for chartered accountants
								Sheffield, you are in the right place. We
								provide specialised accountancy services for
								companies based in Sheffield, United Kingdom.
								Our staff is focused on delivering detailed
								money-related ideas that meet or exceed
								individual customer expectations.
								<br />
								<br />
								Let our Sheffield accountants help you with
								annual accounts, corporation tax,
								self-assessment, payroll, VAT, company
								secretariat, bookkeeping, and company formation.
								Please send us a message or get a quote today!
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
							Why choose our accountants in Sheffield?
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
									Financial solutions
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Understanding that each business is
									particular makes it one of the best
									accounting firms in Sheffield. If you seek
									accounting and tax filing services, we put
									unique financial plans that suit your
									enterprise exclusively. From bookkeeping to
									tax planning, our team ensures that your
									financial affairs are managed efficiently.
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
									Tax planning
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Every company finds tax issues
									mind-boggling. In this regard, we are
									exploiting the expertise of our Sheffield
									accountants to adopt the newest tax laws and
									regulations as part and parcel of our
									coherent tax avoidance strategy. You can
									count on us to ensure your tax position is
									reviewed and your business is legal.
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
									Compliance assurance
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Your company's profitability and good name
									rely on obedience to financial laws. At our
									Sheffield accounting service, you can be
									sure your money issues are managed with
									expertise. Our team has relevant information
									on current laws to keep your enterprise
									lawful.
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
									Financial advice
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									We don't just focus on accounting; we give
									advice that can help support your company in
									the most favourable conditions. In addition,
									you can get help from our financial advisers
									Sheffield, and get valuable insight from
									them. You can take explicit steps to help
									grow your business by getting financial
									advice.
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
							What do our online Leeds accountants offer?
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
									Industry expertise
								</h2>
								<p className="leading-relaxed text-base">
									With years of experience serving businesses
									across various industries, our accountants
									Sheffield possess the skills and expertise
									to meet your specific requirements and
									opportunities. Whether you're in retail,
									hospitality, or professional services, we
									understand the unique financial dynamics of
									your sector.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Client-centric approach
								</h2>
								<p className="leading-relaxed text-base">
									One of the most important things for our
									accountancy firm is that our clients are
									satisfied with our services. Understand what
									you want from your business, and we can
									develop solutions specifically designed for
									you, exceeding what you might expect. We are
									always committed to ensuring accuracy and
									timeliness for whichever service you are
									working with us.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Technology-driven solutions
								</h2>
								<p className="leading-relaxed text-base">
									A critical aspect of efficient and accurate
									accounting services is advanced technology.
									Our experts use the most recent software and
									digital tools to make processes more
									efficient, increase accuracy, and make it
									easy to work with our customers. We use
									technology for better results, from
									cloud-based accounting platforms to
									automatic reporting systems.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Transparent pricing
								</h2>
								<p className="leading-relaxed text-base">
									We are one of the most affordable
									accountancy firms in Sheffield; when it
									comes to pricing, we always like being
									transparent and honest. One must know how
									much they spend because everyone has their
									financial requirements.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Talk to expert accountants Sheffield!
						</h2>
						<p className="mt-4 text-md ">
							Contact us today for reliable, proactive, and
							personalised financial services to learn how we can
							support your financial goals.
						</p>
						<Link href={"/contact-us"}>
							<button className="drop-shadow-md transition-all  mt-4 inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  ">
								{" "}
								Get a Quote{" "}
							</button>
						</Link>
					</div>
				</div>
				<div className="hidden">
					<p>
						Comprehensive Accountancy Services We offer a wide range
						of accountancy services to cater to the diverse needs of
						our clients in Sheffield: 1. Bookkeeping and Payroll:
						Our meticulous bookkeeping and payroll services ensure
						that your financial records are accurate and up-to-date.
						We handle everything from day-to-day transactions to
						employee salaries, allowing you to focus on growing your
						business. 2. Tax Planning and Compliance: Navigating tax
						laws can be daunting. Our experienced tax advisers in
						Sheffield are here to help you with tax planning and
						compliance, ensuring you maximize your savings while
						staying fully compliant with HMRC regulations. 3. Annual
						Accounts and Corporation Tax: Preparing annual accounts
						and corporation tax returns can be time-consuming and
						complex. Our Sheffield accountants streamline the
						process, ensuring your accounts are prepared accurately
						and submitted on time. 4. Self-Assessment Tax Returns:
						Self-assessment can be a headache for many. Let our team
						handle your self-assessment tax returns, ensuring you
						claim all eligible deductions and avoid any penalties.
						5. VAT Returns: Whether you are a small business or a
						large enterprise, we offer comprehensive VAT services,
						from registration to return filing, ensuring you meet
						all your VAT obligations. 6. Company Formation and
						Secretarial Services: Starting a new business? Our
						experts can assist with company formation and provide
						ongoing secretarial services to ensure your business
						remains compliant with all statutory requirements.
					</p>
				</div>
			</section>
		</main>
	);
}
