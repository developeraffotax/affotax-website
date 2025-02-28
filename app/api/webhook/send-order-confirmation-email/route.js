import { connectDB } from "@/lib/connectDB";
import Order from "@/lib/Model/Order";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";


// This is necessary to get the raw body to verify the signature
// export const config = {
// 	api: {
// 	  bodyParser: false, // Disable body parsing, Stripe requires raw body
// 	},

//   };



const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
	const payload = await request.text();
	// const sigHeader = request.headers["stripe-signature"];
	const headersList = await headers();
	const sigHeader = headersList.get("stripe-signature")



	console.log(request)

	const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

	const event = stripe.webhooks.constructEvent( payload, sigHeader, endpointSecret );

	const { customer_details: { email, name, phone, address }, metadata: { orderNumber }, } = event.data.object;

	try {
		const db = await connectDB();

		const orderData = await Order.findOneAndUpdate( { orderNumber: orderNumber }, { payment_status: "completed", } );

		const customerData = { name, email };

		const isEmailSent = await sendPaymentMail( customerData, orderData, orderNumber );

		return NextResponse.json({ message: "EMAIL SENT" }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "error occured", error: error },
			{ status: 500 }
		);
	}
}
