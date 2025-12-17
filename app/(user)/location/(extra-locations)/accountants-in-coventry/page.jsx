import Link from "next/link";
import Image from "next/image";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";
import { hero, icon1, icon2, icon3, icon4 } from "@/public/assets/extra-locations";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";
import EmailPhone from "@/components/Home/Subpages/EmailPhone";

export const metadata = {
	title: "Accountants Coventry UK | Expert Accountants in Coventry",
	description: "Looking for reliable accountants Coventry UK? We're expert accountants in Coventry ready to help businesses succeed. Contact our Coventry accountants now!",
	metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/location/accountants-in-coventry`, },
	keywords: ['accountants in Coventry']
};

export default function Coventry() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								{" "}
								Chartered Accountants in Coventry
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								Running a business in Coventry is an adventure
								in itself. With the management of sales and
								operations, the paperwork keeps on piling up,
								making it hard for you to handle everything.
								<br />
								<br />
								Here at Affotax, we provide Coventry businesses
								with expert support to help them thrive. Send us
								a message or get a quote; our reliable
								accountants in Coventry respond immediately.
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
							Why choose our accountants in Coventry?
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
									Comprehensive accountancy services
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									From bookkeeping to tax filing, payroll
									processing to financial analysis, we handle
									your complete accounting needs.
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
									Tax planning and compliance
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									We stay current with the latest tax
									regulations so you take advantage of every
									deduction and minimise your liability as
									much as possible.
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
									Strategic financial guidance
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Looking for just that extra help to make the
									right financial decisions? We provide
									crystal clear insights and actionable advice
									to propel your business forward.
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
									Peace of mind and confidence
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Having peace of mind that your finances are
									in good hands lets you do what you do best:
									running your business with confidence.
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
							What our Coventry accountants offer
						</h2>
						<p className="text-sm">
							Don't let accounting burdens hinder your business's
							potential. By choosing our accountants Coventry UK,
							you gain access to:
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
									Effortless efficiency
								</h2>
								<p className="leading-relaxed text-base">
									Gone are the days of chasing receipts and
									scrambling to meet tax deadlines. With our
									secure online portal, you can easily upload
									documents and view financial reports at your
									convenience.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Cost-effective expertise
								</h2>
								<p className="leading-relaxed text-base">
									We are one of the most affordable
									accountancy firms in Coventry. Since we use
									an online model, we can ensure good value
									for your investment by charging low prices.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Seamless collaboration
								</h2>
								<p className="leading-relaxed text-base">
									Communication is the key! Clear, consistent
									communication with dedicated accountants
									Coventry on our online platform. Ask
									questions, get updates, and stay on top of
									your finances easily.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Local knowledge, global reach
								</h2>
								<p className="leading-relaxed text-base">
									Our extensive knowledge of Coventry’s
									business landscape, combined with the fact
									that we work remotely allows us to offer you
									the best possible service without needing an
									office or traditional business presence in
									Coventry.
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Talk to reliable accountants in Coventry!
						</h2>
						<p className="mt-4 text-md ">
							Contact our Coventry accountants today for a free
							consultation to let us show you how online
							accounting can empower your Coventry business to
							conquer the numbers game.
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
						Comprehensive Accountancy Services in Coventry Our
						accounting firms in Coventry offer a full spectrum of
						services to cater to every aspect of your business's
						financial health. From routine bookkeeping to complex
						financial analysis, we ensure that your financial
						records are accurate and up-to-date. Our services
						include: Bookkeeping: Keep your financial records
						organized and accessible with our meticulous bookkeeping
						services. Tax Planning and Compliance: Stay ahead of tax
						obligations and maximize your deductions with our
						strategic tax planning and compliance services. Payroll
						Processing: Ensure your employees are paid accurately
						and on time, while remaining compliant with payroll
						regulations. Financial Analysis: Gain valuable insights
						into your business's performance and make informed
						decisions with our in-depth financial analysis. Why
						Choose Our Accountants in Coventry? Choosing the right
						accountants in Coventry can make a significant
						difference in the smooth operation and growth of your
						business. Here’s why businesses trust us: Expertise and
						Experience: Our team comprises highly skilled
						professionals with extensive experience in various
						industries. We bring a wealth of knowledge to the table,
						ensuring that your finances are managed expertly.
						Personalized Service: We understand that every business
						is unique. Our accountants in Coventry take the time to
						understand your specific needs and tailor our services
						accordingly. Local Insight: Being based in Coventry, we
						possess a deep understanding of the local business
						environment and regulations. This local knowledge
						enables us to offer relevant and effective solutions.
						Advanced Technology: Embrace the future of accounting
						with our cutting-edge online platforms. Easily upload
						documents, track your financial status, and communicate
						with your dedicated accountant seamlessly.
					</p>
				</div>
			</section>

			<TrustPilotReviews />
						<EmailPhone />
		</main>
	);
}
