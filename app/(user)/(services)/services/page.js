import Services from "@/components/Services/Services";

export const metadata = {
	title: "The UK accountancy services with ACCA-licensed accountants",
	description: "Our UK Accountancy services – company accounts, tax returns, VAT returns, bookkeeping services, self-assessment, payroll services, etc.",
	keywords: ["accountancy services"],
	metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/services`, },
};

const ServicesPage = () => {
	return (
		<> <Services /> </>
	);
};

export default ServicesPage;
