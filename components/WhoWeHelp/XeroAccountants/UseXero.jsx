"use client";

import Image from "next/image";
import HeroImg from "@/public/xero1.png";





export default function UseXero() {
	

	return (
		<>
			<div className="flex w-full  font-poppins  flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="flex flex-row max-lg:flex-col-reverse max-lg:items-center  gap-16 p-8 justify-center max-lg:h-auto   ">
					

					<div className="mt-4 max-w-2xl  flex   flex-col items-start justify-start  w-[60%] max-lg:w-full  ">
						<h2 className="   leading-relaxed text-start max-lg:text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						Use Xero Accounting Software to Make Your Small Business Better

						</h2>
						<span className="mt-4  text-start text-xl leading-relaxed text-gray-800">
						Xero is designed to cater to the unique needs of small businesses. Its powerful features and intuitive interface make it the perfect tool for <b>managing your finances efficiently.</b><br/> <br/> By leveraging Xero, you can streamline your accounting processes, reduce administrative burdens, and gain valuable insights into your business performance. This allows you to focus on growth and <b>profitability,</b> ensuring your small business thrives in a competitive market.

						</span>

						<h2 className="drop-shadow-black   mt-4 leading-relaxed text-center max-lg:text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
						Reasons You’ll Love Xero

						</h2>
						<ul className="list-disc mt-2">
							<li><strong>Faster payments:</strong> Get paid faster with online invoicing and reminders.</li>
							<li><strong>Online file storage:</strong> Manage your documents with secure online storage.</li>
						</ul>
					</div>

					

					<div className="   flex flex-row justify-start text-start items-start rounded-[300px]  w-[40%]  max-lg:w-[50%] ">
						<Image src={HeroImg} cover className="scale-125    " />
					</div>

				</div>




				
				








				
			</div>
		</>
	);
}
