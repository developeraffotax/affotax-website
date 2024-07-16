import Link from "next/link";
import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, } from "@/public/assets/northern-ireland";

export const metadata = {
	title: "Online Accountants in Northern Ireland | Belfast | Derry",
	description: "Are you looking for accountants in Northern Ireland, Belfast, Derry, Armagh, Banbridge, or Craigavon? We can help you online, no matter where you are in Northern Ireland.",
};

export default function NorthernIreland() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								{" "}
								Online Accountant <br /> Accountants in Northern
								Ireland
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								{" "}
								Finding reliable accountants is key in the
								Northern Ireland business market. Our Northern
								Ireland accountants are the experts you are
								looking for, offering a range of expertise from
								accounting and tax specialists to business
								advisors.
								<br /> <br /> Get in touch with our accountants
								in Northern Ireland today. You can relax while
								we handle all the nitty gritty of your accounts
								and tax filing within the UK.
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

						<div className=" w-[50%]  max-lg:w-full  max-lg:mb-4 scale-125 max-lg:mr-8 lg:pt-12">
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
							Why choose our accountants in Northern Ireland or
							Belfast?
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
									alt="northern-ireland icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Accountants in Belfast
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Are you looking for accountants in Belfast?
									We provide our services all over the UK,
									including Belfast. We understand the Belfast
									accounting landscape and are ready to help
									you with tax planning, bookkeeping, or
									business advisory. Why choose our Belfast
									accountants? Keep reading.
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
									alt="northern-ireland icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Local knowledge
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									We at Affotax understand the UK tax
									regulations and the economic landscape of
									Belfast or anywhere in Northern Ireland. We
									love to help companies navigate the tax
									world while utilizing the best resources.
									Get a quote, and our accountant in Belfast
									will reply instantly to help you.
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
									alt="northern-ireland icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Customised solutions
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Whether you're a sole trader or a large
									corporation, Affotax has multiple customised
									solutions to fit your needs. Here is how we
									do it: We understand your needs and develop
									a plan accordingly, then offer you an
									affordable service package to help solve
									your problem. Let's connect today!
								</h4>
							</div>
						</li>
						<li className="flex-start group relative flex lg:flex-col">
							<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
								<Image
									src={icon4}
									alt="northern-ireland icon"
									className="p-2"
								/>
							</div>
							<div className="ml-6 lg:ml-0 lg:mt-10">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Personal touch
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									At Affotax, we prioritise personal touch as
									it helps us build relationships with our
									clients. We often go above and beyond in
									providing customised phone calls and
									personalised services, which can lead to
									better customer satisfaction. Through
									personal touch, we understand each of our
									customers' tastes and help accordingly.
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
							Where do our accountants in North Ireland serve?
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
									Accountants in Derry
								</h2>
								<p className="leading-relaxed text-base">
									Getting a reliable accountant in Derry is
									crucial for the well-being of your business
									or personal finances. Our Derry's
									accountants, who have years of experience in
									the field, can manage it all, from tax prep
									and bookkeeping to financial advisory and
									business consulting services. Get a quote
									today, and we will connect you with a
									qualified chartered accountant in Derry to
									assist you with your specific needs.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon6} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Accountants in Armagh
								</h2>
								<p className="leading-relaxed text-base">
									Are you looking for accountants in Armagh?
									Our team of experienced accountants in
									Armagh is ready to help you with all your
									accounting and tax filing needs. We are
									experts in taxation, bookkeeping, and
									financial reporting. Our services also
									include business advisory and financial
									planning. So why wait? Contact our Armagh
									accountants today; we will help you reach
									new heights.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon7} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Accountants in Banbridge
								</h2>
								<p className="leading-relaxed text-base">
									Finding accountants in Banbridge is not a
									difficult task. Our expert Banbridge
									accountants are ready to help you with tax
									filing and accounting in the UK. We provide
									professional and reliable services at
									competitive prices. We analyse your specific
									needs and offer you an affordable service
									accordingly. Our experienced team is ready
									to answer any questions you may have.
									Contact us today to get started.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon8} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Accountants in Craigavon
								</h2>
								<p className="leading-relaxed text-base">
									Looking for reliable accountants in
									Craigavon to keep your finances in check?
									Our experienced professionals are ready to
									serve you. We are dedicated to helping your
									small business or assisting with your taxes,
									whatever your requirements. Our attention to
									detail and personalised touch has earned us
									a special place in our clients' hearts.
									Contact us to schedule a consultation and
									grow your business.
								</p>
							</div>
						</div>

						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon9} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Accountants in Newry
								</h2>
								<p className="leading-relaxed text-base">
									Are you looking for accountants in Newry?
									Our team of skilled accountants in Newry is
									available to manage your finances with
									expertise and precision. We specialize in
									tax compliance, bookkeeping, and strategic
									financial planning. Our services are
									designed to optimize your financial
									management and help you achieve your
									financial goals. Don’t hesitate—reach out to
									our Newry accountants today and take the
									first step towards a more secure financial
									future.
								</p>
							</div>
						</div>

						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={icon10} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Accountants in Lisburn
								</h2>
								<p className="leading-relaxed text-base">
									Searching for accountants in Lisburn? Our
									dedicated Lisburn accountants are here to
									provide you with top-notch accounting and
									financial services. Whether you need help
									with tax preparation, bookkeeping, financial
									planning, or business advisory, our team is
									equipped to handle all your financial needs.
									We offer tailored solutions to help you
									achieve your financial goals. Contact our
									Lisburn accountants today to discover how we
									can support your business or personal
									finances.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h1 className=" title-font text-3xl font-semibold ">
							Ready to chat?
						</h1>
						<p className="mt-4 text-md ">
							Get a quote or leave a message, and one of our
							expert Northern Ireland accountants will contact
							you.
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
		</main>
	);
}
