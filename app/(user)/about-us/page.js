import AboutUs from "@/components/About Us/AboutUs";
import EmailPhone from "@/components/Home/Subpages/EmailPhone";



export const metadata = {
   title: 'About Us',
   description: 'Affotax Ltd: Your trusted UK-based accountancy partner for affordable online accounting and tax services. Our expert team works with Companies House and HMRC.'
}


export default function AboutPage() {
  return (
     <>
        <AboutUs />
        <EmailPhone />
     </>
  );
}
