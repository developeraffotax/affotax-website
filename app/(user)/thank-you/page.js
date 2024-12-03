'use client'

import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { QuoteFormContext } from "../layout";






export default function ThankYouPage() {

	const quoteContext = useContext(QuoteFormContext);


	useEffect(() => {
		quoteContext?.handleCancel();
		const form = document?.getElementById('quote-form');
		form.reset();
	}, [])



	return (
		<>
        <div className="h-[60vh] w-full bg-gray-50 ">
			<div className="h-full lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto container flex gap-8 items-center py-16">
				<div className="flex flex-col gap-4 text-black px-12  rounded-lg border border-orange-300 shadow-xl shadow-orange-400/30 py-12">
					<h5 className="text-sm text-orange-500 font-semibold">
						Affotax
					</h5>
					<div className="w-full flex gap-4 items-center justify-start">
						<div className="text-5xl font-semibold uppercase font-poppins  ">
							Thank You
						</div>
						<hr className="w-[50%] h-1 rounded-full border-t-orange-500 bg-orange-500" />
					</div>

					<p className="text-lg font-Montserrat  ">
						Thank you for reaching out to us! We’ve received your
						message and will review it carefully. Our team will get
						back to you as soon as possible to assist with your
						inquiry.
					</p>

					<div className="flex gap-4 justify-center mt-4">
						{/* <button className="w-full px-4 py-1 border-2 border-orange-500 rounded-sm">Show More</button> */}
						<Link href="/" className="w-full text-center ">
                        <button className="w-[40%] text-white px-4  font-poppins  bg-orange-500 rounded-md py-2" >
							Go Back to Homepage
						</button></Link>
					</div>
				</div>
			</div>
		</div>
        
        <EmailPhone />
        </>
	);
}
