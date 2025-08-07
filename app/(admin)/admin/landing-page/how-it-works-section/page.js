import dynamic from "next/dynamic";

const HowItWorksSection = dynamic(
	() => {
		return import("@/components/Admin/LandingPages/HowItWorksSection");
	},
	{ ssr: false }
);

export default function HowItWorksSectionPage() {
	return <HowItWorksSection />;
}
