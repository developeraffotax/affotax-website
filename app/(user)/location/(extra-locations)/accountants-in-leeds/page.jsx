import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4 } from "@/public/assets/extra-locations";

export const metadata = {
	title: "Chartered Accountants Leeds | Top Accountants in Leeds",
	description: "Looking for accountants Leeds? You're a click away from our Leeds accountants. Manage your accounting & tax filing with our expert accountants in Leeds.",
};

export default function Leeds() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								Chartered Accountants Leeds | Top Accountants in
								Leeds
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								Do you have a business in Leeds, or think of
								starting one? What a fantastic idea that is.
								However, managing your team operations,
								accounting, and tax filing, along with staying
								compliant with HMRC and Companies House rules
								and regulations, can become challenging. That is
								precisely why we exist.
								<br />
								<br />
								At Affotax, we are a qualified team of chartered
								accountants in Leeds dedicated to helping
								businesses grow with a clear financial vision.
								Our expert accountants in Leeds provide simple
								online accountancy and tax filing services all
								over the UK, having local expertise and national
								reach.
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
							Why choose our accountants in Leeds?
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
									Expertise
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Affotax is one of the best accountancy firms
									in Leeds, with 10+ years of experience
									supporting businesses all over the UK. Our
									experts keep themselves up-to-date on the
									latest tax regulations and accounting
									practices, helping you adhere to HMRC.
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
									Accounting software
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our Leeds accountants use the most advanced
									online accounting software, such as
									QuickBooks, Xero, Wave, Sage, FreshBooks,
									and many more. This also helps us simplify
									record-keeping and collaborations, allowing
									you to be informed and in control.
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
									Customised solutions
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Let our chartered accountants in Leeds
									analyse your business and its unique needs
									to craft a personalised accountancy package
									that can help your business flourish. Please
									send us a message or get a quote, and let
									our Leeds accountants do the rest for you.
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
									24/7 support
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									You get active support anytime and anywhere
									from our chartered accountants Leeds. We are
									your reliable financial partner, offering
									advice and insights to help you make expert
									financial decisions. So why wait? Get a
									quote, and let's help each other grow!
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
							What do our online Leeds accountants offer?
						</h1>

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
									Flexibility
								</h2>
								<p className="leading-relaxed text-base">
									Our expert accountants in Leeds offer
									flexibility so you can manage your finances
									from the comfort of your home or office. Our
									website lets you quickly contact our Leeds
									accountants, share documents, communicate in
									real time, and access your financial data
									24/7.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Affordable
								</h2>
								<p className="leading-relaxed text-base">
									We are not like the traditional accounting
									firms in Leeds; our online accountants offer
									competitive rates, so you can get
									exceptional service for your money. Our
									motto is "making tax affordable" because we
									want you to spend less on accounting
									services and more on your business.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Scalability
								</h2>
								<p className="leading-relaxed text-base">
									As your company expands, our digital systems
									can easily adjust to meet your changing
									requirements. Concentrate on increasing your
									business while we handle your financial
									matters with expertise.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Sustainability
								</h2>
								<p className="leading-relaxed text-base">
									We use paperless procedures to reduce our
									environmental impact, empowering you to
									operate your business eco-friendly.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h1 className=" title-font text-3xl font-semibold ">
							Chat with expert accountants in West London!
						</h1>
						<p className="mt-4 text-md ">
							Let our accountants in West London transform the way
							you handle your finances. Send us a message for an
							appointment, or get a quote today – take your
							business in West London to new heights.
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
						Our Accountancy Services in Leeds Our comprehensive
						range of accountancy services in Leeds includes:
						Bookkeeping: Keep your financial records accurate and
						up-to-date with our meticulous bookkeeping services. Tax
						Planning and Compliance: Our accountants in Leeds
						provide expert tax planning to minimize your tax
						liability while ensuring compliance with HMRC
						regulations. Payroll Services: Manage your payroll
						efficiently with our reliable payroll services, ensuring
						timely and accurate salary payments. Financial
						Reporting: Receive detailed financial reports that give
						you a clear picture of your business's financial health.
						Business Advisory: Our accountants offer strategic
						business advice to help you make sound financial
						decisions and achieve your business goals. Accountants
						Leeds UK: Serving Businesses Across Various Sectors Our
						accountancy services in Leeds cater to a wide range of
						industries, including: Retail and E-commerce: From
						inventory management to sales tax reporting, our
						accountants in Leeds provide comprehensive support for
						retail and e-commerce businesses. Hospitality: We offer
						specialized accounting services for the hospitality
						industry, including cash flow management, payroll, and
						tax compliance. Construction and Real Estate: Our
						accountants in Leeds help construction and real estate
						businesses with project accounting, cost management, and
						financial reporting. Healthcare: We provide tailored
						accounting solutions for healthcare professionals,
						ensuring accurate financial management and compliance.
					</p>
				</div>
			</section>
		</main>
	);
}
