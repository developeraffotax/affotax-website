import { connectDB } from "@/lib/connectDB";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";



export const revalidate = 0;


export async function GET(request) {
	const db = await connectDB();
	const pages = await ServicePage.find({});

	

	return new Response(JSON.stringify(pages), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
