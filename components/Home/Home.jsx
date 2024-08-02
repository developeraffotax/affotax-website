

import ChoosePackage from "./Subpages/ChoosePackage";
import EmailPhone from "./Subpages/EmailPhone";
import HomeTop from "./Subpages/HomeTop";
import HowItWorks from "./Subpages/HowItWorks";
import Reviews from "./Subpages/Reviews";
import ServicesTo from "./Subpages/ServicesTo";
import WhyUs from "./Subpages/WhyUs";


export default function Home() {
  return (
    <main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
        <HomeTop />
        <ChoosePackage />
        <HowItWorks />
        <WhyUs />
        <ServicesTo />
        <Reviews />
        <EmailPhone />
    </main>
  );
}




