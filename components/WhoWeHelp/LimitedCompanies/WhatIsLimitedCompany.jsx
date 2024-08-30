"use client";

import Image from "next/image";
import HeroImg from "@/public/soleTraderman.png";


export default function WhatIsLimitedCompany() {
	return (
		<>
			<div className="flex w-full max-lg:flex-col  flex-row gap-10 py-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="   flex flex-row justify-start text-start items-start  blob overflow-hidden   bg-gradient-to-br from-orange-900 via-orange-500 via-50% to-orange-800  ">
					<Image src={HeroImg} cover className="scale-110    " />
				</div>

				<div className="relative   flex   flex-col items-start justify-center  ">
					<h2 className="  max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						What is a Limited Company?
					</h2>
					<span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
						A limited company is a type of business structure where
						the company is considered a separate legal entity from
						its owners (shareholders). This means that the company
						itself can own assets, incur liabilities, and is
						responsible for its debts. The main advantage of a
						limited company is the protection it offers to its
						shareholders, limiting their personal liability to the
						amount they invested in the company. This structure is
						popular among businesses looking to grow and scale due
						to its flexibility in raising capital and the
						professional image it projects.
					</span>
				</div>
			</div>
		</>
	);
}
