import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const session_id = searchParams.get("session_id");

	if (!session_id) {
		return NextResponse.json(
			{ error: "No session_id provided" },
			{ status: 400 }
		);
	}

	try {
		const session = await stripe.checkout.sessions.retrieve(session_id);
		const customer_details = session.customer_details;

		return NextResponse.json({ customer_details }, { status: 200 });
	} catch (error) {
		console.error("Error retrieving Stripe session:", error);
		return NextResponse.json(
			{ error: error.message },
			{ status: 500 }
		);
	}
}
