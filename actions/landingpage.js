"use server";

import { connectDB } from "@/lib/connectDB";
import { getFormData } from "@/lib/getFormData";
import { redirect } from "next/navigation";
import Blog from "@/lib/Model/Blog";
import { put } from "@vercel/blob";

import { revalidatePath } from "next/cache";
 
import LandingPage from "@/lib/Model/LandingPage/LandingPage";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";











//Create a new Page
export async function createNewPage(formData) {
	const { title, metaTitle, metaDescription, keywords, slug } = getFormData(
		formData,
		"title",
		"metaTitle",
		"metaDescription",
		"keywords",
		"slug"
	);

	try {
		const db = await connectDB();

		const landing_page = new LandingPage({
			title: title,
			slug: slug,

			metaTitle: metaTitle,
			metaDescription: metaDescription,
			keywords: keywords.split(","),

			HeroSection: {
				slug: slug,
			},

			PricingSection: {
				slug: slug,
			},

			OurServicesSection: {
				slug: slug,
			},

			WhyChooseUsSection: {
				slug: slug,
			},
		});



		const pageDoc = await landing_page.save();



		 
		 
		


		const servicePage = {
			metaTitle: metaTitle,
			metaDescription: metaDescription,
			keywords: keywords.split(","),

			link: `landing-${slug}`,
			title: title,
			 
		}






		
		const page = new ServicePage(servicePage);
		const doc = await page.save();




		revalidatePath(`/services/${slug}`);
		 
		return {
			success: true,
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
		};
	}
}






//Delete a Page
export async function deleteNewPage(formData) {
	const { slug } = getFormData(formData, "slug");

	try {
		const db = await connectDB();

		const { acknowledged } = await LandingPage.deleteOne({ slug: slug });

		if (acknowledged) {
			revalidatePath(`/services/${slug}`);
			revalidatePath(`/admin/landing-page/view`);
			return {
				success: true,
			};
		} else {
			return {
				success: false,
			};
		}
	} catch (error) {
		console.log(error);
		return {
			success: false,
		};
	}
}














//Hero Section
export async function createHeroSection(formData) {
	const { heading, imageUrl, html, btnText, btnLink, slug } = getFormData(
		formData,
		"heading",
		"imageUrl",
		"html",
		"metaTitle",
		"metaDescription",
		"keywords",
		"btnText",
		"btnLink",
		"slug"
	);

	try {
		const db = await connectDB();

		const HeroSection = {
			heading,
			slug,
			imageUrl,
			html,
			btnText,
			btnLink,
		};
		console.log(slug);
		// update here
		const res = await LandingPage.updateOne(
			{ slug: slug },
			{
				$set: {
					HeroSection: HeroSection,
				},
			}
		);

		if (res.modifiedCount === 0) {
			return {
				success: false,
			};
		}

		revalidatePath(`/services/${slug}`);

		return {
			success: true,
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
		};
	}
}









//deleteHeroSection-------------DELETE OPERATION
// export async function deleteHeroSection(formData) {
// 	const { slug } = getFormData(formData, "slug");

// 	try {
// 		const db = await connectDB();

// 		// delete here
// 		const res = await LandingPage.updateOne(
// 			{ slug: slug },
// 			{
// 				$set: {
// 					HeroSection: null,
// 				},
// 			}
// 		);

// 		if (res.modifiedCount === 0) {
// 			return {
// 				success: false,
// 			};
// 		}

// 		revalidatePath(`/services/${slug}`);

// 		return {
// 			success: true,
// 		};
// 	} catch (error) {
// 		console.log(error);
// 		return {
// 			success: false,
// 		};
// 	}
// }
















//Faq Section
export async function createFaqSection(formData) {
	const { faqArr, slug } = getFormData(formData, "faqArr", "slug");

	try {
		const db = await connectDB();

		const FaqSection = JSON.parse(faqArr);

		// update here
		const res = await LandingPage.updateOne(
			{ slug: slug },
			{
				$set: {
					FaqSection: FaqSection,
				},
			}
		);

		if (res.modifiedCount === 0) {
			return {
				success: false,
			};
		}

		revalidatePath(`/services/${slug}`);

		return {
			success: true,
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
		};
	}
}
















//CREATE / UPDATE OPERATION---------------------------------------------createHowItWorksSection
export async function createHowItWorksSection(formData) {
	const { heading, arr, slug } = getFormData(
		formData,
		"heading",
		"arr",
		"slug"
	);

	try {
		const db = await connectDB();

		const HowItWorksSection = {
			heading,

			arr: JSON.parse(arr),
			slug,
		};

		// update here
		const res = await LandingPage.updateOne(
			{ slug: slug },
			{
				$set: {
					HowItWorksSection: HowItWorksSection,
				},
			}
		);

		if (res.modifiedCount === 0) {
			return {
				success: false,
			};
		}

		revalidatePath(`/services/${slug}`);

		return {
			success: true,
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
		};
	}
}















//CREATE OPERATION / UPDATE OPERATION--------------------------------------------------createWhyChooseUsSection
export async function createWhyChooseUsSection(formData) {
	const { heading, shortDescription, arr, slug } = getFormData(
		formData,
		"heading",
		"shortDescription",
		"arr",
		"slug"
	);

	try {
		const db = await connectDB();

		const WhyChooseUsSection = {
			heading,
			shortDescription,
			arr: JSON.parse(arr),
			slug,
		};

		// update here
		const res = await LandingPage.updateOne(
			{ slug: slug },
			{
				$set: {
					WhyChooseUsSection: WhyChooseUsSection,
				},
			}
		);

		if (res.modifiedCount === 0) {
			return {
				success: false,
			};
		}

		revalidatePath(`/services/${slug}`);

		return {
			success: true,
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
		};
	}
}

//DELETE OPERATION--------------------------------------------------createWhyChooseUsSection
// export async function deleteWhyChooseUsSection(formData) {
// 	const { slug } = getFormData(formData, "slug");

// 	try {
// 		const db = await connectDB();

// 		// delete here
// 		const res = await LandingPage.updateOne(
// 			{ slug: slug },
// 			{
// 				$set: {
// 					WhyChooseUsSection: null,
// 				},
// 			}
// 		);

// 		if (res.modifiedCount === 0) {
// 			return {
// 				success: false,
// 			};
// 		}

// 		revalidatePath(`/services/${slug}`);

// 		return {
// 			success: true,
// 		};
// 	} catch (error) {
// 		console.log(error);
// 		return {
// 			success: false,
// 		};
// 	}
// }


















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
