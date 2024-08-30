"use client";

import Image from "next/image";
import HeroImg from "@/public/soleTraderman.png";

import { useScroll } from "@react-spring/web";

export default function WhatIsSoleTrader() {
	return (
		<>
			<div className="flex w-full max-lg:flex-col  flex-row gap-10 py-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="   flex flex-row justify-start text-start items-start  blob overflow-hidden   bg-gradient-to-br from-orange-900 via-orange-500 via-50% to-orange-800  ">
					<Image src={HeroImg} cover className="scale-110    " />
				</div>

				<div className="relative   flex   flex-col items-start justify-center  ">
					<h2 className="  max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						What is a Sole Trader?
					</h2>
					<span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
						A sole trader is the simplest form of business structure
						in the UK, where a single individual owns and operates
						the business. This structure offers full control over
						decision-making and management but also means personal
						responsibility for all business debts and liabilities.
					</span>
				</div>
			</div>
		</>
	);
}
