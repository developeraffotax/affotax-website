import Service from "@/components/Services/Service/Service";
import ContractorAccountants from "@/components/WhoWeHelp/ContractorAccountants/index.jsx";
import LimitedCompanies from "@/components/WhoWeHelp/LimitedCompanies/index.jsx";
import LimitedLiabilityPartnership from "@/components/WhoWeHelp/LimitedLiabilityPartnership/index.jsx";
import Partnerships from "@/components/WhoWeHelp/Partnerships/index.jsx";
import SmallBusinessAccountants from "@/components/WhoWeHelp/SmallBusinessAccountants/index.jsx";
import SoleTraders from "@/components/WhoWeHelp/SoleTraders/index.jsx";
import XeroAccountants from "@/components/WhoWeHelp/XeroAccountants/index.jsx";
import EcommerceAccountants from "@/components/WhoWeHelp/EcommerceAccountants/index.jsx";
import PropertyAccountants from "@/components/WhoWeHelp/PropertyAccountants/index.jsx";
import FreelanceAccountants from "@/components/WhoWeHelp/FreelanceAccountants/index.jsx";
import AccountantsNearMe from "@/components/WhoWeHelp/AccountantsNearMe/index.jsx";
import CheapAccountants from "@/components/WhoWeHelp/CheapAccountants/index.jsx";
import { dataArr } from "@/data/serviceData";
import { metaDataObject } from "@/data/metadataWhowehelp";
import { notFound, redirect } from "next/navigation";
import P45Form from "@/components/Services/Service/CustomServicePages/P45Form";
import { getPageData } from "@/lib/getPage";
import Template from "@/components/WhoWeHelp/Template";
import Page from "@/lib/Model/Page/Page";
import { connectDB } from "@/lib/connectDB";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";

// GENERATING THE DYNAMIC META DATA
export async function generateMetadata({ params }) {

  let metadata;

  switch (params.slug) {
		case "sole-traders": return (metadata = { title: 'UK Sole Traders Services for Accounting & Tax Filing', description: "UK sole trader business with Affotax's expert accounting and tax filing services. Simplify your finances, maximize profits, and ensure HMRC compliance." })
		case "limited-companies": return (metadata = { title: 'Expert Accounting & Tax Services for Limited Companies', description: "Limited Company's finances with Affotax's comprehensive accounting and tax services. Our chartered accountants provide simplified bookkeeping, VAT returns, etc." });
		case "partnerships": return (metadata = { title: 'Affordable Accounting Solutions for UK Partnerships | Affotax', description: "Discover personalised accounting services for partnerships in the UK. Affotax offers tax planning, profit management, cash flow strategies, and more." });
		case "limited-liability-partnerships": return (metadata = { title: 'Accounting & Tax Services for LLPs in the UK - Affotax', description: "Expert accounting and tax solutions for UK LLPs. Affotax ensures boosts profits, and provides ongoing support. Contact us for a free consultation today." });
		case "contractor-accountants": return (metadata = { title: 'Contractor Accounting & Tax Filing Services | Affotax', description: "Effortless accounting and tax filing for contractors. Trust Affotax for IR35 compliance, tax planning, and personalized service. Transparent, fixed-fee pricing." });
		case "small-business-accountants": return (metadata = { title: 'UK Accounting & Tax Services for Small Businesses | Affotax', description: "Empower your small business with Affotax's expert accounting, tax planning, and strategic advice. Maximize deductions and streamline your finances today!" });
		case "xero-accountants": return (metadata = { title: 'Xero Accountants UK - Tax Filing & Business Growth Experts', description: "Unlock Xero's potential with Affotax's expert accountants. Streamline your finances, ease bookkeeping, and get HMRC-compliant tax filing." });
		case "ecommerce-accountants": return (metadata = { title: "Accountants For Ecommerce Businesses - Affotax", description: " Welcome to our dedicated accountancy services tailored specifically for ecommerce businesses. Whether you're a thriving Amazon seller, a budding Shopify entrepreneur, or operating on other online platforms, our expert accountants are here to support you. We specialize in understanding the unique financial challenges ecommerce businesses face, offering tailored solutions to optimize your financial management.", });
		case "property-accountants": return (metadata = { title: "Property Accountants in UK - Affotax", description: "Property accounting services for landlords & investors. Specializing in tax, bookkeeping, payroll, and more. Find local property accountants near you.", });
		case "freelance-accountants": return (metadata = { title: "Expert Accountants for Freelancers | Your Financial Partner", description: "Welcome to our dedicated page for freelancers! As a freelancer, managing your finances can be overwhelming, but you don’t have to do it alone. Our team of expert accountants for freelancers is here to provide you with the support and guidance you need to keep your finances in order. With our affordable accountants, you can focus on what you do best while we handle the rest.", });
		case "accountants-near-me": return (metadata = { title: "Affordable and Cheap Accounting Services", description: "When searching for 'accountants near me,' it's essential to choose professionals who understand the local financial landscape and can offer personalized services.", });
		case "cheap-accountants": return (metadata = { title: "UK Sole Traders Services for Accounting & Tax Filing", description: "Welcome to our accountancy website, your go-to destination for cheap accountants who provide top-tier services without breaking the bank. Whether you’re a small business owner, a freelancer, or an individual seeking expert financial management, our team of affordable accountants is here to meet all your accounting needs. ", });

		case "p60-form": return (metadata = { title: "UK Sole Traders Services for Accounting & Tax Filing", description: "UK sole trader business with Affotax's expert accounting and tax filing services. Simplify your finances, maximize profits, and ensure HMRC compliance", });
	}


  if (!metadata) {

		const db = await connectDB();



		const serviceData = await ServicePage.findOne({ link: params.slug });
		if (!serviceData) {

			const page = await Page.findOne({ slug: params.slug });
			if (!page) {
				redirect("/");
			}
			 metadata = {
        title: page.metaTitle,
        description: page.metaDescription,
        keywords: page.keywords ,
        authors: [{ name: 'Affotax', url: 'https://affotax.com' }],
        creator: 'Ihtisham Ul Haq -- +92-301-6667656',
      }

		} else {

			metadata = {
        title: serviceData.metaTitle,
        description: serviceData.metaDescription,
        keywords: serviceData.keywords ,
        authors: [{ name: 'Affotax', url: 'https://affotax.com' }],
        creator: 'Ihtisham Ul Haq -- +92-301-6667656',
      }
		}
	}



	return metadata;
}








// SERVICES PAGE AND WHO WE HELP PAGES HERE

export default async function ServicesPage({ params }) {
	let render;

	const location = params.slug;

	switch (location) {
		case "sole-traders": return (render = <SoleTraders />);
		case "limited-companies": return (render = <LimitedCompanies />);
		case "partnerships": return (render = <Partnerships />);
		case "limited-liability-partnerships": return (render = <LimitedLiabilityPartnership />);
		case "contractor-accountants": return (render = <ContractorAccountants />);
		case "small-business-accountants": return (render = <SmallBusinessAccountants />);
		case "xero-accountants": return (render = <XeroAccountants />);
		case "ecommerce-accountants": return (render = <EcommerceAccountants />);
		case "property-accountants": return (render = <PropertyAccountants />);
		case "freelance-accountants": return (render = <FreelanceAccountants />);
		case "accountants-near-me": return (render = <AccountantsNearMe />);
		case "cheap-accountants": return (render = <CheapAccountants />);

		case "p60-form": return (render = <P45Form />);
	}



	// SERVICES PAGES
	if (!render) {

		const db = await connectDB();



		const serviceData = await ServicePage.findOne({ link: params.slug });
		if (!serviceData) {

			const page = await Page.findOne({ slug: params.slug });
			if (!page) {
				redirect("/");
			}

			const jsonPage = JSON.stringify(page);
			render = <Template jsonPage={jsonPage} />;

		} else {

			render = <Service jsonData={JSON.stringify(serviceData)} />;
		}
	}



	return <> {render} </>;
}
