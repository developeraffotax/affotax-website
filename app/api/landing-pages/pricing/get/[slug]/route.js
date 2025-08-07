import { connectDB } from "@/lib/connectDB";
import LandingPage from "@/lib/Model/LandingPage/LandingPage";
import PricingPage from "@/lib/Model/PricingPage/PricingPage";
import mongoose from "mongoose";

//id is actually the landing page id
export const revalidate = 0;


export async function GET(request,  { params }) {

	const { slug } = params;

	try {
		const db = await connectDB();

	 

		const landingPage = await LandingPage.findOne({slug: slug}).select("PricingSection slug")

		if(!landingPage) {
			return new Response(JSON.stringify({message: "Page Not Found"}), {
				status: 404,
				headers: { "Content-Type": "application/json" },
			});
		}

		const pricingPage = landingPage?.PricingSection;

		return new Response(JSON.stringify(pricingPage), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.log(error);
	}
}
