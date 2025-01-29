
import Image from "next/image";

import img1 from "@/public/1.png";
import img2 from "@/public/2.png";
import img3 from "@/public/local.png";
import img4 from "@/public/4.png";
import img5 from "@/public/5.png";
import img6 from "@/public/6.png";
import { v4 as uuidv4 } from 'uuid';

const steps = [
	{
		title: "Dedicated Support:",
		key: uuidv4(),
		img: img1,
		content: `Work with a knowledgeable, cheap accountant who understands your unique needs.

`,
	},
	{
		title: "Comprehensive Solutions",
		key: uuidv4(),
		img: img4,
		content: ` From bookkeeping to tax returns, our services cover every aspect of cheap accounting.
`,
	},
	{
		title: "Unlimited Guidance",
		key: uuidv4(),
		img: img3,
		content: `Get answers to all your accounting queries without worrying about extra charges.
`,
	},
	{
		title: "Clear Processes",
		key: uuidv4(),
		img: img2,
		content: `  We believe in straightforward and transparent services that make financial management hassle-free.

`,
	},
	{
		title: "Real-Time Tools",
		key: uuidv4(),
		img: img6,
		content: `Access cutting-edge accounting software for better control over your finances.

`,
	},
	// {
	// 	title: "Unlimited Support",
	// 	key: uuidv4(),
	// 	img: img5,
	// 	content:
	// 		"Our friendly team is always available to answer queries and offer guidance on business decisions.",
	// },
];

export default function WhyChooseUs() {
	return (
		<>
			<div className="flex w-full py-20 max-lg:py-8   flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="relative  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center py-2 bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
					Why Choose Affotax for Cheap Accounting Services?


					</h2>
					<span className="mt-4 max-w-2xl text-center text-base leading-relaxed text-gray-800">
					When it comes to managing your finances, affordability and reliability matter. Here’s why businesses and individuals choose our cheap accountants:

					</span>


					<div className="mt-12 gap-8 w-full flex justify-center items-center content-center ">
						<ul className=" grid grid-cols-3 w-full	  gap-8 text-center max-lg:grid-cols-2  ">
							{steps.map((el, index) => {
								return (
									<li key={el.key} className="flex flex-col justify-center items-center gap-4  ">
										<div className="drop-shadow-md  flex justify-center items-center text-4xl font-oswald font-semibold  w-40">
											<Image
												src={el.img}
												cover
												className="  "
											/>
										</div>
										<h3 className="font-semibold text-xl font-poppins max-w-72">
											{el.title}
										</h3>
										<p className="text-sm max-w-72">
											{el.content}
										</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
