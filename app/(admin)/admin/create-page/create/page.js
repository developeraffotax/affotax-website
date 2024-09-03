




import dynamic from "next/dynamic";

const CreatePage = dynamic(
	() => {
		return import("@/components/Admin/WhoWeHelpPages/CreatePage");
	},
	{ ssr: false }
);

export default function HeroSectionPage() {
	return <CreatePage />;
}
