import { QuoteFormContext } from "@/app/(user)/layout";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function GetAQuoteSection() {
    const quoteContext = useContext(QuoteFormContext)

	return (
		<div className="bg-transparent w-full px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-0">
			<div className="mx-auto container py-8  ">
				<div className="w-full relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex-row flex-col flex items-center justify-between  lg:gap-x-20 lg:px-24 lg:pt-0">
					<svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" > <circle r={512} cx={512} cy={512} fill="url(#purple-blue-gradient)" fillOpacity="0.7" /> <defs> <radialGradient id="purple-blue-gradient"> <stop stopColor="#6A5ACD" /> <stop offset={1} stopColor="#00BFFF" /> </radialGradient> </defs> </svg>

					<div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left  lg:w-[50%]" >
						<h2 className="text-balance text-3xl font-semibold tracking-normal text-white  font-poppins  leading-tight"> Simplify your Tax Filing with{" "} <span className="bg-gradient-to-br from-orange-400 via-orange-500 via-50% to-orange-700 bg-clip-text text-transparent"> Affotax </span>{" "} — Let's Talk Today! </h2>
						<p className="mt-6 text-pretty text-lg/8 text-gray-300 font-poppins leading-normal ">
							Have questions or need personalized support? Our
							team is here to help you every step of the way—don't
							hesitate to reach out!
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
							<button
                                onClick={quoteContext.showModal}
								href="#"
								className=" bg-gradient-to-br from-orange-400 via-orange-500 via-50% to-orange-600 text-white rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								Get a Quote
							</button>
							<Link
								href="/contact-us"
								className="text-sm/6 font-semibold text-white"
							>
								Chat with Us <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>

					<div className="relative  lg:w-[50%]  w-full max-w-[400px] ">
						<Image
							alt="quote contact us "
							src="/contactQuote.png"
							width={500}
                            height={500}
							className="max-w-none   w-full  "
						/>
					</div>
				</div>
			</div>
		</div>
	);
}






//   <svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" > <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" /> <defs> <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641"> <stop stopColor="#7775D6" /> <stop offset={1} stopColor="#E935C1" /> </radialGradient> </defs> </svg>
