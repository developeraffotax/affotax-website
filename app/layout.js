import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Head from "next/head";
import { schemaLD } from "@/data/schemaLD";



export const metadata = {
	title: "The Affotax Accountants",
	description: "The Affotax Accountants | Making Tax Affordable",
	creator: "Ihtisham Ul Haq",
	authors: [{ name: "Ihtisham Ul Haq", url: "http://iqwebdev.netlify.app/" }],
	verification: {
		google: "google998d27ca179e5db7.html",
	},
	
};

export default function RootLayout({ children }) {
	const schema = JSON.stringify(schemaLD);
	//console.log(schema)

	return (
		<html lang="en">
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: schema }}
					id="json-ld-schema"
				/>
			</Head>

			<body>
				<AntdRegistry>{children}</AntdRegistry>
				<NextTopLoader color="#F27941" showSpinner={false} />
			</body>
		</html>
	);
}
