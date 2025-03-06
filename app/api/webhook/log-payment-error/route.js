import { connectDB } from "@/lib/connectDB";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import Log from "@/lib/Model/Log";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
	const payload = await request.text();

	const headersList = await headers();
	const sigHeader = headersList.get("stripe-signature");

	console.log(request);

	const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET_LOG;

	const event = stripe.webhooks.constructEvent(
		payload,
		sigHeader,
		endpointSecret
	);

	const { created, amount, last_payment_error: { decline_code, message, code, type, payment_method: { billing_details: { email, name, phone }, card: { brand, country, exp_month, exp_year, last4 }, }, }, } = event.data.object;

	try {
		const db = await connectDB();

		const error_log = new Log({
			amount: amount.toString(),

			decline_code,
			message,
			customer_name: name,
			customer_email: email,
			isRead: false,
			
			card: {
				brand,
				country,
				exp_month,
				exp_year,
				last4,
			},

			time: (created * 1000).toString()
		});

		await error_log.save();

		return NextResponse.json({ message: "Log Created" }, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "Failed to create error log", error: error },
			{ status: 500 }
		);
	}
}
