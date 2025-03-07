import dynamicCmp from "next/dynamic";

const Orders = dynamicCmp(
	() => {
		return import("@/components/Admin/Orders/Orders");
	},
	{ ssr: false }
);

export default async function OrdersPage() {
	return <Orders />;
}
