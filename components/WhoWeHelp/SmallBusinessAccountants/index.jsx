
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import HowToGetStarted from "./HowToGetStarted";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";

export const metadata = {
	title: "Accountants for Small Business & Tax Filing Services",
	description:
		"Expert accountants for small business in the UK offering bookkeeping, tax services, payroll, VAT, and company formation. Let us handle your finances!",
};

export default function SmallBusinessAccountants() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				{/* <WhatIsSoleTrader /> */}
				<HowToGetStarted />
				<WhyChooseUs />
				<OurServices />
				<InstantQuoteForm />
				<EmailPhone />
            </div>
		</>
	);
}
