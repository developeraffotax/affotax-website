import Home from "@/components/Home/Home";
import { connectDB } from "@/lib/connectDB";
import Homepage from "@/lib/Model/Homepage/Homepage";





// export const metadata = {
// 	title: "UK Online Accountant Services | Affordable Accounting Firm in UK",
// 	description: "Affotax is the most affordable accounting firm in the UK with ACCA-licensed and HMRC-authorised agents, providing UK online accountants services.",
// 	metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/`},
// 	keywords: ["online accountant"],
// };




//GENERATING THE DYNAMIC META DATA
export async function generateMetadata() {


	await connectDB();

	const homepage = await Homepage.findOne();

	return {
		title: homepage?.metaTitle,
		description: homepage?.metaDescription,
		keywords: homepage?.keywords,
		metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/`},
	}

  }

export default async function HomePage() {


	

	return (
		<> <Home /> </>
	);
}
