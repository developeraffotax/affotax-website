import AboutUs from "@/components/About Us/AboutUs";
import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";



export const metadata = {
   title: 'About Us',
   description: 'Affotax Ltd: Your trusted UK-based accountancy partner for affordable online accounting and tax services. Our expert team works with Companies House and HMRC.',
   metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/about-us`, },
}


export default function AboutPage() {
  return (
     <>
        <AboutUs />
        <TrustPilotReviews />
        <EmailPhone />
     </>
  );
}
