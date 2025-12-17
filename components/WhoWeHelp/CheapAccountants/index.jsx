
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import WhatIsSoleTrader2 from "./WhatIsSoleTrader2";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";



export default function CheapAccountants() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				<OurServices />
				<WhatIsSoleTrader />
				
				<WhyChooseUs />
				<WhatIsSoleTrader2 />
				<InstantQuoteForm />
				<TrustPilotReviews />
				<EmailPhone />
            </div>
		</>
	);
}
