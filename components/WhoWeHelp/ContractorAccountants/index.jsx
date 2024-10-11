
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";

export default function ContractorAccountants() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				{/* <WhatIsSoleTrader /> */}
				{/* <HowToGetStarted /> */}
				<WhyChooseUs />
				<OurServices />
				<InstantQuoteForm />
				<EmailPhone />
            </div>
		</>
	);
}
