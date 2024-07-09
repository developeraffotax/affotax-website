import Link from "next/link";
import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4, icon5, icon6, icon7, } from "@/public/assets/wales";

export const metadata = {
	title: "Online Chartered Accountants in Wales, United Kingdom",
	description: "Looking for qualified and convenient accountants in Wales? Click here; you're in the right place - free quotes & expert financial advice for your business.",
};

export default function Wales() {
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
								in Wales
							</h1>
							<p className="mb-8   text-tertiary/[70] text-xl max-lg:text-lg">
								{" "}
								Are you looking for a Welsh accountant who can
								manage your accounts and tax filings accurately?
								You are in the right place. Although Affotax is
								based in London, we provide our services all
								over the UK, helping businesses of all sizes
								solve the complex financial nitty-gritty.
								<br /> <br />
								Whether you are an experienced business owner in
								Cardiff or a budding start-up in Snowdonia, our
								accountants in Wales are ready to serve you with
								our expertise in managing your accounts,
								ensuring tax compliance, and taking that weight
								off your mind so you can sharpen your business
								acumen.
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
							Why should you choose our Wales Accountants?
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
									className="p-2"
									src={icon1}
									alt="icon for wale page"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Local knowledge
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									At our Welsh business services office, we
									understand the unique aspects of Welsh
									business culture while offering resources
									and knowledge from a nationwide network.
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
									className="p-2"
									src={icon2}
									alt="icon for wale page"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Honest guidance
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									No confusing financial jargon here – our
									straightforward explanations ensure you
									always remain up to date about your
									finances.
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
									className="p-2"
									src={icon3}
									alt="icon for wale page"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Technology at your fingertips
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our secure online portal makes managing
									accounts and taxes simple no matter where in
									Wales you may live or operate from.
								</h4>
							</div>
						</li>
						<li className="flex-start group relative flex lg:flex-col">
							<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
								<Image
									className="p-2"
									src={icon4}
									alt="icon for wale page"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Fixed Fees
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Our transparent pricing offers no unpleasant
									surprises, while we tailor packages
									specifically to fit the needs of your
									business.
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
							Need accountants in St Asaph or St David's?
						</h1>
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
									Accountants in St. Asaph & St. David's
								</h2>
								<p className="leading-relaxed text-base">
									Even if you live in a smaller town such as
									St Asaph or St David's, don't feel left out
									when it comes to accounting services. With
									our online services, you get all of the
									benefits of hiring an accountant without
									paying high street prices for it.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon6} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Put your trust in Affotax
								</h2>
								<p className="leading-relaxed text-base">
									Trust is of utmost importance in business
									relationships, which is why we take the time
									to fully comprehend your goals for your
									venture and offer tailored tax and
									accounting advice that enables its growth.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon7} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Stop Dragging Your Feet Through Tax Season
								</h2>
								<p className="leading-relaxed text-base">
									Don't get stressed over tax season. Let our
									experienced team ease the strain by filing
									all your returns accurately and on time -
									helping to avoid penalties while maximising
									savings!
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h1 className=" title-font text-3xl font-semibold ">
							Ready to chat with the UK's top chartered
							accountants?
						</h1>
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
		</main>
	);
}
