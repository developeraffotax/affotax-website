
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";

import InstantQuoteForm from "./InstantQuoteForm";



export default function SoleTraders() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				<WhatIsSoleTrader />
				{/* <HowToGetStarted />
				<WhyChooseUs /> */}
				<OurServices />
				<InstantQuoteForm />
				<EmailPhone />
            </div>
		</>
	);
}
