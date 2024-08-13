
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import HowToGetStarted from "./HowToGetStarted";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";

export const metadata = {
	title: "Xero Accountants UK - Tax Filing & Business Growth Experts",
	description:
		"Unlock Xero's potential with Affotax's expert accountants. Streamline your finances, ease bookkeeping, and get HMRC-compliant tax filing.",
};

export default function XeroAccountants() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				<WhatIsSoleTrader />
				<HowToGetStarted />
				{/* <WhyChooseUs /> */}
				<OurServices />
				<InstantQuoteForm />
				<EmailPhone />
            </div>
		</>
	);
}
