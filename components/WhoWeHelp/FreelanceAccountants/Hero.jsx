'use client'

import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HeroImg from "@/public/free1.PNG";
import { useSpring, animated } from '@react-spring/web'


//border-b border-gray-300
export default function Hero({scrollToForm}) {

	const springs = useSpring({
		from: {  opacity: 0, scale: 0},
		to: {  opacity: 1, scale: 1 },
	  })

	  
	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-start justify-center px-80 max-2xl:px-40 max-xl:px-10 pt-20     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="w-full max-lg:flex-col items-start justify-center flex border-b border-gray-300 pb-10 ">
				<div className="relative  flex  flex-1 flex-col items-start justify-center  ">
					<h1 className="mt-8 max-lg:mt-0 leading-relaxed  text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  max-lg:text-5xl  font-bold text-transparent sm:max-w-3xl sm:text-6xl">
					Expert Accountants for Freelancers <br/> Your Financial Partner
					</h1>
					<span className="mt-8 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
					Welcome to our dedicated page for freelancers! As a freelancer, managing your finances can be overwhelming, but you don’t have to do it alone. Our team of expert accountants for freelancers is here to provide you with the support and guidance you need to keep your finances in order. With our affordable accountants, you can focus on what you do best while we handle the rest. 
					. <br/> <br/>


						Are you a sole trader navigating the excitement of
						owning your own business and the challenge of managing
						paperwork? At Affotax, we understand your unique needs
						and are here to simplify your accounting and tax filing
						processes. Get a quote today and let us help you focus
						on growing your business. 


					</span>

					<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4  ">

					<animated.div
      style={{
       ...springs
      }}
   >

	  	
<div
							// href="/contact-us"
							onClick={scrollToForm }
							className="flex cursor-pointer flex-row items-center text-center justify-center gap-x-2 font-semibold rounded-xl text-white px-8 py-3 bg-orange-500 hover:bg-orange-600  transition-all "
						>
							Get a Quote
							<FaRegArrowAltCircleRight className="scale-110 " />
						</div>





   </animated.div>

					</div>
				</div>

				<div className="flex-1 flex flex-row justify-start items-start -mt-10  max-lg:m-0 ">
					<Image src={HeroImg} cover className="" />
				</div>
				</div>
			</div>
		</>
	);
}
