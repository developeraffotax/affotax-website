import Link from "next/link";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10 } from "@/public/assets/england";
import { notFound } from "next/navigation";





export const metadata = {
	title: "Get in Touch with Expert Accountants in England Today!",
	description:
		"Looking for reliable England-based accountants? We are a team of expert online accountants in England providing tax filing & accounting services in the UK.",
		metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/location/england`, },
		keywords: ['Accountants in England']
};

export default function England() {


	

	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								{" "}
								Online Accountant <br /> Services | Accountants
								in England
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								Managing a business in England is a proper royal
								adventure, but staying on top of your books? Not
								always a cup of tea. Here at Affotax, we are a
								team of qualified accountants who specialise in
								providing accounting and tax filing services.{" "}
								<br /> <br />
								Whether you are a one-man team or a professional
								business, we can help walk you through your
								financial challenges, ensuring your journey is
								as sweet as an English cup of tea
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
							What can our accountants in England do for you?
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
									alt="england icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Tax filings
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Self-assessment, corporate tax, VAT - we
									handle everything efficiently to ensure your
									compliance and satisfaction with HMRC,
									leaving you worry-free and confident.
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
									alt="england icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Bookkeeping
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									No more late nights wrestling with
									spreadsheets. We will keep your books in
									top-top condition and give you a clear
									picture of your finances.
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
									alt="england icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Accounting Software
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our accountants in England specialise in
									popular platforms like Xero, QBO, Capium,
									WaveUp, Free Agent, KAP Accounting, Nomi,
									Quick File, etc, making everything
									user-friendly.
								</h4>
							</div>
						</li>
						<li className="flex-start group relative flex lg:flex-col">
							<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
								<Image
									src={icon4}
									alt="england icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Smooth Online Services
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Forget the jargon and stress of dealing with
									street auditors. We offer a hassle-free
									online service that allows you to focus on
									growing your amazing business.
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
							Why choose our accountants in England?
						</h2>
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-primary inline-flex" />
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
								<Image src={icon5} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Competitive Pricing
								</h2>
								<p className="leading-relaxed text-base">
									Experience competitive pricing with no
									deposit required, offering transparent rates
									that are kind to your wallet. Our commitment
									to affordability ensures you get the best
									value without any hidden fees or upfront
									costs.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon6} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Always contactable
								</h2>
								<p className="leading-relaxed text-base">
									Our friendly team is just a phone call or
									email away. Need assistance? Reach out
									anytime, and we’ll be there to help. Your
									satisfaction is our priority, and we're
									dedicated to providing prompt, reliable
									support whenever you need it
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon7} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Peace of mind
								</h2>
								<p className="leading-relaxed text-base">
									Experience peace of mind as we take the
									burden off your shoulders, ensuring you can
									sleep soundly knowing your finances are in
									safe hands. Trust us to manage your finances
									securely and efficiently, giving you the
									freedom to focus on what truly matters
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon8} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Experience
								</h2>
								<p className="leading-relaxed text-base">
									Our England accountants have years of
									experience in providing accounting and tax
									filing services in the UK, ensuring
									compliance with UK regulations, maximizing
									tax efficiency, and offering personalized
									financial advice to meet your specific needs
									and goals.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon9} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Fully accredited
								</h2>
								<p className="leading-relaxed text-base">
									As authorised accountants and registered
									agents with HMRC and Companies House, we
									offer reliable and customised accounting
									services. Our commitment to excellence
									remains steadfast, and we strive to deliver
									top-notch service and support to all our
									clients.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon10} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Support
								</h2>
								<p className="leading-relaxed text-base">
									Our expert accountants offer free live chat
									and email support to guide you every step of
									the way. Whether you're facing HMRC notices
									or need help with compliance, we'll take
									care of the declaration process for you in
									full compliance with UK regulations.
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
				Comprehensive Accounting Services
Tax Services: Accounting firms in England excel in managing complex tax requirements, ensuring compliance with HMRC regulations. They offer services such as corporate tax planning, VAT returns, self-assessment tax filings, and more. These firms are adept at navigating the intricacies of the UK tax system, helping businesses minimize liabilities and maximize savings.
Payroll Management: Managing payroll can be a time-consuming task. Accounting firms in England offer comprehensive payroll services, handling everything from salary calculations and tax deductions to pension contributions and employee benefits. This ensures employees are paid accurately and on time, and businesses remain compliant with employment laws.
Financial Reporting: Regular financial reporting is essential for understanding a business's financial position. Accounting firms in England prepare detailed financial statements, including profit and loss accounts, balance sheets, and cash flow statements. These reports provide valuable insights, helping businesses make strategic decisions.
Audit and Assurance: For businesses requiring audits, accounting firms in England provide thorough audit services to ensure compliance with statutory requirements. These audits also offer assurance to stakeholders that the financial statements are accurate and reliable.
Advisory Services: Beyond routine accounting, many firms offer advisory services to help businesses grow. This includes strategic planning, business restructuring, and financial forecasting. Advisors work closely with clients to understand their goals and provide tailored solutions.


				</p>
			</section>








			
			<section className=" bg-slate-50 text-gray-600 body-font w-full drop-shadow-md  py-8 ">
            <div className="container px-5 py-12 mx-auto">

                <div className="text-center mb-8">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
					Our England Accountants Serve These Locations
                    </h2>
                    <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
                </div>
                </div>

                <ul className="mx-auto items-center text-center">

                    <Link href={'/location/accountants-in-leeds'}>
                    <li className="p-4 bg-white rounded-lg inline-block m-4 text-2xl drop-shadow-md">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                className="text-primary w-6 h-6 mr-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="title-font font-medium"> Accountants in Leeds</span>
                        </div>
                    </li></Link>

                    <Link href={'/location/accountants-in-sheffield'}>
                    <li className="p-4 bg-white rounded-lg inline-block m-4 text-2xl drop-shadow-md">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                className="text-primary w-6 h-6 mr-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="title-font font-medium">Accountants in Sheffield</span>
                        </div>
                    </li></Link>

                    <Link href={'/location/accountants-in-newcastle'}>
                    <li className="p-4 bg-white rounded-lg inline-block m-4 text-2xl drop-shadow-md">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                className="text-primary w-6 h-6 mr-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="title-font font-medium">Accountants in Newcastle</span>
                        </div>
                    </li></Link>

                    

                    <Link href={'/location/accountants-in-leicester'}>
                    <li className="p-4 bg-white rounded-lg inline-block m-4 text-2xl drop-shadow-md">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                className="text-primary w-6 h-6 mr-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="title-font font-medium">Accountants in Leicester</span>
                        </div>
                    </li></Link>

                    

                    <Link href={'/location/accountants-in-bristol'}>
                    <li className="p-4 bg-white rounded-lg inline-block m-4 text-2xl drop-shadow-md">
                        <div className="flex items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                className="text-primary w-6 h-6 mr-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="title-font font-medium">Accountants in Bristol</span>
                        </div>
                    </li></Link>
                    
                </ul>

            </div>

			</section>
		</main>
	);
}
