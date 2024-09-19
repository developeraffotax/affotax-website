import Link from "next/link";


import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10 } from "@/public/assets/manchester";

export const metadata = {
	title: "Talk to Our Online Chartered Accountants in Manchester",
	description: "Looking for Manchester accountants? Our chartered accountants in Manchester provide accounting and tax filing services at an affordable price in the UK.",
	metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/manchester`, },
};

export default function Manchester() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								{" "}
								Online Chartered Accountants in Manchester
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								{" "}
								At Affotax, an expert accountancy company, we
								are a team of qualified chartered accountants
								providing services in the North West -
								Manchester. We understand what it's like to run
								a business in the UK; chasing dreams and seizing
								opportunities cannot be harder. However, having
								us by your side, you can focus on your
								businesses' growth while we handle the
								nitty-gritty.
								<br /> <br />
								Manage your accounts from anywhere in the world,
								our accountants in Manchester are dedicated to
								your financial prosperity. Put your trust in
								Affotax; let us handle your accounts and tax
								filing, and we will help you score a goal.
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

						<div className=" w-[40%]  max-lg:w-full  max-lg:mb-4 scale-125 ">
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
							Why choose our accountants in Manchester?
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
									alt="manchester icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Customised solution
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									At Affotax, we believe one size does not fit
									all. Our priority is understanding what your
									business requires and crafting customised
									solutions that align with your business
									requirements. Whether you are a start-up or
									an established company, our chartered
									accountants in Manchester have got the
									expertise to provide a customised solution
									for your unique business needs.
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
									alt="manchester icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Transparency & integrity
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Transparency and integrity are at the core
									of everything we do; put your trust in
									Affotax. We are delighted to provide honest
									advice and transparent communication
									throughout the process. Our Manchester
									accountants always provide you with insights
									on where you stand, providing peace of mind
									and confidence in your financial decisions.
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
									alt="manchester icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Responsive support
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									We understand how important time is to you
									as a business owner. That is why we are
									proud of ourselves for being responsive and
									accessible whenever you want. Whether you
									need an answer to a question, or have an
									urgent issue or concern, our dedicated
									chartered accountants in Manchester are just
									a click away to provide expertise solutions.
								</h4>
							</div>
						</li>
						<li className="flex-start group relative flex lg:flex-col">
							<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
								<Image
									src={icon4}
									alt="manchester icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Value for money
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									We at Affotax understand how businesses can
									be expensive, that is why we provide
									exceptional value to your money. Our prices
									are affordable while our services are
									outstanding, ensuring you get the best
									possible return on your investment. With our
									online chartered accountants in Manchester,
									you get more bang for the buck, so why wait?
									Get a quote now!
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
							What can our Manchester accountants do for you?
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
									Tax Advisory and Planning
								</h2>
								<p className="leading-relaxed text-base">
									Our tax advisors in Manchester specialize in
									strategic tax planning to minimize your
									liabilities and maximize your savings. We
									stay updated with the latest tax laws to
									provide you with accurate advice and
									efficient tax solutions.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon6} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Bookkeeping and VAT Returns
								</h2>
								<p className="leading-relaxed text-base">
									Our Manchester accountants ensure that your
									bookkeeping is precise and up-to-date,
									allowing you to focus on your core business
									activities. We also handle VAT returns
									meticulously, ensuring timely submissions
									and compliance with HMRC regulations.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon7} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Financial Reporting and Analysis
								</h2>
								<p className="leading-relaxed text-base">
									We offer detailed financial reporting and
									analysis to give you a clear picture of your
									company's financial status. Our chartered
									accountants in Manchester convert complex
									data into actionable insights that drive
									informed decision-making.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon8} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Business Planning and Cash Flow Management
								</h2>
								<p className="leading-relaxed text-base">
									Effective business planning and cash flow
									management are critical for sustaining
									growth. Our Manchester accountants work with
									you to create robust business plans and
									manage your cash flow efficiently, helping
									you navigate through financial challenges.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon9} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Payroll Services
								</h2>
								<p className="leading-relaxed text-base">
									Managing payroll can be a complex and
									time-consuming task. Our accounting firms in
									Manchester provide comprehensive payroll
									services, ensuring your employees are paid
									accurately and on time while complying with
									all statutory requirements.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon10} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Audit and Assurance
								</h2>
								<p className="leading-relaxed text-base">
									Our chartered accountants in Manchester
									offer audit and assurance services to give
									you confidence in your financial statements.
									We provide an objective assessment of your
									financial records, enhancing credibility
									with stakeholders.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Contact with expert Accountants in Manchester
						</h2>
						<p className="mt-4 text-md ">
							For further assistance or to schedule a
							consultation, reach out to our team of Manchester
							accountants. We look forward to partnering with you
							to achieve your financial goals.
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
				

				</p>
			</section>









			<section className=" bg-slate-50 text-gray-600 body-font w-full drop-shadow-md  py-8 ">
            <div className="container px-5 py-12 mx-auto">

                <div className="text-center mb-8">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
					Our  Accountants Serve These Locations



                    </h2>
                    <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
                </div>
                </div>

                <ul className="mx-auto items-center text-center">

                    <Link href={'/location/accountants-in-portsmouth'}>
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
                            <span className="title-font font-medium"> Accountants in Portsmouth</span>
                        </div>
                    </li></Link>

                    <Link href={'/location/accountants-in-southampton'}>
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
                            <span className="title-font font-medium">Accountants in Southampton</span>
                        </div>
                    </li></Link>

                    <Link href={'/location/accountants-oxford'}>
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
                            <span className="title-font font-medium">Accountants in Oxford</span>
                        </div>
                    </li></Link>

                    

                    <Link href={'/location/accountants-cambridge'}>
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
                            <span className="title-font font-medium">Accountants in Cambridge</span>
                        </div>
                    </li></Link>

                    

                    <Link href={'/location/accountants-in-norwich'}>
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
                            <span className="title-font font-medium">Accountants in Norwich</span>
                        </div>
                    </li></Link>
                    
                </ul>

            </div>

			</section>


		</main>
	);
}
