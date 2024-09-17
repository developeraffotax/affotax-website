import { connectDB } from "@/lib/connectDB";
import PricingPage from "@/lib/Model/PricingPage/PricingPage";
import mongoose from "mongoose";



export async function POST(request) {





	try {

		const pricingSection = await request.json();
		const db = await connectDB();

        console.log(pricingSection)
        //const {title, first, second, third} = pricingSection;

		const res = await PricingPage.updateOne({}, {
            $set: {
                ...pricingSection
            }
        })


		console.log(res)

		return new Response(JSON.stringify(res), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
        console.log(error)
        return new Response(JSON.stringify({message: 'Failed to update pricing Page'}), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});

    } 
}
