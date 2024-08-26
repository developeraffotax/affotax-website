'use client'


import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import HowToGetStarted from "./HowToGetStarted";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import { useRef } from "react";

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
			<div className="w-full ">
                <Hero getQuoteClickHandler={getQuoteClickHandler}/>
				<WhatIsSoleTrader />
				<HowToGetStarted />
				{/* <WhyChooseUs /> */}
				<OurServices />
				<div className="w-full" ref={formRef}>
				<InstantQuoteForm />
				</div>
				<EmailPhone  />
            </div>
		</>
	);
}
