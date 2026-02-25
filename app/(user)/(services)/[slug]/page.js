



import Service from "@/components/Services/Service/Service";
import ContractorAccountants from "@/components/WhoWeHelp/ContractorAccountants";
import LimitedCompanies from "@/components/WhoWeHelp/LimitedCompanies";
import LimitedLiabilityPartnership from "@/components/WhoWeHelp/LimitedLiabilityPartnership";
import Partnerships from "@/components/WhoWeHelp/Partnerships";
import SmallBusinessAccountants from "@/components/WhoWeHelp/SmallBusinessAccountants";
import SoleTraders from "@/components/WhoWeHelp/SoleTraders";
import XeroAccountants from "@/components/WhoWeHelp/XeroAccountants";
import EcommerceAccountants from "@/components/WhoWeHelp/EcommerceAccountants";
import PropertyAccountants from "@/components/WhoWeHelp/PropertyAccountants";
import FreelanceAccountants from "@/components/WhoWeHelp/FreelanceAccountants";
import AccountantsNearMe from "@/components/WhoWeHelp/AccountantsNearMe";
import CheapAccountants from "@/components/WhoWeHelp/CheapAccountants";

import { notFound } from "next/navigation";
import { connectDB } from "@/lib/connectDB";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";
import Page from "@/lib/Model/Page/Page";
import Template from "@/components/WhoWeHelp/Template";

export const dynamic = "force-static";
 

/* ======================================================
   STATIC PARAMS
====================================================== */

export async function generateStaticParams() {
  await connectDB();

  const services = await ServicePage.find({pageType: "service"}).select("link");
  const pages = await Page.find().select("slug");

  const predefined = [
    "sole-traders",
    "limited-companies",
    "partnerships",
    "limited-liability-partnerships",
    "contractor-accountants",
    "small-business-accountants",
    "xero-accountants",
    "ecommerce-accountants",
    "property-accountants",
    "freelance-accountants",
    "accountants-near-me",
    "cheap-accountants",
  ];

  const dynamicSlugs = [
    ...services.map((s) => s.link),
    ...pages.map((p) => p.slug),
  ];

  const allSlugs = [...new Set([...predefined, ...dynamicSlugs])];

  return allSlugs.map((slug) => ({ slug }));
}

/* ======================================================
   METADATA
====================================================== */

const staticMeta = {
  "sole-traders": {
    title: "UK Sole Traders Services for Accounting & Tax Filing",
    description:
      "UK sole trader business with Affotax's expert accounting and tax filing services.",
    keywords: ["sole traders"],
  },
  "limited-companies": {
    title: "Expert Accounting & Tax Services for Limited Companies",
    description:
      "Limited Company accounting, VAT returns, bookkeeping & tax services.",
    keywords: ["limited companies"],
  },
  "partnerships": {
    title: "Affordable Accounting Solutions for UK Partnerships",
    description:
      "Personalised accounting services for partnerships in the UK.",
    keywords: ["partnerships"],
  },
  "limited-liability-partnerships": {
    title: "Accounting & Tax Services for LLPs in the UK",
    description:
      "Expert accounting and tax solutions for UK LLPs.",
    keywords: ["limited liability partnerships"],
  },
  "contractor-accountants": {
    title: "Contractor Accounting & Tax Filing Services",
    description:
      "IR35 compliance, tax planning, and contractor accounting services.",
    keywords: ["contractor accountants"],
  },
  "small-business-accountants": {
    title: "UK Accounting & Tax Services for Small Businesses",
    description:
      "Expert accounting and tax planning for small businesses.",
    keywords: ["accountants for small business"],
  },
  "xero-accountants": {
    title: "Xero Accountants UK - Tax Filing Experts",
    description:
      "Certified Xero accountants helping with HMRC compliance.",
    keywords: ["xero accountants"],
  },
  "ecommerce-accountants": {
    title: "Accountants For Ecommerce Businesses",
    description:
      "Specialist ecommerce accountants for Amazon, Shopify & online sellers.",
    keywords: ["ecommerce accountants"],
  },
  "property-accountants": {
    title: "Property Accountants in UK",
    description:
      "Property accounting services for landlords and investors.",
    keywords: ["property accountant"],
  },
  "freelance-accountants": {
    title: "Expert Accountants for Freelancers",
    description:
      "Dedicated accounting support for freelancers.",
    keywords: ["freelance accountant"],
  },
  "accountants-near-me": {
    title: "Affordable Accounting Services Near You",
    description:
      "Find professional accountants near you in the UK.",
    keywords: ["accountancy near me"],
  },
  "cheap-accountants": {
    title: "Cheap Online Accountants in the UK",
    description:
      "Affordable accounting services for individuals and businesses.",
    keywords: ["cheap accountants"],
  },
};

export async function generateMetadata({ params }) {
  const slug = params.slug;

  if (staticMeta[slug]) {
    return {
      ...staticMeta[slug],
      metadataBase: new URL("https://affotax.com"),
      alternates: { canonical: `/${slug}` },
    };
  }

  await connectDB();

  const serviceData = await ServicePage.findOne({ link: slug, pageType: "service" });
  if (serviceData) {
    return {
      title: serviceData.metaTitle,
      description: serviceData.metaDescription,
      keywords: serviceData.keywords,
      metadataBase: new URL("https://affotax.com"),
      alternates: {
        canonical: `/${
          serviceData.canonical || serviceData.link
        }`,
      },
    };
  }

  const page = await Page.findOne({ slug });
  if (page) {
    return {
      title: page.metaTitle,
      description: page.metaDescription,
      keywords: page.keywords,
      metadataBase: new URL("https://affotax.com"),
      alternates: { canonical: `/${page.slug}` },
    };
  }

  return {};
}

/* ======================================================
   PAGE RENDERING
====================================================== */

const staticPages = {
  "sole-traders": SoleTraders,
  "limited-companies": LimitedCompanies,
  partnerships: Partnerships,
  "limited-liability-partnerships": LimitedLiabilityPartnership,
  "contractor-accountants": ContractorAccountants,
  "small-business-accountants": SmallBusinessAccountants,
  "xero-accountants": XeroAccountants,
  "ecommerce-accountants": EcommerceAccountants,
  "property-accountants": PropertyAccountants,
  "freelance-accountants": FreelanceAccountants,
  "accountants-near-me": AccountantsNearMe,
  "cheap-accountants": CheapAccountants,
};

export default async function ServicesPage({ params }) {
  const slug = params.slug;

  // Static components
  if (staticPages[slug]) {
    const Component = staticPages[slug];
    return <Component />;
  }

  await connectDB();

  // Dynamic Service Page
  const serviceData = await ServicePage.findOne({ link: slug, pageType: "service"  });
  if (serviceData) {
    return (
      <Service jsonData={JSON.stringify(serviceData)} />
    );
  }

  // CMS Page
  const page = await Page.findOne({ slug });
  if (page) {
    return (
      <Template jsonPage={JSON.stringify(page)} />
    );
  }

  notFound();
}











































































































// import Service from "@/components/Services/Service/Service";
// import ContractorAccountants from "@/components/WhoWeHelp/ContractorAccountants/index.jsx";
// import LimitedCompanies from "@/components/WhoWeHelp/LimitedCompanies/index.jsx";
// import LimitedLiabilityPartnership from "@/components/WhoWeHelp/LimitedLiabilityPartnership/index.jsx";
// import Partnerships from "@/components/WhoWeHelp/Partnerships/index.jsx";
// import SmallBusinessAccountants from "@/components/WhoWeHelp/SmallBusinessAccountants/index.jsx";
// import SoleTraders from "@/components/WhoWeHelp/SoleTraders/index.jsx";
// import XeroAccountants from "@/components/WhoWeHelp/XeroAccountants/index.jsx";
// import EcommerceAccountants from "@/components/WhoWeHelp/EcommerceAccountants/index.jsx";
// import PropertyAccountants from "@/components/WhoWeHelp/PropertyAccountants/index.jsx";
// import FreelanceAccountants from "@/components/WhoWeHelp/FreelanceAccountants/index.jsx";
// import AccountantsNearMe from "@/components/WhoWeHelp/AccountantsNearMe/index.jsx";
// import CheapAccountants from "@/components/WhoWeHelp/CheapAccountants/index.jsx";
// import { dataArr } from "@/data/serviceData";
// import { metaDataObject } from "@/data/metadataWhowehelp";
// import { notFound, redirect } from "next/navigation";
// import P45Form from "@/components/Services/Service/CustomServicePages/P45Form";
// import { getPageData } from "@/lib/getPage";
// import Template from "@/components/WhoWeHelp/Template";
// import Page from "@/lib/Model/Page/Page";
// import { connectDB } from "@/lib/connectDB";
// import ServicePage from "@/lib/Model/ServicePage/ServicePage";
// import Head from "next/head";

// import { NextResponse } from "next/server";

// export const dynamic = "force-static";
// export const dynamicParams = false;

// export async function generateStaticParams() {
// 	await connectDB();

// 	const services = await ServicePage.find().select("link");
// 	const pages = await Page.find().select("slug");

// 	const predefined = [
// 		"sole-traders",
// 		"limited-companies",
// 		"partnerships",
// 		"limited-liability-partnerships",
// 		"contractor-accountants",
// 		"small-business-accountants",
// 		"xero-accountants",
// 		"ecommerce-accountants",
// 		"property-accountants",
// 		"freelance-accountants",
// 		"accountants-near-me",
// 		"cheap-accountants",
// 	];

// 	console.log("SERVICES", services);
// 	console.log("pages", pages);

// 	const dynamicSlugs = [
// 		...services.map((s) => s.link),
// 		...pages.map((p) => p.slug),
// 	];

// 	const allSlugs = [...new Set([...predefined, ...dynamicSlugs])];

// 	return allSlugs.map((slug) => ({ slug }));
// }

// //GENERATING THE DYNAMIC META DATA
// export async function generateMetadata({ params }) {
// 	let metadata;

// 	switch (params.slug) {
// 		case "sole-traders":
// 			return (metadata = {
// 				title: "UK Sole Traders Services for Accounting & Tax Filing",
// 				keywords: ["sole traders"],
// 				description:
// 					"UK sole trader business with Affotax's expert accounting and tax filing services. Simplify your finances, maximize profits, and ensure HMRC compliance.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "limited-companies":
// 			return (metadata = {
// 				title: "Expert Accounting & Tax Services for Limited Companies",
// 				keywords: ["limited companies"],
// 				description:
// 					"Limited Company's finances with Affotax's comprehensive accounting and tax services. Our chartered accountants provide simplified bookkeeping, VAT returns, etc.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "partnerships":
// 			return (metadata = {
// 				title: "Affordable Accounting Solutions for UK Partnerships | Affotax",
// 				keywords: ["partnerships"],
// 				description:
// 					"Discover personalised accounting services for partnerships in the UK. Affotax offers tax planning, profit management, cash flow strategies, and more.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "limited-liability-partnerships":
// 			return (metadata = {
// 				title: "Accounting & Tax Services for LLPs in the UK - Affotax",
// 				keywords: ["limited liability partnerships"],
// 				description:
// 					"Expert accounting and tax solutions for UK LLPs. Affotax ensures boosts profits, and provides ongoing support. Contact us for a free consultation today.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "contractor-accountants":
// 			return (metadata = {
// 				title: "Contractor Accounting & Tax Filing Services | Affotax",
// 				keywords: ["contractor accountants"],
// 				description:
// 					"Effortless accounting and tax filing for contractors. Trust Affotax for IR35 compliance, tax planning, and personalized service. Transparent, fixed-fee pricing.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "small-business-accountants":
// 			return (metadata = {
// 				title: "UK Accounting & Tax Services for Small Businesses | Affotax",
// 				keywords: ["accountants for small business"],
// 				description:
// 					"Empower your small business with Affotax's expert accounting, tax planning, and strategic advice. Maximize deductions and streamline your finances today!",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "xero-accountants":
// 			return (metadata = {
// 				title: "Xero Accountants UK - Tax Filing & Business Growth Experts",
// 				keywords: ["xero accountants"],
// 				description:
// 					"Unlock Xero's potential with Affotax's expert accountants. Streamline your finances, ease bookkeeping, and get HMRC-compliant tax filing.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "ecommerce-accountants":
// 			return (metadata = {
// 				title: "Accountants For Ecommerce Businesses - Affotax",
// 				keywords: ["ecommerce accountants"],
// 				description:
// 					" Welcome to our dedicated accountancy services tailored specifically for ecommerce businesses. Whether you're a thriving Amazon seller, a budding Shopify entrepreneur, or operating on other online platforms, our expert accountants are here to support you. We specialize in understanding the unique financial challenges ecommerce businesses face, offering tailored solutions to optimize your financial management.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "property-accountants":
// 			return (metadata = {
// 				title: "Property Accountants in UK - Affotax",
// 				keywords: ["property accountant"],
// 				description:
// 					"Property accounting services for landlords & investors. Specializing in tax, bookkeeping, payroll, and more. Find local property accountants near you.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "freelance-accountants":
// 			return (metadata = {
// 				title: "Expert Accountants for Freelancers | Your Financial Partner",
// 				keywords: ["freelance accountant"],
// 				description:
// 					"Welcome to our dedicated page for freelancers! As a freelancer, managing your finances can be overwhelming, but you don’t have to do it alone. Our team of expert accountants for freelancers is here to provide you with the support and guidance you need to keep your finances in order. With our affordable accountants, you can focus on what you do best while we handle the rest.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "accountants-near-me":
// 			return (metadata = {
// 				title: "Affordable and Cheap Accounting Services",
// 				keywords: ["accountancy near me"],
// 				description:
// 					"When searching for 'accountants near me,' it's essential to choose professionals who understand the local financial landscape and can offer personalized services.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 		case "cheap-accountants":
// 			return (metadata = {
// 				title: "Cheap Online Accountants in the UK | Affotax",
// 				keywords: ["cheap accountants"],
// 				description:
// 					"Find cheap accountants in the UK offering high-quality, personalized services for small businesses and individuals. Expert solutions at great prices.",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: { canonical: `/${params.slug}` },
// 			});
// 	}

// 	if (!metadata) {
// 		const db = await connectDB();

// 		const serviceData = await ServicePage.findOne({ link: params.slug });
// 		if (!serviceData) {
// 			const page = await Page.findOne({ slug: params.slug });
// 			if (!page) {
// 				return;
// 				//notFound()
// 			}
// 			metadata = {
// 				title: page.metaTitle,
// 				description: page.metaDescription,
// 				keywords: page.keywords,
// 				authors: [{ name: "Affotax", url: "https://affotax.com" }],
// 				creator: "Ihtisham Ul Haq -- +92-301-6667656",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: {
// 					canonical: `/${page.slug}`,
// 				},
// 			};
// 		} else {
// 			metadata = {
// 				title: serviceData.metaTitle,
// 				description: serviceData.metaDescription,
// 				keywords: serviceData.keywords,
// 				authors: [{ name: "Affotax", url: "https://affotax.com" }],
// 				creator: "Ihtisham Ul Haq -- +92-301-6667656",
// 				metadataBase: new URL("https://affotax.com"),
// 				alternates: {
// 					canonical: `/${serviceData.canonical ? serviceData.canonical : serviceData.link}`,
// 				},
// 			};
// 		}
// 	}

// 	return metadata;
// }

// // SERVICES PAGE AND WHO WE HELP PAGES HERE

// export default async function ServicesPage({ params }) {
// 	let render;

// 	const location = params.slug;

// 	switch (location) {
// 		case "sole-traders":
// 			return (render = <SoleTraders />);
// 		case "limited-companies":
// 			return (render = <LimitedCompanies />);
// 		case "partnerships":
// 			return (render = <Partnerships />);
// 		case "limited-liability-partnerships":
// 			return (render = <LimitedLiabilityPartnership />);
// 		case "contractor-accountants":
// 			return (render = <ContractorAccountants />);
// 		case "small-business-accountants":
// 			return (render = <SmallBusinessAccountants />);
// 		case "xero-accountants":
// 			return (render = <XeroAccountants />);
// 		case "ecommerce-accountants":
// 			return (render = <EcommerceAccountants />);
// 		case "property-accountants":
// 			return (render = <PropertyAccountants />);
// 		case "freelance-accountants":
// 			return (render = <FreelanceAccountants />);
// 		case "accountants-near-me":
// 			return (render = <AccountantsNearMe />);
// 		case "cheap-accountants":
// 			return (render = <CheapAccountants />);
// 	}

// 	//Servei pages
// 	if (!render) {
// 		const db = await connectDB();

// 		const serviceData = await ServicePage.findOne({ link: params.slug });
// 		if (!serviceData) {
// 			const page = await Page.findOne({ slug: params.slug });
// 			if (!page) {
// 				notFound();
// 			}

// 			const jsonPage = JSON.stringify(page);
// 			render = <Template jsonPage={jsonPage} />;
// 		} else {
// 			render = <Service jsonData={JSON.stringify(serviceData)} />;
// 		}
// 	}

// 	return <> {render} </>;
// }
