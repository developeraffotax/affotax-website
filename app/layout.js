import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { GoogleTagManager } from "@next/third-parties/google";
import { Outfit } from "next/font/google";

import { schemaLD } from "@/data/schemaLD";
import Script from "next/script";

export const metadata = {
	title: "The Affotax Accountants",
	description: "The Affotax Accountants | Making Tax Affordable",
	creator: "Ihtisham Ul Haq",
	authors: [{ name: "Ihtisham Ul Haq", url: "https://ihtisham.io/" }],
};

const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
});



export default function RootLayout({ children }) {
	return (
		<html lang="en" className={outfit.variable}>
			<head>
				{/* Trustpilot Script */}
				<Script
					src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
					strategy="afterInteractive"
				/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(schemaLD),
					}}
				/>

				<Script
					src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
					strategy="afterInteractive"
				/>
			</head>
			<body>
				{/* ✅ Move GTM here */}
				<GoogleTagManager gtmId="GTM-TZN3NXBF" />

				<AntdRegistry>{children}</AntdRegistry>
				<NextTopLoader color="#F27941" showSpinner={false} />
			</body>
		</html>
	);
}
