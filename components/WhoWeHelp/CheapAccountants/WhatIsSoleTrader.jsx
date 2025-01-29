"use client";

import Image from "next/image";
import HeroImg from "@/public/taxlocal.png";

import { useScroll } from "@react-spring/web";



export default function WhatIsSoleTrader() {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="flex flex-row max-lg:flex-col-reverse max-lg:items-center  gap-16 p-8 justify-center max-lg:h-auto    ">
					

					<div className="mt-4 max-w-2xl  flex   flex-col items-start justify-start  w-[70%] max-lg:w-full  ">
						<h2 className="   leading-relaxed text-center max-lg:text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                        Why Cheap Doesn’t Mean Low Quality


						</h2>
						<span className="mt-4 mb-4  text-start text-lg leading-relaxed text-gray-800">
						Choosing a cheap accountant shouldn’t mean sacrificing quality. At Affotax, we’ve redefined cheap accounting by combining affordability with high standards of service.

						</span>


						<ul>
							<li className="mb-2 "><b>Efficient Technology:</b> By leveraging cloud-based tools, we streamline processes and reduce costs, passing the savings to you. </li>
							<li className="mb-2 "><b>Transparent Practices: </b>With no hidden fees, you can trust that what you see is what you get. </li>
							<li className="mb-5 "><b>Experienced Professionals:</b> Our cheap accountants have years of expertise, ensuring accuracy and reliability in all services.
							</li>


						</ul>

						<h3 className="text-lg font-semibold ">Dedicated Cheap Accountants for Every Client</h3>
							<p className="mb-3 ">
							At Affotax, we prioritize building lasting relationships with our clients. Every client is paired with a dedicated cheap accountant who provides personalized support and guidance. This ensures:

							</p>
						<ul className="list-disc ">
							<li className="mb-2 ">Consistency in service delivery.
							</li>
							<li className="mb-2 ">Tailored advice that aligns with your financial goals
							. </li>
							<li className="mb-2 ">A single point of contact for all your queries and concerns.

							</li>


						</ul>

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
