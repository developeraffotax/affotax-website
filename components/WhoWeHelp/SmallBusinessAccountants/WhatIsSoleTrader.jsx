"use client";

import Image from "next/image";
import HeroImg from "@/public/timeperiod.png";
import SmallBiz2 from "@/public/smallbiz2.png";






export default function WhatIsSoleTrader() {
	

	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="flex flex-row max-lg:flex-col-reverse max-lg:items-center  gap-8  justify-center max-lg:h-auto  shadow-md rounded-xl   ">
					

					<div className="mt-4 max-w-2xl  flex   flex-col items-start justify-center  w-[70%] max-lg:w-full ">
						<h2 className="   leading-relaxed text-center max-lg:text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						Beyond the Numbers
						</h2>
						<span className="mt-4  text-start text-xl leading-relaxed text-gray-800">
						We believe in constructing lengthy-time period relationships with our customers. We're here for you every step of the way, having clear conversation, active responses, and a proactive approach that anticipates your needs.

						</span>
					</div>

					<div className="   flex flex-row justify-start text-start items-start rounded-[300px]  w-[30%]  max-lg:w-[50%] ">
						<Image src={HeroImg} cover className="    " />
					</div>

				</div>








				






				<div className="flex flex-row gap-8 max-lg:flex-col-reverse  max-lg:items-center    w-full justify-center items-center   bg-slate-200/30 rounded-2xl shadow-lg p-12 ">
					

					<div className="  w-[70%] max-w-2xl max-lg:w-full ">
						<h2 className="  leading-relaxed text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						Additionally, consider incorporating these elements:

						</h2>


							<ul className="mt-4">

								{

[{
	heading: 'Client testimonials:',
	content: `Showcase the positive experiences of satisfied small business clients.

`,


},

{
	heading: 'Free downloadable resources:',
	content: `Offer valuable guides or whitepapers on common small business accounting and tax topics.


`

},
{
	heading: 'Case studies:',
	content: `Share success stories of how you've helped other businesses overcome challenges.

`

}
].map((el, index) => {
	return <li key={index} className="" > 

		<h3 className="font-semibold text-xl  inline">{el.heading}</h3>
		<p className="ml-2 text-lg inline"> 
			{el.content}
		</p>

	 </li>
})


								}


							</ul>





						<span className="mt-12 font-semibold  text-start text-lg leading-relaxed text-gray-800">
						By highlighting these aspects, you'll establish your firm as a trusted resource for small businesses in the UK, empowering them to achieve sustainable growth.

						</span>
					</div>

					<div className="    w-[30%] max-lg:w-[70%] ">
						<Image src={SmallBiz2} cover className=" " />
					</div>


				</div>






















				


				
			</div>
		</>
	);
}
