import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HeroImg from "@/public/Accountant1.png";
import Link from "next/link";

//border-b border-gray-300
export default function Hero() {
	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-start justify-center px-80 max-2xl:px-40 max-xl:px-10 pt-20     bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="w-full max-lg:flex-col items-start justify-center flex border-b border-gray-300 pb-10 ">
				<div className="relative  flex  flex-1 flex-col items-start justify-center  ">
					<h1 className="mt-8 max-lg:mt-0 leading-relaxed  text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  max-lg:text-5xl  font-bold text-transparent sm:max-w-4xl sm:text-6xl">
					Contractors Accounting & Tax Filing Services
					</h1>
					<span className="mt-8 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
					Alright, fellow contractor! Fancy a cuppa while we chat finances? We understand that you're a whizz at what you do – smashing deadlines, building empires (well, one happy client at a time), and revelling in the freedom of being your own boss, but when it comes to the murky world of tax and accounting, things can get rough, mate.<br/> <br/>


						Here at Affotax, we're a bunch of friendly (and dare we say, competent) accountants with years of experience in helping contractors. You need to sit back and relax now as we know how to find our way around in the IR35 jungle. So let us help you stay tax-efficient and be victorious.


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
