
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import HowToGetStarted from "./HowToGetStarted";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import WhatIsSoleTrader from "./WhatIsSoleTrader";



export default function SmallBusinessAccountants() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				<WhatIsSoleTrader />
				<HowToGetStarted />
				<WhyChooseUs />
				{/* <OurServices /> */}
				<InstantQuoteForm />
				<EmailPhone />
            </div>
		</>
	);
}
