
import dynamic from "next/dynamic";

const CreatePage = dynamic(
	() => {
		return import("@/components/Admin/ServicePages/CreatePage");
	},
	{ ssr: false }
);

export default function Create({searchParams }) {

	console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + searchParams.page )

	return <CreatePage pageSlug={searchParams.page || null} />;
}
