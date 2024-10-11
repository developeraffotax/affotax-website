
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import WhatIsSoleTrader from "./WhatIsSoleTrader";

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
				<EmailPhone />
            </div>
		</>
	);
}
