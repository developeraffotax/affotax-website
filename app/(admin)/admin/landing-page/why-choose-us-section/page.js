import dynamic from "next/dynamic";

const WhyChooseUsSection = dynamic(
	() => {
		return import("@/components/Admin/LandingPages/WhyChooseUsSection");
	},
	{ ssr: false }
);

export default function WhyChooseUsSectionPage() {
	return <WhyChooseUsSection />;
}
