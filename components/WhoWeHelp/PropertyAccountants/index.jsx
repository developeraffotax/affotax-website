
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";

import InstantQuoteForm from "./InstantQuoteForm";

export const metadata = {
	title: "UK Sole Traders Services for Accounting & Tax Filing",
	description:
		"UK sole trader business with Affotax's expert accounting and tax filing services. Simplify your finances, maximize profits, and ensure HMRC compliance",
};

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
