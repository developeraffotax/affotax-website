"use server";

import { connectDB } from "@/lib/connectDB";
import { getFormData } from "@/lib/getFormData";
import { redirect } from "next/navigation";
import Blog from "@/lib/Model/Blog";
import { put } from "@vercel/blob";

import { revalidatePath } from "next/cache";

//CREATE OPERATION
export async function createBlog(formData) {
	const { title, description, metaTitle, metaDescription, imgUrl, content, keywords } =
		getFormData(
			formData,
			"title",
			"description",
			"metaTitle",
			"metaDescription",
			"imgUrl",
			"content",
			"keywords"
		);
console.log(keywords)
	try {
		const db = await connectDB();

		const blog = new Blog({
			metaTitle: metaTitle,
			metaDescription: metaDescription,
			title: title,
			slug: title.toLocaleLowerCase().trim().replaceAll(" ", "-").replace(/[^\w\-]/g, ''),
			description: description,
			imageUrl: imgUrl,
			content: content,
			keywords: keywords.split(",")
		});

		const blogDoc = await blog.save();
		revalidatePath('/admin/view-blogs')
		return {
			success: true,
		};
	} catch (error) {
		return {
			success: false,
		};
	}

	
}


//Upload Image
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



















//Update OPERATION
export async function updateBlog(formData) {
	const { title, description, metaTitle, metaDescription, imgUrl, content, id, keywords } =
		getFormData(
			formData,
			"title",
			"description",
			"metaTitle",
			"metaDescription",
			"imgUrl",
			"content",
			"id",
			"keywords"
		);

	try {
		const db = await connectDB();

		const oldDoc = await Blog.findOne({_id : id});

		
		oldDoc.metaTitle= metaTitle;
		oldDoc.metaDescription= metaDescription;
		oldDoc.title= title;
		oldDoc.slug= title.toLocaleLowerCase().trim().replaceAll(" ", "-").replace(/[^\w\-]/g, '');
		oldDoc.description= description;
		oldDoc.imageUrl= imgUrl;
		oldDoc.content= content;
		oldDoc.keywords= keywords.split(",")
		

		const newDoc = await oldDoc.save();
		
		// return {
		// 	success: true,
		// };
	} catch (error) {
		return {
			success: false,
		};
	}


	revalidatePath('/admin/view-blogs');
	redirect('/admin/view-blogs')
}