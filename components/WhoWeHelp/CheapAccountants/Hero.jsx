import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HeroImg from "@/public/cheap.png";
import Link from "next/link";

//border-b border-gray-300
export default function Hero() {
	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-start justify-center px-80 max-2xl:px-40 max-xl:px-10 pt-20     bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="w-full max-lg:flex-col items-start justify-center flex border-b border-gray-300 pb-10 ">
					<div className="relative  flex  flex-1 flex-col items-start justify-center  ">
						<h1 className="mt-8 max-lg:mt-0 leading-relaxed  text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  max-lg:text-5xl  font-bold text-transparent sm:max-w-3xl sm:text-6xl">
						Affordable and Cheap Accounting Services
						</h1>
						<span className="mt-8 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
						Welcome to Affotax, your reliable destination for professional cheap accounting services. Whether you're a small business, freelancer, contractor, or an individual, our experienced team of cheap accountants is dedicated to delivering top-notch services tailored to your needs. With our expertise, you get comprehensive financial management that’s both effective and budget-friendly.


						</span>

						<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4   ">
							<Link
								href="/contact-us"
								className="flex flex-row  items-center text-center justify-center gap-x-2 font-semibold rounded-xl hover:scale-105 active:scale-95  text-white px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-all "
							>
								Get a Quote
								<FaRegArrowAltCircleRight className="scale-110 " />
							</Link>
						</div>
					</div>

					<div className="flex-1 flex flex-row justify-start items-start -mt-10  max-lg:m-0 ">
						<Image src={HeroImg} cover className="scale-90" />
					</div>
				</div>
			</div>
		</>
	);
}
