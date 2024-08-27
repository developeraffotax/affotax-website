
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";

export const metadata = {
	title: "Expert Accounting & Accountant for Limited Company",
	description:
		"Limited Company's finances with Affotax's comprehensive accounting and tax services. Our accountant for limited companies provides simplified bookkeeping, VAT returns, etc.",
};

export default function Partnerships() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				{/* <WhatIsLimitedCompany />
				<HowToGetStarted /> */}
				<WhyChooseUs />
				<OurServices />
				<InstantQuoteForm />
				<EmailPhone />
            </div>
		</>
	);
}
