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
		google: "rUWR7Mh3UA6s1lFKr7ssCWWhmuYEkmdqWV9wZc2VdQ0",
	},
	
	
};


//google: "google998d27ca179e5db7.html",





export default function RootLayout({ children }) {
	const schema = JSON.stringify(schemaLD);
	//console.log(schema)

	return (
		<html lang="en">
			<GoogleTagManager gtmId="GTM-MW47DQSV" />
			<head>
        {/* ✅ Google Ads gtag.js script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11304762354"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11304762354');
            `,
          }}
        />
		


      </head>
			<body>
				<AntdRegistry>{children}</AntdRegistry>
				<NextTopLoader color="#F27941" showSpinner={false} />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }} defer/>
			</body>
		</html>
	);
}
