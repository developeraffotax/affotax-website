import Home from "@/components/Home/Home";
import axios from "axios";

export const metadata = {
	title: "UK Online Accountant Services | Affordable Accounting Firm in UK",
	description: "Affotax is the most affordable accounting firm in the UK with ACCA-licensed and HMRC-authorised agents, providing UK online accountants services.",
	metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/`},
	keywords: ["online accountant"],
};



export default async function HomePage() {


	

	return (
		<> <Home /> </>
	);
}
