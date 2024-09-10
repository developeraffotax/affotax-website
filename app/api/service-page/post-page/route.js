
import { connectDB } from "@/lib/connectDB";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";







export async function POST(request) {

	try {

		const servicePage = await request.json();
		const db = await connectDB();
		const page = new ServicePage(servicePage);
		const doc = await page.save();

		return new Response(JSON.stringify(doc), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
        console.log(error)
        return new Response(JSON.stringify({message: 'Failed to add new Page'}), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});

    } 
}

