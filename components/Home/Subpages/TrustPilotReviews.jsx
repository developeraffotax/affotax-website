"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { LiaStarSolid } from "react-icons/lia";

export default function TrustPilotReviews() {
	return (
		<>
			<section className="py-16 relative w-full ">
				<div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
					<div
						className="trustpilot-widget"
						data-locale="en-US"
						data-template-id="539adbd6dec7e10e686debee"
						data-businessunit-id="64d63b5dc33d714e75c680f9"
						data-style-height="500px"
						data-style-width="100%"
						data-token="03b5c5a5-fff5-45bd-a985-7042a0b6b903"
						data-stars="1,2,3,4,5"
						data-review-languages="en"
					>
						<a
							href="https://www.trustpilot.com/review/affotax.com"
							target="_blank"
							rel="noopener"
						>
							Trustpilot
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
