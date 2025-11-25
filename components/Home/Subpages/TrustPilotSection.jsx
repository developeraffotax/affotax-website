import Image from "next/image";
import React from "react";
import { LiaStarSolid } from "react-icons/lia";

export default function TrustPilotSection({ gReviewsCount, tReviewsCount }) {
	return (
		<div className="w-full max-w-2xl flex gap-6 max-xl:flex-col py-12 ">
			{/* GOOGLE CARD */}

			<div className="flex-1 min-w-[260px]">
				<div className="min-h-[150px] h-full w-full flex flex-col items-center justify-center p-4 bg-white/50 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.google.com/search?q=Affotax+Reviews"
					>
						{/* Top Section */}
						<div className="w-[200px]   flex justify-center items-center gap-4">
							<Image
								src="/google.svg"
								alt="Google Logo"
								className="w-12 h-12"
								width={250}
								height={250}
							/>
							<div>
								<h3 className="text-lg font-semibold text-gray-800">
									Google Reviews
								</h3>
								<div className="flex items-center gap-1 text-yellow-400 text-xl">
									<LiaStarSolid />
									<LiaStarSolid />
									<LiaStarSolid />
									<LiaStarSolid />
									<LiaStarSolid />
								</div>
							</div>
						</div>

						{/* Bottom Section */}
						<p className="text-sm text-gray-500 mt-4">
							{gReviewsCount} reviews — Rated{" "}
							<strong>5.0/5.0</strong>
						</p>
					</a>
				</div>
			</div>

			{/* TRUSTPILOT CARD */}
			<div className="flex-1 min-w-[260px]">
				<div className=" min-h-[150px] h-full w-full flex flex-col items-center justify-center p-4 bg-white/50 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
					{/* Trustpilot widget */}
					<div className="w-[200px]  flex justify-center items-center gap-4">
						<div
							className="trustpilot-widget  mt-2"
							data-locale="en-US"
							data-template-id="53aa8807dec7e10d38f59f32"
							data-businessunit-id="64d63b5dc33d714e75c680f9"
							data-style-height="120px"
							data-style-width="100%"
							data-token="9b8ea25f-7726-4697-adcf-caa3c92c64b8"
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
				</div>
			</div>
		</div>
	);
}
