import { connectDB } from "@/lib/connectDB";
import Homepage from "@/lib/Model/Homepage/Homepage";
import { revalidatePath } from "next/cache";

//  POST  /api/homepage/update
export async function POST(request) {
	try {
		const HomepageData = await request.json();

		console.log(HomepageData)

		await connectDB();
		
		const updateRes = await Homepage.updateOne( {}, { $set: { ...HomepageData, } } );

		console.log(updateRes);

		revalidatePath("/");

		return new Response( JSON.stringify({ success: true, message: "Homepage updated succeccfully!🧡", }), { status: 201, headers: { "Content-Type": "application/json" }, } );
	} catch (error) {
		console.log(error);
		return new Response( JSON.stringify({ message: "Failed to update pricing Page" }), { status: 500, headers: { "Content-Type": "application/json" }, } );
	}
}
