import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";
import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4 } from "@/public/assets/extra-locations";




export const metadata = {
	title: "Chartered Accountants in Central London - Affotax!",
	description: "Looking for chartered accountants in Central London? Look no further! We're expert accountants in London Central ready to help your accounts & tax filings.",
	metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/accountants-in-central-london`, },
};





export default function CentralLondon() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								{" "}
								Online Chartered <br /> Accountants in Central
								London
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								It can be challenging to keep track of one's
								finances in the business-sharp area of Central
								London. However, at Affotax, we are dedicated to
								taking the burden off your shoulders. Our
								accountants in central London offer online
								services designed for people trading within
								Central London, which include accounting and tax
								filing support, among other areas.
								<br />
								We have helped many businesses succeed by taking
								their accounting and tax filing responsibility
								from them. Let us help you confidently walk the
								road to success - get a quote now!
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
							Why choose our accountants in central London?
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
									Local knowledge
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our team is closely familiar with Central
									London's extraordinary financial landscape.
									We keep ourselves updated on local
									regulations and tax updates so that you can
									comply.
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
									Global expertise
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									While we are based in London, our
									perspective is worldwide. Resultantly, we
									can give an inclusive perspective on your
									financial state and notice possible openings
									for growth overseas.
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
									Tax management
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Stop worrying about tax season. When
									handling tax filings, we avoid mistakes,
									allowing you to comply with rules set by the
									HMRC with no trouble, and you can take care
									of business development without any worries
									at the same time.
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
									Dedicated support
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									Don't worry about getting lost in the sea of
									clients. Once you get it, the accountant
									will handle your taxes and understand your
									business needs; that's why we provide
									customised services for every customer.
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
							What our accountants in central London offer
						</h2>
						{/* <p>
                When it comes to comprehensive and reliable accounting services, our accountants in London stand out among the rest. Here are some of the additional services we offer:
                </p> */}
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
									Efficient cloud accounting
								</h2>
								<p className="leading-relaxed text-base">
									Switching from the shoebox of receipts is a
									good idea. Step up and comprehend your
									firm's financial health through our secure
									online portal anytime. Upload documents,
									track key metrics, and directly speak to
									your dedicated accountant – all in one spot.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Real-time financial insights
								</h2>
								<p className="leading-relaxed text-base">
									Understand your financial situation; our
									easy-to-follow online platform will generate
									reports and data for you promptly, enabling
									you to take appropriate actions to advance
									your business.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Automated tasks
								</h2>
								<p className="leading-relaxed text-base">
									Transform the cumbersome manual data entry
									into automated processes by utilising secure
									online integrations of our accounting
									software that allow you to spend time on
									something meaningful.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Payroll services
								</h2>
								<p className="leading-relaxed text-base">
									Every business changes with time, and our
									accounting software must also be flexible to
									enable this growth pattern to fit into
									various stages easily. We design individual
									services for each client depending on their
									respective requirements.
								</p>
							</div>
						</div>
					</div>

					<div className="hidden">
						<p>
							Full-Spectrum Accountancy Services in Central London
							Financial Strategy and Planning: Our accountants in
							Central London aren’t just about managing numbers;
							they strategize for your business’s future. From
							cash flow management to financial forecasting, we
							equip you with the tools to make informed decisions
							that drive your business forward. Comprehensive Tax
							Solutions: Navigating the complexities of tax
							obligations is a significant challenge for many.
							With our robust tax management services, we ensure
							you're not only compliant but also maximising
							potential tax benefits. Our proactive approach helps
							you stay ahead of changes, minimizing liabilities
							and optimizing your financial outcomes. Audit and
							Assurance Services: Trust and transparency are
							pillars of our service. Our audit services provide
							you with accurate insights into your financial
							health, giving stakeholders confidence in your
							financial reports. We scrutinize every aspect to
							ensure compliance and accuracy. Personalized
							Consultancy: Each business is unique, and so are its
							challenges. Our accountants in Central London
							provide personalized consultancy that addresses your
							specific needs. Whether it’s risk management,
							investment advice, or corporate restructuring, we’re
							here to guide you every step of the way. Startup
							Services: London's dynamic market is ripe with
							opportunities for startups, but financial hurdles
							can be daunting. We specialize in services tailored
							for startups, offering everything from entity
							formation to financial modeling and seed funding
							assistance.
						</p>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Talk with dedicated accountants in central London!
						</h2>
						<p className="mt-4 text-md ">
							Our dedicated team is ready to answer your queries
							and help you understand your accounting and tax
							filing position – send a message to us today.
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
		</main>
	);
}
