
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import HowToGetStarted from "./HowToGetStarted";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";

export const metadata = {
	title: "Contractor Accounting & Tax Filing Services | Affotax",
	description:
		"Effortless accounting and tax filing for contractors. Trust AffoTax for IR35 compliance, tax planning, and personalized service. Transparent, fixed-fee pricing.",
};

export default function ContractorAccountants() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				{/* <WhatIsSoleTrader /> */}
				{/* <HowToGetStarted /> */}
				<WhyChooseUs />
				<OurServices />
				<InstantQuoteForm />
				<EmailPhone />
            </div>
		</>
	);
}
