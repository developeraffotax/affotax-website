
import dynamic from "next/dynamic";



const ViewServicePages = dynamic(
	() => {
		return import("@/components/Admin/ServicePages/ViewServicePages");
	},
	{ ssr: false }
);



export default function View() {

	

	return <ViewServicePages  />;
}
