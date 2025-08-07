import dynamic from "next/dynamic";

const CreatePage = dynamic(
	() => {
		return import("@/components/Admin/LandingPages/CreatePage");
	},
	{ ssr: false }
);

export default function Create({ searchParams }) {
	return <CreatePage pageSlug={searchParams.page || null} />;
}
