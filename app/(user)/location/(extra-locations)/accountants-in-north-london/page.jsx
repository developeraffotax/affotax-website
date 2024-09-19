import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4 } from "@/public/assets/extra-locations";

export const metadata = {
	title: "Accountants in North London: Reliable Financial Services",
	description: "Looking for reliable accountants in North London? We are the top North London accountants offering  value for our client's money in the services we offer.",
	metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/accountants-in-north-london`, },
};

export default function NorthLondon() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								{" "}
								Online Chartered <br /> Accountants in North
								London
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								Hats off to you for running a business in the
								busy North London Business center. We understand
								how managing your business finances can be
								challenging for you. Our online accountants in
								North London take the stress out of your life by
								managing your accounting and tax filing; so you
								can stay compliant with HMRC and Companies House
								regulations.
								<br />
								Our chartered accountants in North London help
								you in personal, business, and corporate taxes,
								VAT returns, self assessment tax returns, and
								much more, including management, business
								processing and tax advisory, reporting, capital
								fundraising, etc. Get a quote today, or send our
								North London accountants and they will
								immediately get back to you.
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
							Why choose our North London accountants?
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
									Online services
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									We at Affotax offer a reliable and expert
									online platform with expert accounting
									services at an affordable price. Our
									accountants in North London manage your
									accounts and submit your tax filings.
									Chasing paperworks is outdated or seeking an
									accountant late at night – now you can
									access everything you need and whenever you
									need from your comfort.
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
									Expertise
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our North London accountants have 10+ years
									of experience in providing tax filing and
									accounting services all over the UK. We have
									helped many businesses in retail,
									construction, or in the creative sector to
									grow financially, and as a UK business in
									North London. We understand the challenges
									you face in your North London business, so
									get a quote.
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
									Let’s grow
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our reliable accountants in North London are
									your partner in success – helping and
									growing with you. We provide insightful
									financial analysis, reports and tax planning
									strategies to help you optimize your cash
									flow and increase your profits. We believe
									that cash flow is still the king and can
									help you survive during a financial chaos.
									Let us guide you today!
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
									Affordable prices
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									Our prices are fair and transparent, because
									our motto is helping you spend less on
									accounting services and more on your
									business’s growth. We offer a clear
									breakdown of our services and their costs,
									so you understand what you are paying for.
									This way, our North London accountants can
									help you make informed decisions about your
									accounting needs.
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
							Looking for accountants in North London?
						</h2>
						<p>
							Here are a few reasons why we can be the
							game-changer for your North London accounting needs:
						</p>
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-primary inline-flex" />
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
								<Image src={Tax} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									High response rate
								</h2>
								<p className="leading-relaxed text-base">
									Our North London accountants take a
									proactive approach without waiting for the
									year-end. We stay vigilant, and keep you
									up-to-date on any tax law changes or
									financial opportunities that could grow your
									business.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Clarity & communication
								</h2>
								<p className="leading-relaxed text-base">
									A clear and concise communication is the key
									for obtaining desired outcomes. We don’t
									leave our clients in the dark about their
									finances and instead, simplify everything
									for your better understanding.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Efficient technology
								</h2>
								<p className="leading-relaxed text-base">
									Our accountants in North London leverage the
									most updated and advanced accounting
									software available to get accurate data.
									This way we can help you save your time and
									money while efficiently managing your
									accounts.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									24/7 availability
								</h2>
								<p className="leading-relaxed text-base">
									Our dedicated accountants are always
									available to support you on your financial
									journey; offering flexible consultation
									options. Send us a message today to address
									any questions or concerns you could have.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Ready to chat with the UK's top chartered
							accountants?
						</h2>
						<p className="mt-4 text-md ">
							Send us a message today, or get a quote; our expert
							chartered accountants in the UK are ready to manage
							your accounting and tax filings with expertise.
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
				Comprehensive Accounting Services in North London
Our team of expert accountants in North London is committed to providing top-notch financial services to businesses and individuals alike. With a deep understanding of the unique economic landscape of North London, we offer a range of services tailored to meet your specific needs. Whether you are a small business owner, a freelancer, or a large corporation, our services are designed to help you achieve your financial goals.
Tailored Financial Solutions
One of the key strengths of our North London accountants is the ability to provide bespoke financial solutions. We understand that each business has its own unique challenges and opportunities. Therefore, we offer tailored services that cater to your specific requirements. From bookkeeping and payroll management to tax planning and financial forecasting, our accountants work closely with you to ensure that your financial needs are met effectively.
Efficient Bookkeeping Services
Accurate and timely bookkeeping is essential for the smooth operation of any business. Our North London accountants utilize advanced accounting software to manage your financial records efficiently. By keeping your books up-to-date, we provide you with a clear picture of your financial health, enabling you to make informed business decisions. Our bookkeeping services are designed to save you time and reduce the administrative burden, so you can concentrate on growing your business.
Strategic Business Advisory
Our accountants in North London offer strategic business advisory services to help you achieve long-term success. We provide insightful financial analysis and reporting, helping you identify opportunities for growth and areas for improvement. Our goal is to empower you with the knowledge and tools needed to drive your business forward. Whether you are looking to expand your operations, secure funding, or improve profitability, our expert advisors are here to guide you every step of the way.
Payroll Management
Managing payroll can be a complex and time-consuming task. Our North London accountants offer comprehensive payroll services to ensure that your employees are paid accurately and on time. We handle all aspects of payroll management, including tax calculations, deductions, and compliance with HMRC regulations. By outsourcing your payroll to us, you can reduce the risk of errors and free up valuable time to focus on your core business activities.
Client-Focused Approach
Our success as accountants in North London is built on strong relationships with our clients. We take the time to understand your individual needs and provide personalised service that exceeds your expectations. Our team is dedicated to your success, offering ongoing support and advice to help you navigate the financial challenges of running a business.

				</p>
			</section>
		</main>
	);
}
