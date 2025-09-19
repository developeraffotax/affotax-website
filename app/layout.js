import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { GoogleTagManager } from '@next/third-parties/google'
import { Outfit } from "next/font/google";

import { schemaLD } from "@/data/schemaLD";
import Script from "next/script";



export const metadata = {
	title: "The Affotax Accountants",
	description: "The Affotax Accountants | Making Tax Affordable",
	creator: "Ihtisham Ul Haq",
	authors: [{ name: "Ihtisham Ul Haq", url: "https://iqweb.dev/" }],
	verification: {
		google: "rUWR7Mh3UA6s1lFKr7ssCWWhmuYEkmdqWV9wZc2VdQ0",
	},
	
	
};


//google: "google998d27ca179e5db7.html",


const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});


export default function RootLayout({ children }) {
	const schema = JSON.stringify(schemaLD);
	//console.log(schema)

	return (
		<html lang="en" className={outfit.variable}>
      <head>
       
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11304762354"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11304762354');
          `}
        </Script> */}

   

      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
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
