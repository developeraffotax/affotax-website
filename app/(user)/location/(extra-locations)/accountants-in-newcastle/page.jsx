import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4 } from "@/public/assets/extra-locations";

export const metadata = {
	title: "Chartered Accountants Newcastle Upon Tyne - Affotax",
	description: "Welcome to one of the most affordable accounting firms Newcastle! We're chartered accountants Newcastle Upon Tyne, ready to help UK small businesses.",
	metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/location/accountants-in-newcastle`, },
	keywords: ['accountants in Newcastle']
};

export default function NewCastle() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								Chartered Accountants Newcastle Upon Tyne
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								Carrying out business in Newcastle is quite
								interesting. Nevertheless, your finances are
								expected to be ignored amidst carrying out
								business, promoting your brand, and keeping up
								with current industrial standards.
								<br /> <br /> Our accountants Newcastle are
								available to sort that out - send us a message
								or get a quote to grow your business in
								Newcastle Upon Tyne in London.
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
							Why Choose Our Accountants in Newcastle Upon Tyne?
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
									Online accounting
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									With the advent of our online secure
									platform, there is no need for paper trails
									or personal meetings. Sit back at your
									office as you access your real-time
									financial data, upload documents, and
									communicate with your dedicated accountant
									all in one place.
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
									Simple taxation
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Tax season should not worry you because we
									are dedicated to understanding the most
									current HMRC regulations that help claim
									your business's expenses. Your worries will
									be over with us handling your tax returns so
									you can concentrate on growing the company.
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
									Financial planning
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Every business needs to make financial
									decisions. It's more than just about numbers
									– it entails understanding the objectives
									and desires of the company. At the heart of
									our approach is the use of informative
									conversations to make suggestions concerning
									investment, management of cash flows, and
									how a business can last longer.
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
									Personalised support
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									Building strong client relationships is
									essential to us. A dedicated accountant will
									have time for your business needs and
									financial landscape. We will be available to
									answer your questions, address your
									concerns, and offer continued support.
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
							What do our Accountants Newcastle offer?
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
									Experienced and qualified team
								</h2>
								<p className="leading-relaxed text-base">
									Our team has much experience in various
									sectors. Whether you're an experienced
									business owner or starting, we can customise
									our services to meet your unique
									requirements.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Cost-effective solutions
								</h2>
								<p className="leading-relaxed text-base">
									Affordable and transparent pricing is what
									we believe in. Our online platform optimises
									processes, reducing overheads to enable us
									to offer competitive rates while maintaining
									quality.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Time-saving efficiency
								</h2>
								<p className="leading-relaxed text-base">
									Our online portal facilitates secure and
									efficient document management and
									communication, allowing you to focus more on
									core business activities as you will enable
									us to look into financial details.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Future-focused approach
								</h2>
								<p className="leading-relaxed text-base">
									Whether enabling our customers to reach
									individual wealth preservation objectives or
									business goals to attain consistency in
									growth and long-term success, we shall
									always collaborate closely to create
									financially sustainable strategies.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Chat With Expert Accountants Newcastle Upon Tyne!
						</h2>
						<p className="mt-4 text-md ">
							If you have any queries, please don't hesitate to
							message us or get a quote – our expert accountants
							in Newcastle Upon Tyne will respond immediately.
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
						Expert Accounting Services in Newcastle Upon Tyne Our
						accounting firm in Newcastle Upon Tyne offers a broad
						range of services designed to meet the unique needs of
						businesses and individuals. Whether you need assistance
						with tax planning, financial reporting, or strategic
						financial advice, our accountants are equipped to handle
						it all. Tax Planning and Compliance Navigating the
						complexities of tax regulations can be challenging. Our
						team stays up-to-date with the latest HMRC guidelines,
						ensuring that your business remains compliant while
						maximizing tax efficiency. We provide comprehensive tax
						planning services to help you make informed decisions
						and optimize your tax position. Business Advisory Our
						role goes beyond number-crunching. As your trusted
						financial advisor in Newcastle, we offer strategic
						advice to help you achieve your business goals. From
						cash flow management and budgeting to growth strategies
						and risk management, our advisory services are designed
						to support your business's long-term success. Audit and
						Assurance For businesses required to undergo audits, our
						chartered accountants in Newcastle provide thorough and
						objective audit services. We ensure compliance with
						statutory requirements while delivering valuable
						insights into your financial operations. Our goal is to
						enhance your business's credibility and investor
						confidence through our meticulous audit processes.
						Serving Newcastle and Beyond While we are based in
						Newcastle, our services extend to the surrounding areas,
						including Newcastle upon Tyne. We understand the local
						business environment and are committed to helping
						businesses in the region succeed. Whether you need a
						financial advisor in Newcastle or comprehensive
						accounting services in Newcastle upon Tyne, our team is
						here to assist.
					</p>
				</div>
			</section>
		</main>
	);
}
