import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
	title: "The Affotax Accountants",
	description: "The Affotax Accountants | Making Tax Affordable",
	verification: {
		google: 'google998d27ca179e5db7.html',
		
	  },
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<div className="w-full p-0 mt-20 ">{children}</div>
				<Footer />
				<NextTopLoader  color="#F27941" showSpinner={false} />
			</body>
		</html>
	);
}
