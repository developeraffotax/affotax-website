import Image from "next/image";
import React from "react";
import { LiaStarSolid } from "react-icons/lia";

export default function TrustPilotSection() {
	return (
		<div className="w-[50%] max-[1700px]:w-full flex flex-wrap max-lg:flex-col justify-start items-stretch gap-6 py-12 max-xl:py-8 max-xl:max-w-3xl  ">
			{/* Google */}
			<a
				className="flex-1 min-w-[200px] block"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.google.com/search?sca_esv=da16bac625324a66&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E24U1LUkbmrB5gTHWTzvrhT49uwiaiTR2b2LwJRitum7Q-pGXsv8H3jRgLk2a2dnmhWmKqAtaWKkR7Z9-gwTNCbyFJ9v&q=Affotax+Reviews&sa=X&ved=2ahUKEwi-8rX326KOAxX7zAIHHT80KqkQ0bkNegQIMhAE&biw=1920&bih=953&dpr=1"
			>
				<div className="flex flex-col h-full justify-between p-6 bg-white/50 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
					<div className="flex items-center mb-4">
						<Image
							src="/google.svg"
							alt="Google Logo"
							className="w-10 h-10 mr-4"
							width={200}
							height={200}
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
					<p className="text-sm text-gray-500">
						14 reviews — Rated <strong>5.0/5.0</strong>
					</p>
				</div>
			</a>

			{/* Trustpilot */}
			<a
				className="flex-1 min-w-[200px] block"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.trustpilot.com/review/affotax.com"
			>
				<div className="flex flex-col h-full justify-between p-6 bg-white/50 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
					<div className="flex items-center mb-4">
						<Image
							src="/trustpilot.svg"
							alt="Trustpilot Logo"
							className="w-10 h-10 mr-4"
							width={200}
							height={200}
						/>
						<div>
							<h3 className="text-lg font-semibold text-gray-800">
								Trustpilot Reviews
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
					<p className="text-sm text-gray-500">
						44 reviews — Rated <strong>4.8/5.0</strong>
					</p>
				</div>
			</a>
		</div>
	);
}

 