import dynamic from "next/dynamic";

const HeroSection = dynamic(
	() => {
		return import("@/components/Admin/LandingPages/HeroSection");
	},
	{ ssr: false }
);

export default function HeroSectionPage() {
	return <HeroSection />;
}
