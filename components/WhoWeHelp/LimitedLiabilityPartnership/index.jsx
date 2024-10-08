
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import WhatIsSoleTrader from "./WhatIsSoleTrader";

export const metadata = {
	title: "Accounting & Tax Services for LLPs in the UK - Affotax",
	description:
		"Expert accounting and tax solutions for UK LLPs. Affotax ensures boosts profits, and provides ongoing support. Contact us for a free consultation today.",
};

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
