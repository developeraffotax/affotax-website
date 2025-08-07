import dynamic from "next/dynamic";

const FaqSection = dynamic(
	() => {
		return import("@/components/Admin/LandingPages/FaqSection");
	},
	{ ssr: false }
);

export default function FaqSectionPage() {
	return <FaqSection />;
}
