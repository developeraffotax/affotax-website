'use client'

import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import { QuoteFormContext } from "../layout";






export default function ThankYouPage() {

	const quoteContext = useContext(QuoteFormContext);

	const successRef = useRef()

	// useEffect(() => {
	// 	// ✅ Fire conversion event when the thank-you page loads
	// 	if (typeof window !== 'undefined' && window.gtag) {
			
		 
	// 	  window.gtag('event', 'conversion', {
	// 		send_to: 'AW-11304762354/3ywRCN7d-rgaEPL3w44q',
	// 	  })
	// 	}
	//   }, [])



	  useEffect(() => {
	// ✅ One push, picked up by both the Meta Lead tag and the Google Ads conversion tag in GTM
	// (once per browser session, so refreshes don't double count)
	if (!sessionStorage.getItem("fb_lead_sent")) {
		sessionStorage.setItem("fb_lead_sent", "1");
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "quote_lead",
			form_name: "instant_quote",
		});
	}
}, [])

	  
	useEffect(() => {
		quoteContext?.handleCancel();
		const form = document?.getElementById('quote-form');
		if(form) {
			form.reset();

		}
	}, [])


	useEffect(() => {
		successRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	

	const timeline = [
		{ title: "Message received", text: "Your inquiry has safely reached our team.", done: true },
		{ title: "Under review", text: "We go through every message carefully.", done: false },
		{ title: "We get back to you", text: "A team member will contact you as soon as possible.", done: false },
	];

	return (
		<>
			<section
				ref={successRef}
				className="relative font-inter isolate flex min-h-[75vh] w-full items-center overflow-hidden bg-gradient-to-br from-white via-orange-50/60 to-white px-4 py-14 text-gray-900 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
			>
				{/* Soft light background accents */}
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-10 opacity-[0.5]"
					style={{
						backgroundImage:
							"radial-gradient(#fdba74 1px, transparent 1px)",
						backgroundSize: "26px 26px",
						maskImage:
							"radial-gradient(ellipse at center, black 20%, transparent 70%)",
						WebkitMaskImage:
							"radial-gradient(ellipse at center, black 20%, transparent 70%)",
					}}
				/>
				<div
					aria-hidden="true"
					className="absolute -top-32 -right-20 -z-10 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl sm:h-[28rem] sm:w-[28rem]"
				/>
				<div
					aria-hidden="true"
					className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-amber-100/70 blur-3xl"
				/>

				<div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
					{/* Left: message */}
					<div className="text-center lg:text-left">
						<div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 motion-safe:animate-ping" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
							</span>
							Affotax
						</div>

						<h1 className="mt-5 text-5xl font-bold uppercase leading-[1.05] tracking-tight text-gray-900 font-poppins sm:text-6xl xl:text-7xl">
							Thank
							<br className="hidden lg:block" />{" "}
							<span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
								You
							</span>
							<span className="text-orange-500">.</span>
						</h1>

						<p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600  sm:text-lg lg:mx-0">
							Thank you for reaching out to us! We’ve received your
							message and will review it carefully. Our team will get
							back to you as soon as possible to assist with your
							inquiry.
						</p>

						<div className="mt-8 flex justify-center lg:justify-start">
							<Link
								href="/"
								className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition duration-200 font-poppins hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 sm:w-auto sm:text-base"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
									aria-hidden="true"
								>
									<path d="M19 12H5M11 18l-6-6 6-6" />
								</svg>
								Go Back to Homepage
							</Link>
						</div>
					</div>

					{/* Right: light status card */}
					<div className="relative">
						<div
							aria-hidden="true"
							className="absolute -inset-px rounded-3xl bg-gradient-to-br from-orange-300/70 via-orange-100/40 to-transparent"
						/>
						<div className="relative rounded-3xl bg-white p-6 shadow-2xl shadow-orange-500/10 sm:p-8">
							<div className="flex items-center gap-4">
								<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-6 w-6 text-white"
										aria-hidden="true"
									>
										<path d="M5 13l4 4L19 7" />
									</svg>
								</span>
								<div>
									<p className="text-lg font-semibold text-gray-900 font-poppins">
										Inquiry submitted
									</p>
									<p className="text-sm text-gray-500 font-Montserrat">
										Here’s what happens next
									</p>
								</div>
							</div>

							<ol className="mt-8 space-y-0">
								{timeline.map((item, i) => (
									<li key={item.title} className="relative flex gap-4 pb-8 last:pb-0">
										{/* connector line */}
										{i !== timeline.length - 1 && (
											<span
												aria-hidden="true"
												className="absolute left-[15px] top-8 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-orange-300 to-gray-200"
											/>
										)}
										<span
											className={
												"relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold font-poppins " +
												(item.done
													? "bg-orange-500 text-white shadow-md shadow-orange-500/40"
													: "border border-gray-200 bg-gray-50 text-gray-400")
											}
										>
											{item.done ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="3"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="h-4 w-4"
													aria-hidden="true"
												>
													<path d="M5 13l4 4L19 7" />
												</svg>
											) : (
												i + 1
											)}
										</span>
										<div className="pt-0.5">
											<p
												className={
													"text-sm font-semibold font-poppins sm:text-base " +
													(item.done ? "text-gray-900" : "text-gray-700")
												}
											>
												{item.title}
											</p>
											<p className="mt-1 text-xs leading-relaxed text-gray-500 font-Montserrat sm:text-sm">
												{item.text}
											</p>
										</div>
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</section>

			<EmailPhone />
		</>
	);
}