// app/api/checkout/session/route.js
import { connectDB } from "@/lib/connectDB";
import Order from "@/lib/Model/Order";


export const dynamic = "force-dynamic";

export async function GET(req) {
	try {
        const db = await connectDB();
		const unread_orders_count = await Order.countDocuments({
			isRead: false,
		});

		return new Response( JSON.stringify({ message: "un_read order count", unread_orders_count, }), { status: 200 } );
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: error.message }), { status: 500, });
	}
}
