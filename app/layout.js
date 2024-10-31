import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { GoogleTagManager } from '@next/third-parties/google'


import { schemaLD } from "@/data/schemaLD";



export const metadata = {
	title: "The Affotax Accountants",
	description: "The Affotax Accountants | Making Tax Affordable",
	creator: "Ihtisham Ul Haq",
	authors: [{ name: "Ihtisham Ul Haq", url: "https://iqwebdev.netlify.app/" }],
	verification: {
		google: "google998d27ca179e5db7.html",
	},
	
	
};


//google: "google998d27ca179e5db7.html",





export default function RootLayout({ children }) {
	const schema = JSON.stringify(schemaLD);
	//console.log(schema)

	return (
		<html lang="en">
			<GoogleTagManager gtmId="GTM-5ZN5K8MG" />

			<body>
				<AntdRegistry>{children}</AntdRegistry>
				<NextTopLoader color="#F27941" showSpinner={false} />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }} />
			</body>
		</html>
	);
}
