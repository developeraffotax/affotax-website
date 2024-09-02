"use client";

import Image from "next/image";
import SmallBiz2 from "@/public/smallbiz2.png";


export default function WhatIsSoleTrader() {
	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="flex flex-row gap-8 max-lg:flex-col-reverse  max-lg:items-center    w-full justify-center items-center   bg-slate-200/30 rounded-2xl shadow-lg p-12 ">
					<div className="  w-[50%] max-w-2xl max-lg:w-full ">
						<h2 className="  leading-relaxed py-4 text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
							Benefits of Partnering with Affotax
						</h2>
						<ul className="list-disc ">
							<li>
								<strong>Peace of Mind:</strong> Focus on running
								your business with the confidence of knowing
								your finances are in expert hands.
							</li>
							<li>
								<strong>Increased Profitability:</strong> Our
								tax planning strategies and financial insights
								will help optimise your finances and maximise
								profits.{" "}
							</li>
							<li>
								<strong>Improved Efficiency:</strong> Be
								efficient by saving time and resources with the
								help of our cloud-based solutions.
							</li>
							<li>
								<strong>Reduced Risk of Errors:</strong> We
								ensure your financial records are accurate and
								compliant with regulations.
							</li>
							<li>
								<strong>Strategic Financial Guidance:</strong>{" "}
								We provide valuable insights and recommendations
								to help you make informed business decisions.
							</li>
						</ul>

						<h3 className="font-semibold font-poppins text-xl mt-4 ">
							Ready to Streamline Your LLP's Finances?
						</h3>
						<p>
							Contact Affotax today for a free consultation. We'll
							discuss your specific needs and tailor a service
							package that empowers your LLP for long-term
							success.
						</p>
					</div>

					<div className="    w-[40%] max-lg:w-[70%] ">
						<Image src={SmallBiz2} cover className=" " />
					</div>
				</div>
			</div>
		</>
	);
}
