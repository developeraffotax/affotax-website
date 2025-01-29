
import Image from "next/image";

import CloudAcc from "@/public/accountantCheap.png";





export default function WhatIsSoleTrader2() {
	

	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				

				<div className="flex flex-row max-lg:flex-col max-lg:items-center  gap-16 w-full justify-center items-center max-lg:h-auto  border-b border-black/10 pb-8 max-lg:p-12">

				<div className="    flex flex-row justify-start text-start items-start   overflow-hidden w-[30%] max-lg:w-[50%]">
						<Image src={CloudAcc} cover className="drop-shadow-lg" />
					</div>


					<div className=" w-full  flex   flex-col items-start justify-center  ">
						<h2 className=" mb-4  max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						How We Simplify Cheap Accounting



						</h2>
						
						
						<div className=" mb-2  ">
							<h3 className="text-lg font-semibold ">Cutting-Edge Tools</h3>
							<p>
							
We provide access to top-tier accounting software that makes managing your finances easy and efficient. From generating invoices to tracking expenses, our tools are designed to save time and reduce effort.

							</p>
						</div>

						<div className=" mb-2 ">
							<h3 className="text-lg font-semibold ">Step-by-Step Guidance</h3>
							<p>
							
							Whether you’re a new business or an established company, our cheap accountants offer step-by-step support to simplify even the most complex accounting processes.
							</p>
						</div>

						<div className="mb-2  ">
							<h3 className="text-lg font-semibold ">Proactive Advice
							</h3>
							<p>
							
							We go beyond basic accounting by providing actionable insights and recommendations to help you optimize your finances and achieve long-term success.

							</p>
						</div>


					</div>

					
				</div>


				
			</div>
		</>
	);
}
