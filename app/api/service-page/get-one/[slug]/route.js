import { connectDB } from "@/lib/connectDB";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";




export async function GET(request, { params }) {

	


	try {
		const db = await connectDB();
		const page = await ServicePage.findOne({ link: params.slug });
		
		return new Response(JSON.stringify(page), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ message: "Failed Load Service Page" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
