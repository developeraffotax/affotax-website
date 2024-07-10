import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import { hero, icon1, icon2, icon3, icon4, } from "@/public/assets/extra-locations";

export const metadata = {
	title: "Chartered Accountants Wrexham | Top Wrexham Accountants",
	description:
		"Looking for chartered accountants Wrexham? Our Wrexham accountants help businesses thrive. Manage accounts & tax filing with expert accountants in Wrexham.",
};

export default function Wrexham() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								Chartered Accountants Wrexham
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								We understand how freelancers, small businesses,
								startups, and other enterprises in the UK face
								financial challenges. Our dedicated accountants
								in Wrexham promise to deliver the best
								bookkeeping and tax filing services and much
								more, customised to your precise requirements.
								<br /> <br />
								Thanks to years of experience in the industry,
								our team is well-versed in all aspects of
								accounting, taxation, and financial planning. We
								always strive to keep track of any new HMRC tax
								laws and regulations. Get a quote today!
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
							Why choose our Accountants Wrexham?
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
									Affordability
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									We believe in high-quality accounting
									services that customers can afford. Our
									prices are structured to be fair, so you get
									value for your money, regardless of whether
									you are a sole trader or a limited company.
									We can manage your finances without putting
									pressure on them.
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
									Online efficiency
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Convenience is important in today's
									fast-paced world, and hence, accounting and
									tax filing issues can be sorted via our
									online platform either at home or at work.
									This eliminates the need to go physically to
									the tax office at Wrexham, which is usually
									time-consuming. We have user-friendly
									digital tools that enable our customers to
									have smooth interactions.
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
									Experienced accountants
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									We have comprehensive knowledge of the most
									recent accounting traditions and tax
									legislation. For accurate and timely advice,
									we always keep track of the latest
									developments in our profession. By selecting
									us, you become a part of a successful
									financial partnership with experts.
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
									Accuracy & punctuality
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									We focus on paying close attention to all
									the details needed and delivering timely
									services. Our systems aim to ensure that all
									your account details are correct and that
									you always submit your taxes on time. You
									can trust us to handle your money prudently.
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
							What our accountants Wrexham offer
						</h1>
						<p className="text-sm">
							Here are a few reasons why our Wrexham accountants
							could be the game changer for you:
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
									Company accounts
								</h2>
								<p className="leading-relaxed text-base">
									We look after all aspects of a business's
									accounts, from preparation to submission.
									Our competence ensures that the financial
									statements are accurate and meet the
									compliance standards set by authorities,
									hence giving you peace of mind.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Corporation tax
								</h2>
								<p className="leading-relaxed text-base">
									Although the process of guiding corporation
									tax can be intricate, our experienced team
									is responsible for making it simpler for
									you. By ensuring that your tax is prepared
									and submitted accurately, we assist you in
									limiting liabilities and capitalising on
									existing reliefs.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Confirmation statement
								</h2>
								<p className="leading-relaxed text-base">
									Any company needs to maintain compliance. We
									take care of your confirmation statements
									and file them correctly and on time so that
									you remain in the good books of the
									regulatory bodies.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Self-assessment
								</h2>
								<p className="leading-relaxed text-base">
									Self-assessment may engender fearful
									experiences among independent workers and
									self-proprietors. Our specialists walk you
									through the procedure and ensure that you
									file your tax returns accurately and timely,
									thereby keeping you safe from fines.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h1 className=" title-font text-3xl font-semibold ">
							Chat with expert accountants Wrexham!
						</h1>
						<p className="mt-4 text-md ">
							Do not hesitate to contact our professional team of
							accountants in Wrexham. We are happy to help you out
							because we succeed when you succeed.
						</p>
						<Link href={"/contact-us"}>
							<button className="drop-shadow-md transition-all  mt-4 inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  ">
								{" "}
								Get a Quote{" "}
							</button>
						</Link>
					</div>
				</div>

				<div>
					<p className="hidden">
						VAT return We specialise in VAT services, particularly
						reducing VAT compliance burdens. We handle your VAT
						returns to ensure timing and accuracy so that you can
						concentrate on expanding your business. Payroll services
						Managing payroll can indeed be time-consuming and
						complex. Our payroll services ensure two things: that
						employees are paid accurately and on time and that they
						comply with all relevant regulations. Bookkeeping Good
						financial management requires accurate financial
						records. Our bookkeeping service allows for accurate
						record maintenance and always keeps them updated,
						enhancing your business performance. Company formation
						When starting a business, one must be aware of and deal
						with many legal and regulatory problems. Our company's
						services are meant to make things easier for you. We
						help you in all stages involved in starting your
						company, from selecting the most suitable type of
						business organisation to filing appropriate papers at
						either the state or federal levels.
					</p>
				</div>
			</section>
		</main>
	);
}
