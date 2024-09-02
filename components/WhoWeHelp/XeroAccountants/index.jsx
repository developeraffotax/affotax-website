'use client'


import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import HowToGetStarted from "./HowToGetStarted";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";
import InstantQuoteForm from "./InstantQuoteForm";
import { useRef } from "react";
import UseXero from "./UseXero";

export const metadata = {
	title: "Xero Accountants UK - Tax Filing & Business Growth Experts",
	description:
		"Unlock Xero's potential with Affotax's expert accountants. Streamline your finances, ease bookkeeping, and get HMRC-compliant tax filing.",
};

export default function XeroAccountants() {

	const formRef = useRef()

	const getQuoteClickHandler = () => {
		formRef.current.scrollIntoView({
			behavior: "smooth",
			block: 'center'
		})
	}


	return (
		<>
			<div className="w-full font-poppins ">
                <Hero getQuoteClickHandler={getQuoteClickHandler}/>
				<WhatIsSoleTrader />
				<HowToGetStarted />
				{/* <WhyChooseUs /> */}
				<OurServices />
				<UseXero />
				<div className="w-full" ref={formRef}>
				<InstantQuoteForm />
				</div>
				<EmailPhone  />
            </div>
		</>
	);
}
