"use client";

import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HeroImg from "@/public/taxlocal.PNG";
import SmallBiz from "@/public/smallbiz.PNG";
import SmallBiz2 from "@/public/smallbiz2.PNG";
import CloudAcc from "@/public/cloudacc.PNG";
import Link from "next/link";
import { useScroll, animated } from "@react-spring/web";
import Blob from "@/public/blob.svg";
import Blob1 from "@/public/blob1.svg";



export default function WhatIsSoleTrader() {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="flex flex-row max-lg:flex-col-reverse max-lg:items-center  gap-16 p-8 justify-center max-lg:h-auto    ">
					

					<div className="mt-4 max-w-2xl  flex   flex-col items-start justify-start  w-[70%] max-lg:w-full  ">
						<h2 className="   leading-relaxed text-center max-lg:text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                        Why look for a Cheap/Affordable Accountant?

						</h2>
						<span className="mt-4  text-start text-lg leading-relaxed text-gray-800">
						Small businesses face unprecedented financial pressures. With rising living costs and lingering uncertainty from recent global events, every penny counts. It's understandable to seek ways to cut costs, but <b>compromising on accountancy services can have serious consequences.</b><br/> <br/> VAT returns, tax filings, and day-to-day business operations demand meticulous financial management. At Affotax, we understand the value of expert accountancy. Our affordable services ensure compliance, minimize risks, and provide strategic financial guidance tailored to your business needs. Don't let cost-cutting compromise your financial stability—choose reliable accountancy support to navigate challenges with <b>confidence.</b>

						</span>
					</div>

					<div className="   flex flex-row justify-start text-start items-start rounded-[300px]  w-[30%]  max-lg:w-[50%] ">
						<Image src={HeroImg} cover className="scale-125    " />
					</div>

				</div>







				




























				{/* <div className="flex flex-row max-lg:flex-col max-lg:items-center  gap-10 w-full justify-center items-center max-lg:h-auto h-[40vh] border-b border-black/10 pb-8 max-lg:p-12">

				<div className="   flex flex-row justify-start text-start items-start   overflow-hidden w-[30%] max-lg:w-[50%]">
						<Image src={CloudAcc} cover className="drop-shadow-lg" />
					</div>


					<div className="   flex   flex-col items-start justify-center  ">
						<h2 className="  max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                        Tax Accountants Near Me

						</h2>
						<span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
                        Taxation can be a daunting area for many individuals and businesses. When searching for "tax accountants near me," it’s crucial to find a firm that can offer expert advice and practical solutions.<br/> <br/> Our <strong>tax accountants</strong> provide comprehensive tax planning and compliance services, helping you manage your tax obligations efficiently.

						</span>
					</div>

					
				</div> */}


				
			</div>
		</>
	);
}
