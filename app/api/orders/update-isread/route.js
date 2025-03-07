 
import { connectDB } from "@/lib/connectDB";
import Order from "@/lib/Model/Order";



export async function POST(request) {
    const searchParams = request.nextUrl.searchParams
    const orderId = searchParams.get('orderId')

	try {
        const db = await connectDB();
		const order = await Order.findOneAndUpdate({_id: orderId}, {isRead: true});
        

		return new Response( JSON.stringify({ message: "order_update_isRead" }), { status: 201 } );
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: error.message }), { status: 500, });
	}
}
