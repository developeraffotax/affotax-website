import ChoosePackage from "@/components/Landing Page/ChoosePackage/ChoosePackage";
import EmailPhone from "@/components/Landing Page/EmailPhone";
import Faqs from "@/components/Landing Page/Faqs/Faqs";
import GetAQuoteSection from "@/components/Landing Page/GetAQuote/GetAQuoteSection";
import HomeTop from "@/components/Landing Page/HomeTop";
import HowItWorks from "@/components/Landing Page/HowItWorks";
import WhyUs from "@/components/Landing Page/WhyUs";
import { connectDB } from "@/lib/connectDB";
import Homepage from "@/lib/Model/Homepage/Homepage";
import LandingPage from "@/lib/Model/LandingPage/LandingPage";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";
import { notFound } from "next/navigation";

export const dynamic = "force-static"; // Disable dynamic rendering (equivalent to `dynamic = false`)

export async function generateStaticParams() {
  await connectDB();
  const slugs = await LandingPage.find().select("slug").lean();
  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  await connectDB();
  const page = await LandingPage.findOne({ slug: params.slug }).lean();

  return {
    title: page?.metaTitle || "Default Title",
    description: page?.metaDescription || "Default Description",
    keywords: page?.keywords?.join(", ") || "default, keywords",
  };
}

export default async function LandingHomePage({ params }) {
  await connectDB();

  const landingPage = await LandingPage.findOne({ slug: params.slug }).lean();
  if (!landingPage) return notFound();
  const homepage = await Homepage.findOne().select("googleReviewsCount");
  const pricing = await ServicePage.findOne({ link: `landing-${landingPage.slug}` }).lean();

   

  return (
    <main className="w-full flex flex-col items-center justify-between max-lg:p-0">
      <HomeTop
        HeroSection={JSON.stringify(landingPage?.HeroSection)}
        googleReviewsCount={JSON.stringify(homepage?.googleReviewsCount ?? 0)}
      />
      <ChoosePackage
        pricingPage={JSON.stringify(landingPage?.PricingSection)}
        pricing={JSON.stringify(pricing)}
      />
      <HowItWorks HowItWorksSection={JSON.stringify(landingPage?.HowItWorksSection)} />
      <WhyUs WhyChooseUsSection={JSON.stringify(landingPage?.WhyChooseUsSection)} />
      <GetAQuoteSection />
      <Faqs FaqSection={JSON.stringify(landingPage?.FaqSection)} />
      <EmailPhone />
    </main>
  );
}
