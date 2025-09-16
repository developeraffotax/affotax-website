"use client"

import { QuoteFormContext } from "@/app/(user)/layout";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Form from "./Form";
import { BottomCenterElement, GetAQuoteImage, TopLeftElement } from "./svgs";

export default function HomeGetAQuoteSection() {
	const quoteContext = useContext(QuoteFormContext)

	return (
		<div className="bg-transparent w-full   ">
			<div className="w-full    ">
				<div
					className="
								w-full relative overflow-hidden bg-[#FFF6F6] shadow-xl sm:rounded-3xl
								flex flex-col lg:flex-row items-center justify-between
								gap-8
								px-4 py-8     /* mobile (default) */
								sm:px-6 sm:py-8  /* small screens ≥640px */
								md:px-8 md:py-8  /* medium screens ≥768px */
								lg:px-10 lg:py-10 /* large screens ≥1024px */
								xl:px-12 xl:py-12 /* extra-large screens ≥1280px */
								2xl:px-16 2xl:py-12 /* extra-large screens ≥1536px */
								[@media(min-width:1800px)]:px-28 [@media(min-width:1800px)]:py-12 /* extra-large screens ≥1536px */
							"
				>					<BottomCenterElement />


					<TopLeftElement />
					<div className="mx-auto  space-y-4 max-w-lg text-center lg:mx-0 lg:flex-auto  lg:text-left  lg:w-[50%]" >

						<div className="max-lg:flex max-lg:justify-center">
							<GetAQuoteImage />
						</div>

						<h2 className="text-balance text-3xl font-semibold tracking-normal  text-orange-500 font-poppins  leading-tight"> Ready to chat with the UK's Online Accountants?  </h2>
						<p className="  text-pretty text-justify text-lg/8 text-gray-700 font-poppins leading-normal ">
							Ready to streamline your accounting and tax filings? Contact Affotax today for expert guidance from a professional online accountant UK. Get a free quote or send us a message we’re here to help!
						</p>

					</div>

					<div className="relative  lg:w-[50%]  w-full max-w-[400px] ">

						<Form />
					</div>
				</div>
			</div>
		</div>
	);
}






