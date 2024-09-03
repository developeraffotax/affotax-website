
"use server";

import { connectDB } from "@/lib/connectDB";
import { getFormData } from "@/lib/getFormData";
import { redirect } from "next/navigation";
import Blog from "@/lib/Model/Blog";
import { put } from "@vercel/blob";

import { revalidatePath } from "next/cache";
import Page from "@/lib/Model/Page/Page";








//Create a new Page
export async function createNewPage(formData) {
	const { title, metaTitle, metaDescription, keywords, slug } = getFormData( formData, "title", "metaTitle", "metaDescription", "keywords", "slug" );

	console.log(title, slug, "THE SLUG VALUE IS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")


	try {
		const db = await connectDB();

		const page = new Page({
			title: title,
            slug: slug,

			metaTitle: metaTitle,
			metaDescription: metaDescription,
			keywords: keywords.split(","),

            HeroSection: {
                slug: slug
            },

			SecondSection: {
				slug: slug
			},

			ThirdSection: {
				slug: slug
			},

			FourthSection: {
				slug: slug
			},

			FifthSection: {
				slug: slug
			}


        })

		const pageDoc = await page.save();
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













//Hero Section
export async function createHeroSection(formData) {
	const { heading, imageUrl, description1, description2, btnText, btnLink, slug } = getFormData( formData, "heading", "imageUrl", "description1", "description2", "metaTitle", "metaDescription", "keywords", "btnText", "btnLink", "slug" );

	try {
		const db = await connectDB();

		const HeroSection = {
			heading,
			slug,
			imageUrl,
			description1,
			description2,
			btnText,
			btnLink
		}

		// update here
		const res = await Page.updateOne({slug: slug}, {$set: {
			HeroSection : HeroSection
		}})

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





//Second Section
export async function createContentWithImageSection(formData) {
	const { heading, html, imageUrl, imagePosition, slug } = getFormData( formData, "heading", "html", "imageUrl", "imagePosition", "slug" );

	try {
		const db = await connectDB();

		const Section = {
			heading,
			slug,
			imageUrl,
			html,
			imagePosition,
			
		}

		// update here
		const res = await Page.updateOne({slug: slug}, {$set: {
			ContentWithImageSection : [Section]
		}})

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














//Third Section
export async function createOurServicesSection(formData) {
	const { heading, shortDescription, arr,  slug } = getFormData( formData, "heading", "shortDescription", "arr", "slug" );

	try {
		const db = await connectDB();

		const OurServicesSection = {
			heading,
			shortDescription,
			arr: JSON.parse(arr),
			slug,
			
			
		}

		// update here
		const res = await Page.updateOne({slug: slug}, {$set: {
			OurServicesSection : OurServicesSection
		}})

		console.log(res)

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











//Fourth Section
export async function createWhyChooseUsSection(formData) {
	const { heading, shortDescription, arr,  slug } = getFormData( formData, "heading", "shortDescription", "arr", "slug" );

	try {
		const db = await connectDB();

		const WhyChooseUsSection = {
			heading,
			shortDescription,
			arr: JSON.parse(arr),
			slug,
			
			
		}

		// update here
		const res = await Page.updateOne({slug: slug}, {$set: {
			WhyChooseUsSection : WhyChooseUsSection
		}})

		console.log(res)

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



































































// Upload Image
export async function UploadImage(formData) {
	const { imgFile } = getFormData(formData, "imgFile");

	// console.log(imgFile, "THE IMAGE FILE");

	try {
		const blob = await put(imgFile.name, imgFile, {
			access: "public",
		});

		return {
			percent: 100,
			status: "done",
			...blob,
		};
	} catch (error) {
		console.log(error);
		return {
			status: "error",
		};
	}
}



















// //Update OPERATION
// export async function updateBlog(formData) {
// 	const { title, description, metaTitle, metaDescription, imgUrl, content, id, keywords } =
// 		getFormData(
// 			formData,
// 			"title",
// 			"description",
// 			"metaTitle",
// 			"metaDescription",
// 			"imgUrl",
// 			"content",
// 			"id",
// 			"keywords"
// 		);

// 	try {
// 		const db = await connectDB();

// 		const oldDoc = await Blog.findOne({_id : id});

		
// 		oldDoc.metaTitle= metaTitle;
// 		oldDoc.metaDescription= metaDescription;
// 		oldDoc.title= title;
// 		oldDoc.slug= title.toLocaleLowerCase().trim().replaceAll(" ", "-").replace(/[^\w\-]/g, '');
// 		oldDoc.description= description;
// 		oldDoc.imageUrl= imgUrl;
// 		oldDoc.content= content;
// 		oldDoc.keywords= keywords.split(",")
		

// 		const newDoc = await oldDoc.save();
		
// 		// return {
// 		// 	success: true,
// 		// };
// 	} catch (error) {
// 		return {
// 			success: false,
// 		};
// 	}


// 	revalidatePath('/admin/view-blogs');
// 	redirect('/admin/view-blogs')
// }