
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhatIsSoleTrader from "./WhatIsSoleTrader";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import WhatIsSoleTrader2 from "./WhatIsSoleTrader2";


export default function AccountantsNearMe() {
	return (
		<>
			<div className="w-full ">
                <Hero />
				<OurServices />
				<WhatIsSoleTrader />
				
				<WhyChooseUs />
				<WhatIsSoleTrader2 />
				<InstantQuoteForm />
				<EmailPhone />
            </div>
		</>
	);
}
