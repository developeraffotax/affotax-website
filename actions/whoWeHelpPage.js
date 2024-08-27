
"use server";

import { connectDB } from "@/lib/connectDB";
import { getFormData } from "@/lib/getFormData";
import { redirect } from "next/navigation";
import Blog from "@/lib/Model/Blog";
import { put } from "@vercel/blob";

import { revalidatePath } from "next/cache";
import Page from "@/lib/Model/Page/Page";


//Hero Section
export async function createHeroSection(formData) {
	const { heading, imageUrl, description1, description2, metaTitle, metaDescription, keywords, btnText, btnLink, slug } = getFormData( formData, "heading", "imageUrl", "description1", "description2", "metaTitle", "metaDescription", "keywords", "btnText", "btnLink", "slug" );

	try {
		const db = await connectDB();

		const page = new Page({
            slug: slug,
            HeroSection : {
                heading,
                slug,
                imageUrl,
                description1,
                description2,
                metaTitle,
                metaDescription,
                keywords: keywords.split(","),
                btnText,
                btnLink

            }
        })

		const pageDoc = await page.save();
		revalidatePath('/admin/view-pages')
		return {
			success: true,
		};
	} catch (error) {
		return {
			success: false,
		};
	}

	
}





//Second Section
export async function createSecondSection(formData) {
	const { heading, imageUrl, description1, description2, metaTitle, metaDescription, keywords, btnText, btnLink, slug } = getFormData( formData, "heading", "imageUrl", "description1", "description2", "metaTitle", "metaDescription", "keywords", "btnText", "btnLink", "slug" );

	try {
		const db = await connectDB();

		const page = new Page({
            slug: slug,
            HeroSection : {
                heading,
                slug,
                imageUrl,
                description1,
                description2,
                metaTitle,
                metaDescription,
                keywords: keywords.split(","),
                btnText,
                btnLink

            }
        })

		const pageDoc = await page.save();
		//revalidatePath('/admin/view-blogs')
		return {
			success: true,
		};
	} catch (error) {
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