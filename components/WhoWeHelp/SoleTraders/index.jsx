
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import HowToGetStarted from "./HowToGetStarted";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import Pros from "./Pros";


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
				<EmailPhone />
            </div>
		</>
	);
}
