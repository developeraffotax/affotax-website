import { connectDB } from "@/lib/connectDB";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";
import { revalidatePath } from "next/cache";

//  POST  /api/homepage/update
export async function POST(request) {
	try {
		const Homepage = await request.json();

		await connectDB();

		const updateRes = await ServicePage.updateOne( {}, { $set: { ...Homepage, }, } );

		console.log(updateRes);

		revalidatePath("/");

		return new Response( JSON.stringify({ success: true, message: "Homepage updated succeccfully!🧡", }), { status: 201, headers: { "Content-Type": "application/json" }, } );
	} catch (error) {
		console.log(error);
		return new Response( JSON.stringify({ message: "Failed to update pricing Page" }), { status: 500, headers: { "Content-Type": "application/json" }, } );
	}
}
