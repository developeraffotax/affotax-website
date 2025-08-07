
import { connectDB } from "@/lib/connectDB";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";
import { revalidatePath } from "next/cache";







export async function POST(request) {

	try {

		const servicePage = await request.json();

		const db = await connectDB();
		const isPage = await ServicePage.findOne({link: servicePage.link});

		if (isPage) {
			return new Response(JSON.stringify({message: 'Page with this link already eixsts!'}), {
				status: 409,
				headers: { "Content-Type": "application/json" },
			});
		}

		
		const page = new ServicePage(servicePage);
		const doc = await page.save();

		revalidatePath('/services')

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














