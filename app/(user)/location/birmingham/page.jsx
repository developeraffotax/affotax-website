import Link from "next/link";
import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, } from "@/public/assets/birmingham";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";
import EmailPhone from "@/components/Home/Subpages/EmailPhone";

export const metadata = {
	title: "Online Accountants in Birmingham | Boost Your Finances",
	description: "Boost your finances with our online accountants in Birmingham. Get expert advice & cheap accounting services from our Birmingham accountants to reach success.",
	metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/location/birmingham`, },
	keywords: ['accountants in Birmingham']
};

export default function Birmingham() {
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
								in Birmingham
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								{" "}
								Are you looking for online accountants in
								Birmingham? We are an online accountancy firm,
								providing our services in Birmingham and all
								over the UK. Although we are based in London, we
								ensure our presence all over the UK. Affotax’s
								expert accountants know the ins and outs of the
								Birmingham business hub.
								<br /> <br />
								That being said, who's got time (or frankly, the
								patience) to manage accounts and tax forms while
								keeping pace with the Birmingham business hub?
								Well, our Birmingham accountants provide online
								accountancy and tax filing services that are as
								sweet as the chocolates at Cadbury World.
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
							Why choose our accountants in Birmingham?
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
									alt="birmingham icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Reliable accountants
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Your finances are in safe hands; our
									chartered accountants in Birmingham hold the
									highest qualifications and ensure compliance
									with the UK government. We understand the
									complex world of HMRC and Companies House,
									so we make sure you comply with the UK laws.
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
									alt="birmingham icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Customised solutions
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									As our customer, you are our first priority
									and that’s why we offer customised solutions
									made specifically for your business to grow.
									We first try to understand your needs and
									come up with a solution that would make you
									and your business shine bright like a
									diamond.
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
									alt="birmingham icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									No more paperwork
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									In this digital world, managing the
									paperwork can feel like screaming out loud
									in the library of Birmingham. Inappropriate,
									right? We embrace the digital world so you
									can manage your accounts and tax affairs
									from the comfort of your desk (or even your
									favourite canal-side cafe!).
								</h4>
							</div>
						</li>
						<li className="flex-start group relative flex lg:flex-col">
							<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
								<Image
									src={icon4}
									alt="birmingham icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Affordable prices
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our Birmingham accountants provide their
									service at a transparent and affordable
									price. With you in our mind, we understand
									your specific requirements and provide you
									with a reasonable price, because we want you
									to spend less on accounting services and
									more on your business.
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
							Our Birmingham accountants can provide you:
						</h2>
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-primary inline-flex" />
						</div>
					</div>
					<div className="flex max-md:flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
								<Image src={icon5} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Birmingham expertise
								</h2>
								<p className="leading-relaxed text-base">
									Our accountants in Birmingham understand the
									local business market and can provide you
									with customised services that can fulfil
									your business requirements. Talk to us
									today!
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon6} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Clear communication
								</h2>
								<p className="leading-relaxed text-base">
									Our Birmingham accountants speak in plain
									English, not accounting jargon. We are
									always keeping you informed and helping you
									understand what's happening with your
									finances.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon7} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Focus on growth
								</h2>
								<p className="leading-relaxed text-base">
									We don't just file taxes; we help you
									strategise for maximum tax efficiency and
									long-term financial success, because your
									growth as our client is our first priority.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon8} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Technology advantage
								</h2>
								<p className="leading-relaxed text-base">
									We use modern tools to make the process
									simpler and ensure accuracy while saving
									time. Some of the tools include Quickbooks,
									Xero, Capium, KAP accounting, and Waveup,
									etc.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Ready to chat and ditch the tax-time scramble?
						</h2>
						<p className="mt-4 text-md ">
							Talk to one of our expert Birmingham accountants, as
							we offer a free consultation to discuss your
							business requirements and how we can help you. Don't
							settle for just any accountant in Birmingham, choose
							a partner who can take you to new heights.
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
				Comprehensive Accounting Services in Birmingham
Our accountants in Birmingham UK provide a full spectrum of accounting services, including:
Tax Planning and Preparation 
Navigating the complexities of tax laws can be daunting. Our Birmingham accountants specialize in tax planning and preparation, helping you minimize your tax liability and ensure compliance with all regulations.
Bookkeeping Services 
Accurate bookkeeping is the foundation of sound financial management. Our accountants in Birmingham offer meticulous bookkeeping services, ensuring that your financial records are up-to-date and accurate.
Payroll Services 
Managing payroll can be time-consuming and complex. Our accounting firms in Birmingham provide comprehensive payroll services, ensuring that your employees are paid accurately and on time.
Financial Consulting 
Strategic financial planning is key to business growth. Our Birmingham accountants offer expert financial consulting services, helping you make informed decisions that drive success.
Audit and Assurance Services 
Our team of chartered accountants in Birmingham provides thorough audit and assurance services, helping you maintain financial integrity and transparency.
Corporate Finance Services 
From mergers and acquisitions to corporate restructuring, our accounting Birmingham experts offer a wide range of corporate finance services to support your business at every stage of its lifecycle.
Business Advisory Services 
Our Birmingham accountants provide strategic business advisory services, helping you identify opportunities for growth and implement effective strategies.

Our Presence in Birmingham
While we are based in London, our reach extends across the UK, including a strong presence in Birmingham. Our accountant Birmingham team understands the local market dynamics and offers services that are tailored to the needs of Birmingham businesses.
Local Expertise, National Reach Our Birmingham accountants combine local expertise with a national perspective, providing you with insights that are both relevant and strategic. We understand the Birmingham business environment and offer services that help you navigate its unique challenges.
Accessible and Approachable We pride ourselves on being accessible and approachable. Our accountants Birmingham team is always available to answer your questions and provide the support you need. We communicate in plain English, making complex financial matters easy to understand.


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

                    <Link href={'/location/accountants-in-nottingham'}>
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
                            <span className="title-font font-medium"> Accountants in Nottingham</span>
                        </div>
                    </li></Link>

                    <Link href={'/location/accountants-in-plymouth'}>
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
                            <span className="title-font font-medium">Accountants in Plymouth</span>
                        </div>
                    </li></Link>

                    <Link href={'/location/accountants-in-coventry'}>
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
                            <span className="title-font font-medium">Accountants in Coventry</span>
                        </div>
                    </li></Link>

                    

                    <Link href={'/location/accountants-in-bradford'}>
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
                            <span className="title-font font-medium">Accountants in Bradford</span>
                        </div>
                    </li></Link>

                    

                    <Link href={'/location/accountants-in-liverpool'}>
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
                            <span className="title-font font-medium">Accountants in Liverpool</span>
                        </div>
                    </li></Link>
                    
                </ul>

            </div>

			</section>

			<TrustPilotReviews />
			<EmailPhone />
		</main>
	);
}
