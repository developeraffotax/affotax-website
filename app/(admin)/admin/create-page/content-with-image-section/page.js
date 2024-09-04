


import { connectDB } from "@/lib/connectDB";
import Page from "@/lib/Model/Page/Page";
import dynamic from "next/dynamic";

const ContentWithImageWrapper = dynamic(
	() => {
		return import("@/components/Admin/WhoWeHelpPages/ContentWithImageWrapper");
	},
	{ ssr: false }
);




export default async function ContentWithImageSectionPage() {


	// const db = await connectDB();
	// const page = await Page.findOne({});




	return <ContentWithImageWrapper />;
}
