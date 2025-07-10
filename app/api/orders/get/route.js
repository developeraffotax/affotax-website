// app/api/checkout/session/route.js
import { connectDB } from "@/lib/connectDB";
import Order from "@/lib/Model/Order";

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        const db = await connectDB();

        const { searchParams } = new URL(req.url);
        const start = searchParams.get("start");
        const end = searchParams.get("end");
    
        const filter = { payment_status: "completed" };
    
        if (start && end) {
          filter.createdAt = {
            $gte: new Date(start),
            $lte: new Date(end),
          };
        }


         
        const orders = await Order.find(filter).sort({_id: -1}).lean();
        return new Response( JSON.stringify({ message: "Orders Fetched", orders, }), { status: 200 } );
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, });
    }
}
