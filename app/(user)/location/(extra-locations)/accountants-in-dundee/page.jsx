import Link from "next/link";
import Tax from "@/public/tax.png";
import Experience from "@/public/experience.png";
import Deadline from "@/public/deadline.png";
import Award from "@/public/award.png";

import Image from "next/image";
import {
	hero,
	icon1,
	icon2,
	icon3,
	icon4,
} from "@/public/assets/extra-locations";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";
import EmailPhone from "@/components/Home/Subpages/EmailPhone";

export const metadata = {
	title: "Accountants in Dundee Scotland | Top Accountants Dundee",
	description:
		"We're one of the leading accountancy firms in Dundee. Manage finances with our expert accountants in Dundee. Tax filing made simple by our accountants Dundee.",
		metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/location/accountants-in-dundee`, },
		keywords: ['accountants in dundee']
};

export default function Dundee() {
	return (
		<main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
			{/* HOME TOP */}
			<section className=" text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage">
				<div className="container mx-auto ">
					<div className=" flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  ">
						<div className="items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 ">
							<h1 className=" text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left">
								Accountants in Dundee Scotland | Top Accountants
								Dundee
							</h1>
							<p className="mb-8  text-tertiary/[70] text-xl max-lg:text-lg">
								Are you looking for chartered accountants in
								Dundee? Well, you are in the right place!
								Affotax is one of the best and most affordable
								accountancy firms in Dundee, simplifying your
								financial life. Our expert Dundee accountants
								are passionate, qualified, and understand the UK
								tax laws and regulations.
								<br /> <br /> Affotax's accountants in Dundee
								have years of experience helping many UK
								businesses prosper. You can rely on our Dundee
								accountants' expertise, offering services like
								corporation tax, annual accounts, bookkeeping,
								payroll, VAT, self-assessment, and company
								formation.
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
							What sets our accountants in Dundee apart?
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
									What is the need for a pile of paperwork if
									you can manage your accounting and tax
									filing online from anywhere at any time? Our
									user-friendly online platform lets you
									quickly share your documents, access your
									financial reports, and communicate in real
									time with your accountants in Dundee.
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
									Local expertise
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									In order to give effective financial
									insights, it is important to have local
									expertise in the Dundee business
									marketplace. Our expert Dundee accountants
									have the required knowledge about local
									Dundee industries, taxes, and economic
									trends. We make sure your business aligns
									with HMRC's regulations.
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
									Simple taxation
								</h3>
								<h4 className="mt-2 text-base text-gray-700">
									Tax season is a source of burden for many
									people, but our Dundee accountants are
									dedicated to easing your shoulders. HMRC and
									Companies House constantly update their
									taxes and other filing regulations; our team
									stays up-to-date on these latest updates.
									Let us help you claim benefits and avoid
									penalties.
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
									Financial planning
								</h3>
								<h4 className="mt-2 text-base text-gray-700 ">
									At Affotax, the Dundee accountants go beyond
									basic accounting, building long-term
									partnerships with our clients. While
									managing your accounting and tax filing
									needs, we work collaboratively with you to
									set financial goals, devise effective
									strategies to achieve these goals, and give
									you insights accordingly.
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
							Benefits of choosing our Dundee accountants
						</h2>
						<p className="text-sm">
							Do you think of an accountant as someone working
							behind a pile of paperwork? That is likely different
							in this digital age because online accounting offers
							multiple benefits for businesses in Dundee.
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
									Time-saving
								</h2>
								<p className="leading-relaxed text-base">
									Our Dundee accountants provide an online
									portal, saving you time. Through this
									portal, you can access your financial
									records and communicate with your accountant
									whenever you need to.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Award} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Data security
								</h2>
								<p className="leading-relaxed text-base">
									Our accountants in Dundee, Scotland, are the
									most professional and reliable. They provide
									you with a secure online service—no more
									misplaced invoices or spreadsheets.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Deadline} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Affordable services
								</h2>
								<p className="leading-relaxed text-base">
									You might have reached the end of your rope
									with traditional accounting services. Our
									online accountants in Dundee manage your
									accounting and tax filing while reducing
									overhead costs.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
								<Image src={Experience} cover="true" />
							</div>
							<div className="flex-grow">
								<h2 className="text-primary text-lg title-font font-medium mb-3">
									Financial insights
								</h2>
								<p className="leading-relaxed text-base">
									Through our accountants, Dundee, you can
									access your financial insights, which help
									you make financial decisions based on
									accurate data – let's grow together!
								</p>
							</div>
						</div>
					</div>

					<div className=" mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md ">
						<h2 className=" title-font text-3xl font-semibold ">
							Ready to chat with our expert accountants in Dundee?
						</h2>
						<p className="mt-4 text-md ">
							We make it simple for you to connect with us. Send
							us a message or get a quote, and our accountants in
							Dundee will respond as soon as possible.
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
				Comprehensive Accountancy Services in Dundee
Our accountants in Dundee offer a wide range of services designed to ensure your financial affairs are in perfect order. Here’s a closer look at what we provide:
Corporation Tax
Managing corporation tax can be challenging, but our accountants in Dundee are well-versed in the latest tax laws and regulations. We help you maximize your tax efficiency, ensuring you meet all HMRC requirements without any hassle.
Annual Accounts
Accurate annual accounts are essential for any business. Our Dundee accountants prepare comprehensive annual accounts, giving you a clear picture of your financial health and helping you make informed business decisions.
Bookkeeping
Efficient bookkeeping is the backbone of any successful business. Our bookkeeping services in Dundee ensure your financial records are always up-to-date and accurate, allowing you to focus on growing your business.
Payroll Services
Managing payroll can be time-consuming and complex. Our payroll services in Dundee ensure your employees are paid accurately and on time, and we handle all the necessary payroll compliance requirements.
VAT Services
VAT can be a complicated area for many businesses. Our accountants in Dundee provide expert VAT services, from registration and compliance to filing returns, helping you avoid costly mistakes.
Self-Assessment
Self-assessment tax returns can be daunting. Our Dundee accountants take the stress out of self-assessment by managing your returns accurately and timely, ensuring you claim all eligible deductions and reliefs.
Company Formation
Starting a new business? Our company formation services in Dundee help you set up your business correctly from the start. We guide you through the entire process, from choosing the right business structure to registering with Companies House.







				</p>
			</section>

			<TrustPilotReviews />
						<EmailPhone />
		</main>
	);
}
