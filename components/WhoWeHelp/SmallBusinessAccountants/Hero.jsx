import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HeroImg from "@/public/Accountant1.PNG";
import Link from "next/link";

//border-b border-gray-300
export default function Hero() {
	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-start justify-center px-80 max-2xl:px-40 max-xl:px-10 pt-20     bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="w-full max-lg:flex-col items-start justify-center flex border-b border-gray-300 pb-10 ">
				<div className="relative  flex  flex-1 flex-col items-start justify-center  ">
					<h1 className="mt-8 max-lg:mt-0 leading-relaxed  text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  max-lg:text-5xl  font-bold text-transparent sm:max-w-3xl sm:text-6xl">
					Accountants for Small Business & Tax Filing Services
					</h1>
					<span className="mt-8 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
					Running a small commercial enterprise is exhilarating. It means; you're the captain of your ship, charting your direction to success. But budget, taxes, and guidelines can end up overwhelming, diverting your attention from success. That's where we come in.
					<br/> <br/>

					At Affotax, we're captivated with empowering small businesses in the UK. We don't just cope with your numbers; we lift you up financially, providing expert help and a proactive technique to keep your price range on course.





					</span>

					<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4 ">
						<Link
							href="/contact-us"
							className="flex flex-row items-center text-center justify-center gap-x-2 font-semibold rounded-lg text-white px-8 py-3 bg-orange-500 hover:bg-orange-600 animate-bounce transition-all "
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
