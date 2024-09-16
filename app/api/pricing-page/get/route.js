import { connectDB } from "@/lib/connectDB";
import PricingPage from "@/lib/Model/PricingPage/PricingPage";
import mongoose from "mongoose";



export async function GET(request) {
	try {
		const db = await connectDB();

		const pricingPage = await PricingPage.findOne();

		

		return new Response(JSON.stringify(pricingPage), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.log(error);
	}
}
