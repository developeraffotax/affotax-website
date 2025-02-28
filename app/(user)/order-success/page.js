"use client"

// import { connectDB } from "@/lib/connectDB";
// import Order from "@/lib/Model/Order";
// import Stripe from "stripe";
// import sendPaymentMail from "@/lib/sendPaymentMail";
import Link from "next/link";
import { useEffect } from "react";

export default function OrderSuccessPage() {
	// const { orderNumber, session_id, success } = searchParams;

	// const db = await connectDB();

	// const orderData = await Order.findOneAndUpdate(
	// 	{ orderNumber: orderNumber },
	// 	{
	// 		payment_status: "completed",
	// 	}
	// );

	// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
	// const {
	// 	customer_details: { email, name, phone, address },
	// } = await stripe.checkout.sessions.retrieve(session_id);

	// const customerData = {
	// 	name,
	// 	email,
	// };

	// const isEmailSent = await sendPaymentMail(
	// 	customerData,
	// 	orderData,
	// 	orderNumber
	// );


	useEffect(() => {

		if(typeof window !== "undefined") {
			localStorage.clear()
		}




	}, [])





	return (
		<div className="bg-gray-100 h-screen">
			<div className="bg-white p-6  md:mx-auto">
				<svg
					viewBox="0 0 24 24"
					className="text-green-600 w-16 h-16 mx-auto my-6"
				>
					<path
						fill="currentColor"
						d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
					></path>
				</svg>
				<div className="text-center">
					<h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
						Order Confirmed!
					</h3>
					<p className="text-gray-600 my-2">
						Thank you for completing your secure online payment.
						We'll reach out to you within 24 hours!
					</p>
					<p> Have a great day! </p>
					<div className="py-10 text-center">
						<Link
							href="/"
							className="px-12 bg-primary/90 hover:bg-primary text-white font-semibold py-3"
						>
							GO BACK TO HOMEPAGE
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
