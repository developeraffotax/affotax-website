


import dynamic from "next/dynamic";

const OurServicesSection = dynamic(
  () => {
    return import("@/components/Admin/WhoWeHelpPages/OurServicesSection");
  },
  { ssr: false }
);

export default function OurServicesSectionPage() {
	return <OurServicesSection />;
}
