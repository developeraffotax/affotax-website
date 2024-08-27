import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
	title: "The Affotax Accountants",
	description: "The Affotax Accountants | Making Tax Affordable",
	verification: {
		google: "google998d27ca179e5db7.html",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AntdRegistry>{children}</AntdRegistry>
				<NextTopLoader  color="#F27941" showSpinner={false} />
			</body>
		</html>
	);
}
