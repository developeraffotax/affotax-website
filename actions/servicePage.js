'use server'

import { getFormData } from "@/lib/getFormData";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";











//Create a new Page
export async function createNewServicePage(formData) {
	const { metaTitle, metaDescription, keywords, link, title, content } = getFormData( formData,  "metaTitle", "metaDescription", "keywords", "link", "title", "content" );

	


	try {
		const db = await connectDB();

		const page = new ServicePage({
			
			metaTitle: metaTitle,
			metaDescription: metaDescription,
			keywords: keywords.split(","),

            link: link,

			title: title,
			content: content,

			pricingSection: [],

			whyChooseSection: {
				link: link
			},

			faqSection: []
			


        })

		const doc = await page.save();
		//revalidatePath('/admin/view-pages')
		return {
			success: true,
		};
	} catch (error) {
		console.log(error)
		return {
			success: false,
		};
	}

	
}