"use client"

import { connectDB } from "@/lib/connectDB";
import ChoosePackage from "./Subpages/ChoosePackage/ChoosePackage";
import EmailPhone from "./Subpages/EmailPhone";
import HomeTop from "./Subpages/HomeTop";
import HowItWorks from "./Subpages/HowItWorks";
import Reviews from "./Subpages/Reviews";
import ServicesTo from "./Subpages/ServicesTo";
import WhyUs from "./Subpages/WhyUs";
import PricingPage from "@/lib/Model/PricingPage/PricingPage";


export default function HomeView({data, handlers}) {

  // const db = await connectDB();

	// const pricingPage = await PricingPage.findOne();

 

  return (
    <main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
        <HomeTop data={data.HeroSection} handlers={handlers.setHeroSection}/>
        {/* <ChoosePackage pricingPage={JSON.stringify(pricingPage)}/> */}
        <HowItWorks data={data.HowItWorksSection} handlers={handlers.setHowItWorksSection}/>
        <WhyUs data={data.WhyChooseUsSection} handlers={handlers.setWhyChooseUsSection} ctaData={data.CTASection} ctaHandlers={handlers.setCTASection}/>
        <ServicesTo data={data.LinksSection} handlers={handlers.setLinksSection}/>
        {/* <Reviews />
        <EmailPhone /> */}
    </main>
  );
}




