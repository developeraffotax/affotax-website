"use client";

import Image from "next/image";
import HeroImg from "@/public/pros.png";
import SmallBiz2 from "@/public/smallbiz2.png";
import Problems from "@/public/problems.png";




export default function Pros() {
	

	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="flex flex-row max-lg:flex-col-reverse max-lg:items-center  gap-16 p-8 justify-center max-lg:h-auto  h-[50vh]  ">
					

					<div className="mt-4 max-w-2xl  flex   flex-col items-start justify-start  w-[70%] max-lg:w-full  ">
						<h2 className="   leading-relaxed text-start max-lg:text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						Pros and Cons of Setting Your Business Up as a Sole Trader

						</h2>

						<ul className=" mt-4 list-disc">
							<h3 className="font-semibold">Pros</h3>
							<li>Full control over business decisions.</li>
							<li>Simple and cost-effective setup process.</li>
							<li>Fewer administrative burdens.</li>
						</ul>

						<ul className=" mt-4 list-disc"> 
						<h3 className="font-semibold">Cons</h3>
							<li>Unlimited liability for business debts.</li>
							<li>Potentially higher personal tax rates on profits.</li>
							<li>Challenges in raising capital and expanding.</li>
						</ul>


						
					</div>

					<div className="   flex flex-row justify-start text-start items-start rounded-[300px]  w-[30%]  max-lg:w-[50%] ">
						<Image src={HeroImg} cover className="scale-125    " />
					</div>

				</div>




				<div className="flex flex-row max-lg:flex-col max-lg:items-center gap-10 w-full p-12  justify-center items-center max-lg:h-auto h-[40vh] bg-slate-200/30 rounded-2xl shadow-lg">

				<div className="   flex flex-row  justify-start text-start items-start  rounded-2xl w-[30%]  max-lg:w-[70%] overflow-hidden     ">
						<Image src={SmallBiz2} cover className="   " />
					</div>


					<div className="relative   flex   flex-col items-start justify-center  ">
						<h2 className="  max-w-sm leading-relaxed text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						Benefits You Can Expect


						</h2>
						<ul className="mt-4">
							{
								[
									{
										heading: 'Focus on Your Business',
										content: ' Free up your time and energy by letting us handle accounting and tax complexities.'
									},
									{
										heading: 'Reduce Stress',
										content: 'Rest easy knowing your finances are in good hands and compliant with HMRC regulations.'
									},
									{
										heading: 'Maximise Profits',
										content: 'Benefit from our tax optimisation strategies and financial insights.'
									},
									{
										heading: 'Gain Control:',
										content: "Our comprehensive reports provide an accurate picture of your business's financial performance."
									},
									{
										heading: 'Make Informed Decisions',
										content: ' Strategic financial advice tailored to your business goals.'
									}
								].map((el, index) => {
									return <li key={index} className="mt-2"> 
										<h3 className="font-semibold inline">{el.heading} : </h3>
										<p className="inline">{el.content}</p>
									</li>
								})
							}
						</ul>
					</div>

					
				</div>




				






				

				<div className="flex flex-row max-lg:flex-col max-lg:items-center gap-10 w-full p-12  justify-center items-center max-lg:h-auto h-[40vh] bg-slate-200/30 rounded-2xl shadow-lg">

				<div className="   flex flex-row  justify-start text-start items-start  rounded-2xl w-[30%]  max-lg:w-[70%] overflow-hidden     ">
						<Image src={Problems} cover className="   " />
					</div>


					<div className="relative   flex   flex-col items-start justify-center  ">
						<h2 className="  max-w-sm leading-relaxed text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						Company Registration Issues

						</h2>
						<span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800 ">
						If planning to transition to a limited company, consider the implications of company formation, corporation tax, and the benefits of limited liability protection.

						</span>
					</div>

					
				</div>





















				
			</div>
		</>
	);
}
