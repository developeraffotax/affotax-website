
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import WhatIsSoleTrader from "./WhatIsSoleTrader";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";

;

export default function LimitedLiabilityPartnership() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				
				{/* <HowToGetStarted /> */}
				<WhyChooseUs />
				<WhatIsSoleTrader />
				<OurServices />
				<InstantQuoteForm />
				<TrustPilotReviews />
				<EmailPhone />
            </div>
		</>
	);
}
