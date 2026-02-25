import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";


export default function Hero({heading, html, imageUrl, btnText, btnLink}) {


	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-start justify-center px-80 max-2xl:px-40 max-xl:px-10 pt-20     bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="w-full max-lg:flex-col items-start justify-center flex border-b border-gray-300 pb-10 ">
				<div className="relative  flex  flex-1 flex-col items-start justify-center  ">
					<h1 className="mt-8 pb-8 max-lg:mt-0 leading-relaxed  text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  max-lg:text-5xl  font-bold text-transparent sm:max-w-3xl sm:text-6xl">
					{heading}
					</h1>
					<span className=" max-w-2xl text-start text-xl leading-relaxed text-gray-800" dangerouslySetInnerHTML={{__html: html ? String(html) : "",}}>
						


					</span>

					<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4 ">
						<Link
							href={btnLink}
							className="flex flex-row items-center text-center justify-center gap-x-2 font-semibold rounded-lg text-white px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-all "
						>
							{btnText}
							<FaRegArrowAltCircleRight className="scale-110 " />
						</Link>
					</div>
				</div>

				<div className="flex-1 flex flex-row justify-start items-start -mt-10  max-lg:m-0 ">
					{/* <Image src={imageUrl} cover className="scale-90" height={500} width={500} /> */}
				</div>
				</div>
			</div>
		</>
	);
}
