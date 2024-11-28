import { connectDB } from "@/lib/connectDB";
import Blog from "@/lib/Model/Blog";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";


export const revalidate = 12 * 60 * 60;


export default async function sitemap() {
	const locationUrls = [
		"https://affotax.com/location/accountants-in-bradford",
		"https://affotax.com/location/accountants-bridgend",
		"https://affotax.com/location/accountants-in-bristol",
		"https://affotax.com/location/accountants-cambridge",
		"https://affotax.com/location/accountants-in-central-london",
		"https://affotax.com/location/accountants-in-coventry",
		"https://affotax.com/location/accountants-in-dundee",
		"https://affotax.com/location/accountants-in-east-london",
		"https://affotax.com/location/edinburgh-accountants",
		"https://affotax.com/location/accountants-in-glasgow",
		"https://affotax.com/location/accountants-in-greenwich",
		"https://affotax.com/location/accountants-inverness",
		"https://affotax.com/location/accountants-in-leeds",
		"https://affotax.com/location/accountants-in-leicester",
		"https://affotax.com/location/accountants-in-liverpool",
		"https://affotax.com/location/accountants-in-newcastle",
		"https://affotax.com/location/accountants-newport",
		"https://affotax.com/location/accountants-in-north-london",
		"https://affotax.com/location/accountants-in-norwich",
		"https://affotax.com/location/accountants-in-nottingham",
		"https://affotax.com/location/accountants-oxford",
		"https://affotax.com/location/accountants-in-plymouth ",
		"https://affotax.com/location/accountants-in-portsmouth",
		"https://affotax.com/location/accountants-in-sheffield",
		"https://affotax.com/location/accountants-in-southampton",
		"https://affotax.com/location/accountants-in-swansea",
		"https://affotax.com/location/accountants-in-west-london",
		"https://affotax.com/location/accountants-in-wrexham",
		"https://affotax.com/location/aberdeen-accountants",
		"https://affotax.com/location/birmingham",
		"https://affotax.com/location/cardiff",
		"https://affotax.com/location/england",
		"https://affotax.com/location/london",
		"https://affotax.com/location/manchester",
		"https://affotax.com/location/northern-ireland",
		"https://affotax.com/location/scotland",
		"https://affotax.com/location/wales",

		//also adding the static who-we-help sitemap here
		"https://affotax.com/sole-traders",
		"https://affotax.com/limited-companies",
		"https://affotax.com/partnerships",
		"https://affotax.com/limited-liability-partnerships",
		"https://affotax.com/contractor-accountants",
		"https://affotax.com/small-business-accountants",
		"https://affotax.com/xero-accountants",
		"https://affotax.com/ecommerce-accountants",
		"https://affotax.com/property-accountants",
		"https://affotax.com/freelance-accountants",
		"https://affotax.com/accountants-near-me",
		"https://affotax.com/cheap-accountants",
		

		"https://affotax.com/blog",
	];

	// Sitemap of Location Pages
	const mappedLocationUrls = locationUrls.map((el) => {
		return {
			url: el,
			lastModified: "2024-07-04T11:28:15.949Z",
			changeFrequency: "monthly",
			priority: 0.5,
		};
	});

	// Connecting to db
	const db = await connectDB();

	// Sitemap of Blogs Pages
	 const blogsData = await Blog.find({});
	 const blogsSitemap = blogsData
	 .filter((blog) => {
		 if (blog.slug) {
			 return blog;
		 }
	 })
	 .map((el) => {
		 return {
			 url: `https://affotax.com/blog/${el.slug}`,
			 lastModified: new Date(),
			 changeFrequency: "monthly",
			 priority: 0.7,
		 };
	 });





	
	 // Sitemap of Service Pages
	const servicesData = await ServicePage.find({});
	const mappedArr = servicesData
		.filter((page) => {
			if (page.link) {
				return page;
			}
		})
		.map((el) => {
			return {
				url: `https://affotax.com/${el.link}`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.7,
			};
		});




	

	const sitemapArr = [
		{
			url: "https://affotax.com",
			lastModified: "2024-06-04T11:28:15.949Z",
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://affotax.com/pricing",
			lastModified: "2024-07-04T11:28:15.949Z",
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://affotax.com/services",
			lastModified: "2024-07-04T11:28:15.949Z",
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://affotax.com/about-us",
			lastModified: "2024-07-04T11:28:15.949Z",
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://affotax.com/contact-us",
			lastModified: "2024-07-04T11:28:15.949Z",
			changeFrequency: "monthly",
			priority: 0.8,
		},

		...mappedLocationUrls,
		...mappedArr,
		...blogsSitemap
	];

	return sitemapArr;
}
