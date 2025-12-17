import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import ContentWithImage from "./ContentWithImage";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";



export default function Template({ jsonPage }) {
	const page = JSON.parse(jsonPage);

	const { HeroSection, ContentWithImageSection, OurServicesSection, WhyChooseUsSection, } = page;

	return (
		<>
			<div className="w-full font-poppins">
				{HeroSection && <Hero {...HeroSection} />}

				{ContentWithImageSection && ContentWithImageSection.map((el, index) => {
						return (
							<ContentWithImage key={`ContentWithImage-${i}`} {...el} index={index} />
						);
					})}

				{OurServicesSection && ( <OurServices {...OurServicesSection} bg_gradient={ ContentWithImageSection.length % 2 === 0 ? "bg-gradient-to-tr" : "bg-gradient-to-br" } /> )}
				{WhyChooseUsSection && ( <WhyChooseUs {...WhyChooseUsSection} bg_gradient={ ContentWithImageSection.length % 2 === 0 ? "bg-gradient-to-br" : "bg-gradient-to-tr" } /> )}
				<InstantQuoteForm bg_gradient={ ContentWithImageSection.length % 2 === 0 ? "bg-gradient-to-tr" : "bg-gradient-to-br" } />
				<TrustPilotReviews />
				<EmailPhone />
			</div>
		</>
	);
}
