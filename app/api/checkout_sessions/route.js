// app/api/checkout/session/route.js
import { connectDB } from "@/lib/connectDB";
import Order from "@/lib/Model/Order";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";
import mongoose from "mongoose";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

function generateRandomNumber() {
	// Get current time in milliseconds
	const timestamp = new Date().getTime();

	// Use modulus to ensure the number is 6 digits
	const randomNum = timestamp % 10000000;

	// If the result is less than 6 digits, pad with leading zeros
	const sevenDigitNumber = randomNum.toString().padStart(7, "0");

	return sevenDigitNumber;
}



export async function POST(req) {
	const { cartItemsArr, totalPrice, selectedPriceIds, addOnIds } = await req.json();
	
	
	const headersList = await headers();
	const origin = headersList.get("origin");
	
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


	

	try {


		//---------------------------------Logic to save order with original items from the db--------------------------------------->

		const db = await connectDB();

		const orderNumber = generateRandomNumber();

		const pricePromises = selectedPriceIds.map((el) => {
			return ServicePage.findOne( { "prices._id": el.priceId }, { prices: { $elemMatch: { _id: el.priceId } }, title: 1 } ).lean();
		});

		const docs = await Promise.all(pricePromises);

		const pricesArr = [];

		docs.forEach((el) => {
			el.prices.forEach((price) => {
				const filteredAddOns = price.addOns?.filter((addOn) => {
					// console.log(addOn);
					return addOnIds.includes(addOn._id.toString());
				});
				// console.log(filteredAddOns);
				pricesArr.push({
					...price,
					pageTitle: el.title,
					addOns: filteredAddOns,
				});
			});
		});



		let newOrderData = {
			items: pricesArr.map((el) => ({
				priceId: el._id,
				pageTitle: el.pageTitle,
				priceTitle: el.priceTitle,
				price: el.price,
				addOns: el.addOns,
			})),
			totalPriceWithoutVat:  (+totalPrice).toFixed(2).toString(2),
			totalPrice: (+totalPrice + +totalPrice * (0 / 100)).toFixed(2).toString(2),
			// payment_id: paymentId,
			// customer_id: customerDoc._id,
			orderNumber: orderNumber,
			payment_status: "pending",
			vat: (+totalPrice * (0 / 100)).toFixed(2).toString(2)
		};

		console.log(newOrderData)

		const order = new Order(newOrderData);

		const orderDoc = await order.save();

		//---------------------------------Logic to get session from stripe & passing cartitems from client not secure btw--------------------------------------->
		const newCartArr = [...cartItemsArr];

		newCartArr.push({
			priceTitle: "VAT",
			pageTitle: "0%",
			price: (+totalPrice * (0 / 100)).toFixed(2),
		});

		

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: newCartArr.map((item) => {

				const alsoIncludedTitleArr = item?.addOns?.filter((addOn) => {
					if (addOn.isChecked) {
						return true;
					}
				}).map((addOn) => `${addOn.priceTitle} Included `)

				const alsoIncludedTitleString = alsoIncludedTitleArr?.join(", ")

				console.log(alsoIncludedTitleArr)

				return (
					{
						price_data: {
							currency: "gbp",
		
							product_data: {
								name: `${item.priceTitle} | ${item.pageTitle}. ${alsoIncludedTitleString ? alsoIncludedTitleString : ''}`,
							},
		
							unit_amount: +(+item.price * 100).toFixed(2), // Amount in cents
						},
						quantity: item.quantity || 1,
					}
				)
			}),
			mode: "payment",

			success_url: `${origin}/order-success?success=true&orderNumber=${orderNumber}&session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${origin}/?canceled=true`,

			metadata: {
				orderNumber: orderNumber,
			},
		})

		return new Response( JSON.stringify({ url: session.url,  }), { status: 200 }
		);
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: error.message }), { status: 500, });
	}
}
