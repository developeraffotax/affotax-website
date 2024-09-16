
import dynamic from "next/dynamic";



const EditPricingComponent = dynamic(
	() => {
		return import("@/components/Admin/Pricing/EditPricing");
	},
	{ ssr: false }
);



export default function EditPricingPage() {

	

	return <EditPricingComponent  />;
}
