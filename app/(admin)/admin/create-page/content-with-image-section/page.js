

import dynamic from "next/dynamic";

const ContentWithImageSection = dynamic(
	() => {
		return import("@/components/Admin/WhoWeHelpPages/ContentWithImageSection");
	},
	{ ssr: false }
);

export default function HeroSectionPage() {
	return <ContentWithImageSection />;
}
