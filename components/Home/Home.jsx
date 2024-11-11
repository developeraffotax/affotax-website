

import { connectDB } from "@/lib/connectDB";
import ChoosePackage from "./Subpages/ChoosePackage/ChoosePackage";
import EmailPhone from "./Subpages/EmailPhone";
import HomeTop from "./Subpages/HomeTop";
import HowItWorks from "./Subpages/HowItWorks";
import Reviews from "./Subpages/Reviews";
import ServicesTo from "./Subpages/ServicesTo";
import WhyUs from "./Subpages/WhyUs";
import PricingPage from "@/lib/Model/PricingPage/PricingPage";
import Homepage from "@/lib/Model/Homepage/Homepage";


export default async function Home() {

  const db = await connectDB();

	const pricingPage = await PricingPage.findOne();

  const homepage = await Homepage.findOne();


  return (
    <main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
        <HomeTop HeroSection={JSON.stringify(homepage?.HeroSection)}/>
         <ChoosePackage pricingPage={JSON.stringify(pricingPage)}/>
        <HowItWorks HowItWorksSection={JSON.stringify(homepage?.HowItWorksSection)}/>
        <WhyUs WhyChooseUsSection={JSON.stringify(homepage?.WhyChooseUsSection)} CTASection={JSON.stringify(homepage?.CTASection)}/>
        <ServicesTo LinksSection={JSON.stringify(homepage?.LinksSection)}/>
        <Reviews />
        <EmailPhone />
    </main>
  );
}




