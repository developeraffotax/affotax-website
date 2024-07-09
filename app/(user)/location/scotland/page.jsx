import Link from "next/link";
import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4 } from "@/public/assets/Scotland";

export const metadata = {
	title: "Online Chartered Accountants in Scotland Ready to Service",
	description: "We are the most affordable chartered accountants in Scotland. Your financial matters are taken care of expertly by our Scotland accountants with precision.",
};

export default function Scotland() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								{" "}
								Online <br /> Chartered Accountants in Scotland
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								{" "}
								Chartered Accountants in Scotland To be frank,
								not opting for our service is like living in
								Scotland and not visiting the mediaeval castles.
								Get in touch, and our chartered accountants in
								Scotland will serve you proper by managing your
								accounting and tax filing needs.
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
							Why choose our accountants in Scotland?
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
									alt="scotland icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Experienced accountants
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our team of Scotland accountants have 6+
									years of experience in providing tax filing
									and accounting services all over the UK.
									They have the required knowledge of local
									tax regulations and financial best
									practices, ensuring satisfaction. Our
									accountants in Scotland have helped many
									businesses and individuals find their way
									through the complications of Scottish
									finance, now ready to serve you.
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
									alt="scotland icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Affordable prices
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our prices are the most affordable. We
									understand and also recommend to pay less
									for accounting and tax filing services and
									save more. That's why we offer a whole
									smorgasbord of affordably priced accounting
									services, so you can choose what would best
									suit your requirements. Let’s find the
									perfect accounting solution for you and let
									us help you stay financially healthy without
									hurting your sporran!
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
									alt="scotland icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Improved financial decisions
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									With our accountants in Scotland by your
									side, you will make informed financial
									decisions as your business growth is our
									success story. We provide clear financial
									data and expert advice to help you and your
									business grow. Our accountants in Scotland
									provide multiple services including tax
									planning and preparation, bookkeeping,
									Payroll, and company formation, etc.
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
									src={icon4}
									alt="scotland icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
								Personalized Financial Advice

								</h3>
								<h4 className="mt-2 text-base text-gray-700">
								Our Scotland accountants provide personalized financial advice tailored to your specific needs and goals. Whether you're an individual or a business, our dedicated team helps you achieve financial success through strategic planning and expert guidance. We focus on understanding your unique financial situation and delivering customized solutions that drive growth and stability.
								</h4>
							</div>
						</li>
					</ul>
				</div>
			</section>

			{/* WHY CHOOSE US */}

			<section className="text-gray-600 body-font px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8">
				<div className="container px-5 py-12 mx-auto ">
					<h2 className="text-3xl font-bold ">Get digital</h2>

					<p className="mt-4">
						In this digital world, it’s more important to turn your
						accounting and tax filing needs digital, as cloud-based
						accounting services offer many benefits, including:
					</p>

					<ul className="list-disc font-semibold mt-4">
						<li> Real-time access to financial data </li>
						<li> Improved collaboration amongst teams</li>
						<li> Automated tasks that free up valuable time</li>
						<li>
							{" "}
							Managing accounts and tax filing from wherever you
							want
						</li>
						<li>
							{" "}
							No more paperwork burden and many more benefits.{" "}
						</li>
					</ul>

					{/* <h2 className="text-3xl font-bold mt-8">
						Our Scotland accountants provide their services to:
					</h2>
					<ul>
						{[ "Limited Companies", "Micro-entities", "LLPs", "Partnerships", "Freelancers", "Self-employed professionals", "Contractors, etc.", ].map((el) => {
							return (
								<li key={el} className="font-semibold list-disc" > {" "} {el}{" "} </li>
							);
						})}
					</ul> */}
				</div>
			</section>
		</main>
	);
}
