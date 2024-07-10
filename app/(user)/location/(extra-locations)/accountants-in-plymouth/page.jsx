import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4 } from "@/public/assets/extra-locations";

export const metadata = {
	title: "Accountants Plymouth – Accountants in Plymouth, Devon",
	description: "Looking for accountants in Plymouth, Devon? We're here! Chartered accountants Plymouth with 10+ years of expertise. Contact our Plymouth accountants now!",
};

export default function Plymouth() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
							Chartered Accountants Plymouth, Devon

							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
							Being leading accountants in Plymouth, Devon, we have an idea of the complex financial needs of businesses within this great vibrant Devon community. 
							<br />
							<br />
							We offer tailored accountancy and tax filing services to support and benefit your business, saving you time and providing the best possible financial clarity. Get a quote today, or leave a message; our accountants Plymouth responds immediately.

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
						<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
						Why choose our accountants Plymouth?

						</h1>
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
								Accountancy expertise

								</h3>
								<h4 className="mt-2 text-base text-gray-700">
								Our team is composed of professionals who bring a wealth of experience in handling any emerging complexities in modern accounting practice. We offer an all-encompassing list of services, from bookkeeping and financial analysis, to ensure your business's unique needs are met. 

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
								Personalised approach

								</h3>
								<h4 className="mt-2 text-base text-gray-700">
								We give a personalised touch to customer service since each may have diverse challenges to address. As such, we come up with strategies tailored towards satisfying particular needs for both startups and big companies, including congruent values and aspirations for both parties. 

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
								Efficiency & accuracy

								</h3>
								<h4 className="mt-2 text-base text-gray-700">
								We keep your financial records updated and accurate with our cutting-edge accounting software and thorough attention to detail. Combining the use of the latest technology and following the best practices for your accounting processes, we make it easier for you to save time and money.

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
								Tax planning

								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
								Our tax professionals are the experts who keep themselves up to date with changing tax laws and regulations to identify opportunities to minimise your tax liabilities and maximise your savings. Whether you need tax preparation, compliance, or strategic planning, we can help.

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
						<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
						What our Plymouth accountants offer

						</h1>
							<p className="text-sm">
							As the premier choice for accountants in Plymouth, we are dedicated to being your trusted partner in achieving financial success. Here's why businesses in Plymouth rely on our expertise:

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
								Local knowledge, global perspective

								</h2>
								<p className="leading-relaxed text-base">
								We offer insight into local markets in Plymouth and global industry trends that drive business growth and innovation. From being a start-up, looking to establish your presence, to being an already established enterprise looking to grow and expand, our holistic approach to financial management keeps you at the forefront of any changes.

								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
								Transparent communication

								</h2>
								<p className="leading-relaxed text-base">
								We prioritise transparent and open dialogue with our clients because communication is of great importance in any successful partnership.\nWe will inform you at each process by offering common progress reports and responding promptly to your questions or concerns raised.\nThe system allows you access your financial records online in a secure manner that promotes partnership and responsibility.

								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
								Proven track record

								</h2>
								<p className="leading-relaxed text-base">
								A record of delivery of outstanding results has made businesses in Plymouth and beyond trust and continue to have confidence in us. Our many satisfied clients speak to our professionalism, reliability, and integrity, each one highlighting our commitment to their success. When choosing your accountancy partner, rest assured that you are in good hands with us.

								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
								Continued support and guidance

								</h2>
								<p className="leading-relaxed text-base">
								We believe in long-term relationships that are built on a basis of mutual trust, integrity, and respect. That is why we offer continued support and guidance, helping you make your way through the never-ending changes in the financial environment with confidence and peace of mind. Whether you have a question, are concerned with something, or have a new opportunity on the horizon, we are always here to help.

								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h1 className=" title-font text-3xl font-semibold ">
						Talk to reliable accountants Plymouth!

						</h1>
						<p className="mt-4 text-md ">
						Here at Affotax, we provide businesses with expert and dedicated personalised service on their way to success. Contact us today for learning more about our comprehensive accountancy and tax filing services, and take the first step towards a brighter financial future.

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
					Comprehensive Accountancy Services
Our range of accountancy services in Plymouth includes:
Bookkeeping: Accurate and timely bookkeeping services to keep your financial records in order.
Financial Analysis: Detailed financial analysis to help you understand your business’s financial health and make informed decisions.
Payroll Services: Efficient payroll management to ensure your employees are paid accurately and on time.
VAT Services: Comprehensive VAT services to help you navigate the complexities of VAT registration, filing, and compliance.
Audit Services: Thorough audit services to provide you with an accurate and unbiased view of your financial position.
Business Advisory: Strategic business advisory services to help you grow and expand your business.

					</p>
				</div>
			</section>
		</main>
	);
}
