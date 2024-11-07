import { connectDB } from "@/lib/connectDB";
import Homepage from "@/lib/Model/Homepage/Homepage";


//  GET  /api/homepage/get
export async function GET(request) {
	try {
		await connectDB();

		const HomepageData = await Homepage.findOne();

		return new Response(JSON.stringify(HomepageData), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.log(error);
	}
}
