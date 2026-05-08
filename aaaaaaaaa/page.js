"use client";

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

	//`${origin}/order-success?success=true&orderNumber=${orderNumber}&session_id={CHECKOUT_SESSION_ID}`,
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
		console.log("OrderSuccess mounted");
		trackPurchase();
	}, []);

	async function trackPurchase() {
		const purchase = getPurchaseParams();

		if (!purchase) return;
		if (isAlreadyTracked(purchase.orderNumber)) return;

		try {
			const customer = await getCustomerDetails(purchase.sessionId);

			pushPurchaseEvent({
				purchase,
				customer,
			});

			markPurchaseTracked(purchase.orderNumber);
			clearCart();
		} catch (err) {
			console.error("Purchase tracking failed:", err);
		}
	}

	function getPurchaseParams() {
		const params = new URLSearchParams(window.location.search);

		const orderNumber = params.get("orderNumber");
		const amt = params.get("amt");
		const sessionId = params.get("session_id");

		if (!orderNumber || !amt || !sessionId) return null;

		return {
			orderNumber,
			amount: Number(amt),
			sessionId,
		};
	}

	function isAlreadyTracked(orderNumber) {
		return !!sessionStorage.getItem(`purchase_${orderNumber}`);
	}

	function markPurchaseTracked(orderNumber) {
		sessionStorage.setItem(`purchase_${orderNumber}`, "1");
	}

	async function getCustomerDetails(sessionId) {
		const res = await fetch(`/api/stripe-session?session_id=${sessionId}`);

		if (!res.ok) {
			throw new Error("Failed to fetch Stripe session");
		}

		const data = await res.json();
		return data.customer_details || {};
	}

	function buildUserData(customer) {
		const names = customer.name?.split(" ") || [];
		const address = customer.address || {};

		return {
			email_address: customer.email,
			phone_number: customer.phone,
			address: {
				first_name: names[0],
				last_name: names.slice(1).join(" "),
				city: address.city,
				region: address.state,
				postal_code: address.postal_code,
				country: address.country,
			},
		};
	}

	function pushPurchaseEvent({ purchase, customer }) {
		window.dataLayer = window.dataLayer || [];

		const ga4Payload = {
			event: "purchase",
			ecommerce: {
				transaction_id: purchase.orderNumber,
				value: purchase.amount,
				currency: "GBP",
				items: [
					{
						item_name: "Order",
						price: purchase.amount,
						quantity: 1,
					},
				],
			},
			user_data: buildUserData(customer),
		};

		console.log("GA4 Purchase Data Layer Push: ", ga4Payload);

		window.dataLayer.push(ga4Payload);
	}

	function clearCart() {
		localStorage.clear();
	}

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
