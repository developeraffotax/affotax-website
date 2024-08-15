
import Image from "next/image";

import CloudAcc from "@/public/accountantCheap.PNG";





export default function WhatIsSoleTrader2() {
	

	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				

				<div className="flex flex-row max-lg:flex-col max-lg:items-center  gap-10 w-full justify-center items-center max-lg:h-auto  border-b border-black/10 pb-8 max-lg:p-12">

				<div className="   flex flex-row justify-start text-start items-start   overflow-hidden w-[30%] max-lg:w-[50%]">
						<Image src={CloudAcc} cover className="drop-shadow-lg" />
					</div>


					<div className="   flex   flex-col items-start justify-center  ">
						<h2 className="  max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                        Can you trust an affordable accountant?


						</h2>
						<span className="mt-4 max-w-2xl text-start text-lg leading-relaxed text-gray-800">
                        Choosing a cost-effective accountant requires careful consideration. There are reputable cheap accountants, just as there are excellent but pricey services. The key lies in finding a match for your business type and needs. Some specialize in sole traders, others in corporations. Ensure they hold qualifications like <strong>AAT, ACCA, or ACA, and look for 'chartered' and 'technician' designations.</strong> Opt for services offering a dedicated accountancy team for consistency.<br/> <br/> Verify they handle your required services adequately—especially if you're a limited company. Monthly fee models often provide better value and more regular accountant interaction. Consider whether they include online accounting software in their package. Small firms often offer a more personalized touch, understanding small business challenges firsthand. <b>Check reviews and how they handle feedback to gauge their reliability and client satisfaction.</b>


						</span>
					</div>

					
				</div>


				
			</div>
		</>
	);
}
