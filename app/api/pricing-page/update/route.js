import { connectDB } from "@/lib/connectDB";
import PricingPage from "@/lib/Model/PricingPage/PricingPage";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";



export async function POST(request) {





	try {

		const pricingSection = await request.json();

		const db = await connectDB();


		const prices = [
			{
				_id: '66e3edbe001f439adee69a87',
				priceTitle: pricingSection.first.pkgName,
				priceContent: pricingSection.first.pkgTurnover,
				price: pricingSection.first.pkgPrice,
				packageIncludes: pricingSection.first.packageIncludes
			},

			{
				_id: '66e3edbe001f439adee69a88',
				priceTitle: pricingSection.second.pkgName,
				priceContent: pricingSection.second.pkgTurnover,
				price: pricingSection.second.pkgPrice,
				packageIncludes: pricingSection.second.packageIncludes
			},

			{
				_id: '66e3edbe001f439adee69a89',
				priceTitle: pricingSection.third.pkgName,
				priceContent: pricingSection.third.pkgTurnover,
				price: pricingSection.third.pkgPrice,
				packageIncludes: pricingSection.third.packageIncludes
			},

		]

			const updateRes = await ServicePage.updateOne({_id: '66e3edd95958a272b4d359c4'}, {
				$set: {
					 prices: prices

				}
			}) 

			console.log(updateRes)

        

		const res = await PricingPage.updateOne({}, {
            $set: {
                ...pricingSection
            }
        })


		revalidatePath('/');
		revalidatePath('/pricing');

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
