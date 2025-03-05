 


 
import { connectDB } from "@/lib/connectDB";
import Order from "@/lib/Model/Order";
import dynamic from "next/dynamic";

const Orders = dynamic(
  () => {
    return import("@/components/Admin/Orders/Orders");
  },
  { ssr: false }
);

export default async function OrdersPage() {



    const db = await connectDB();
	const orders = await Order.find({payment_status: "completed"}).sort({_id: -1});

    return <Orders ordersData={JSON.stringify(orders)} />;
}
