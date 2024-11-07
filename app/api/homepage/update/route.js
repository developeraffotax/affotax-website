import { connectDB } from "@/lib/connectDB";
import PricingPage from "@/lib/Model/PricingPage/PricingPage";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";



//  POST  /api/homepage/update
export async function POST(request) {
	try {
		const {} = await request.json();





		

		await connectDB();
		const db = mongoose.connection.db

		const blog = await db.collection('homepages').findOne()

		mongoose.connection.close();





		// db.on("open", async () => {
		// 	// Get the native driver
		// 	const nativeDb = db.db;

		// 	// Perform operations without a schema or model
		// 	const collection = nativeDb.collection("blogs");

		// 	// Find documents
		// 	const documents = await collection.find({}).toArray()
		// 	console.log(documents);

		// 	//mongoose.connection.close();
		// });





		return new Response(JSON.stringify(blog), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.log(error);
		return new Response(
			JSON.stringify({ message: "Failed to update pricing Page" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
