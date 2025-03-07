// app/api/checkout/session/route.js
import { connectDB } from "@/lib/connectDB";
import Order from "@/lib/Model/Order";

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        const db = await connectDB();
         
        const orders = await Order.find({payment_status: "completed"}).sort({_id: -1});
        return new Response( JSON.stringify({ message: "Orders Fetched", orders, }), { status: 200 } );
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, });
    }
}
