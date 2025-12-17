
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";

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
				<TrustPilotReviews />
				<EmailPhone />
            </div>
		</>
	);
}
