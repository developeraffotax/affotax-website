
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import HowToGetStarted from "./HowToGetStarted";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import WhatIsLimitedCompany from "./WhatIsLimitedCompany";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";


export default function LimitedCompanies() {
	return (
		<>
			<div className="w-full font-poppins   ">
                <Hero />
				<WhatIsLimitedCompany />
				<HowToGetStarted />
				<WhyChooseUs />
				<OurServices />
				<InstantQuoteForm />
				<TrustPilotReviews />
				<EmailPhone />
            </div>
		</>
	);
}
