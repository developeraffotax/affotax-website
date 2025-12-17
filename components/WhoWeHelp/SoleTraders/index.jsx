
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import HowToGetStarted from "./HowToGetStarted";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import Pros from "./Pros";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";


export default function SoleTraders() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				<WhatIsSoleTrader />
				<HowToGetStarted />
				<WhyChooseUs />
				<OurServices />
				<Pros />
				<InstantQuoteForm />
				<TrustPilotReviews />
				<EmailPhone />
            </div>
		</>
	);
}
