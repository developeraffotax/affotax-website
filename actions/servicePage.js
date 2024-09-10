// 'use server'

// import { connectDB } from "@/lib/connectDB";
// import { getFormData } from "@/lib/getFormData";
// import ServicePage from "@/lib/Model/ServicePage/ServicePage";











// //Create a new Page
// export async function createNewServicePage(formData) {
// 	const { metaTitle, metaDescription, keywords, link, title, content, pricingSection, whyChooseSection, faqSection } = getFormData( formData,  "metaTitle", "metaDescription", "keywords", "link", "title", "content", "pricingSection", "whyChooseSection", "faqSection" );

	
// 	console.log(keywords)


// 	try {
// 		const db = await connectDB();

// 		const page = new ServicePage({
			
// 			metaTitle: metaTitle,
// 			metaDescription: metaDescription,
// 			keywords: keywords.split(","),

//             link: link,

// 			title: title,
// 			content: content,

// 			pricingSection: [],

// 			whyChooseSection: {
// 				link: link
// 			},

// 			faqSection: []
			


//         })

// 		const doc = await page.save();
// 		//revalidatePath('/admin/view-pages')
// 		return {
// 			success: true,
// 		};
// 	} catch (error) {
// 		console.log(error)
// 		return {
// 			success: false,
// 		};
// 	}

	
// }