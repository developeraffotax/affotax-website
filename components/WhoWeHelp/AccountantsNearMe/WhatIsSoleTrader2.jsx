
import Image from "next/image";

import CloudAcc from "@/public/location4.PNG";





export default function WhatIsSoleTrader2() {
	

	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				

				<div className="flex flex-row max-lg:flex-col max-lg:items-center  gap-10 w-full justify-center items-center max-lg:h-auto h-[40vh] border-b border-black/10 pb-8 max-lg:p-12">

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

					
				</div>


				
			</div>
		</>
	);
}