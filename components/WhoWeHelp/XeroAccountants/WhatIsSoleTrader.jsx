"use client";

import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HeroImg from "@/public/xero1.PNG";
import SmallBiz from "@/public/smallbiz.PNG";
import SmallBiz2 from "@/public/smallbiz2.PNG";
import CloudAcc from "@/public/cloudacc.PNG";
import Link from "next/link";
import { useScroll, animated } from "@react-spring/web";
import Blob from "@/public/blob.svg";
import Blob1 from "@/public/blob1.svg";

const steps = [
	{
		title: "Registration",
		content: "Register as a sole trader with HMRC",
	},
	{
		title: "Bank Account",
		content: "Open a separate bank account for business transactions",
	},
	{
		title: "Insurance",
		content: "Obtain necessary insurance coverage",
	},
	{
		title: "Record Keeping",
		content: "Set up a system for accurate financial records",
	},
];

export default function WhatIsSoleTrader() {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="flex flex-row gap-16 p-8 justify-center   h-[50vh]  ">
					

					<div className="mt-4 max-w-2xl  flex   flex-col items-start justify-start  w-[70%]">
						<h2 className="   leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
							Are You Looking for Xero Accountants?
						</h2>
						<span className="mt-4  text-start text-xl leading-relaxed text-gray-800">
							If you are searching for professional accountants
							who specialize in Xero, you’ve come to the right
							place. Our team is highly skilled in utilizing Xero
							accounting software to streamline your financial
							processes, making it easier for you to focus on
							growing your business. <br/><br/>With Xero's robust features
							and our expertise, we ensure that your accounting
							tasks are handled efficiently and accurately.
						</span>
					</div>

					<div className="   flex flex-row justify-start text-start items-start rounded-[300px]  w-[30%]   ">
						<Image src={HeroImg} cover className="scale-125    " />
					</div>

				</div>




				<div className="flex flex-row gap-10 w-full p-12 justify-center items-center h-[40vh] bg-slate-200/30 rounded-2xl shadow-lg">

				<div className="   flex flex-row justify-start text-start items-start  rounded-2xl  w-[30%] overflow-hidden     ">
						<Image src={SmallBiz} cover className="scale-110    " />
					</div>


					<div className="relative   flex   flex-col items-start justify-center  ">
						<h2 className="  max-w-sm leading-relaxed text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
							Why Your Business May Need an Accountant
						</h2>
						<span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800 ">
							Having a professional accountant is crucial for any
							business, regardless of its size. Accountants
							provide invaluable services such as financial
							reporting, tax compliance, and strategic planning.
							They help you understand your financial health,
							ensuring you make informed decisions. With their
							expertise, you can avoid costly mistakes, optimize
							your expenses, and stay compliant with ever-changing
							tax laws. In short, accountants help secure your
							busi ness's financial future.
						</span>
					</div>

					
				</div>




				






				<div className="flex flex-row gap-8   w-full justify-center items-center  h-[40vh] bg-slate-200/30 rounded-2xl shadow-lg p-12">
					

					<div className="  w-[70%] max-w-2xl ">
						<h2 className="  leading-relaxed text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
							Why Choose Us for Xero Online Accounting Services?
						</h2>
						<span className="mt-4  text-start text-xl leading-relaxed text-gray-800">
							Choosing us for your Xero online accounting services
							means opting for excellence and reliability. Our
							team of certified Xero accountants brings extensive
							experience and a deep understanding of the software.
							We offer personalized services tailored to your
							business needs, ensuring you get the most out of
							Xero. Our commitment to continuous learning and
							customer satisfaction sets us apart, making us the
							ideal partner for your accounting needs.
						</span>
					</div>

					<div className="    w-[30%] ">
						<Image src={SmallBiz2} cover className=" " />
					</div>


				</div>






















				<div className="flex flex-row gap-10 w-full justify-center items-center h-[40vh] border-b border-black/10 pb-8 ">

				<div className="   flex flex-row justify-start text-start items-start   overflow-hidden w-[30%] ">
						<Image src={CloudAcc} cover className="drop-shadow-lg" />
					</div>


					<div className="   flex   flex-col items-start justify-center  ">
						<h2 className="  max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
							What is Xero Cloud Accounting?
						</h2>
						<span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
							Xero Cloud Accounting is an innovative solution that
							allows businesses to manage their accounting online.
							This cloud-based platform provides secure access to
							your financial data from any device with an internet
							connection. With Xero, you can perform various
							accounting tasks, such as invoicing, payroll, and
							bank reconciliation, in a seamless and efficient
							manner.
						</span>
					</div>

					
				</div>


				
			</div>
		</>
	);
}
