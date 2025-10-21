"use server";

import { getFormData } from "@/lib/getFormData";
import sendInstantQuoteMail from "@/lib/sendInstantQuoteMail";
import sendMail from "@/lib/sendMail";
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import sendQuoteMail from "@/lib/sendQuoteMail";
 
import { verifyRecaptcha } from "@/lib/verifyRecaptcha";

//  SEND MESSAGE

export async function sendMessage(prevState, formData) {
	const { name, email, service, message, hidden, recaptchaToken } =
		getFormData(
			formData,
			"name",
			"email",
			"service",
			"message",
			"hidden",
			"recaptchaToken"
		);

	if(!name || name.trim().length === 0 || !email || !message || service === "No Service Selected") {
		return {
			success: false,
			message: "All fields are required. Validation Failed",
		};
	}



	if (!/\s/.test(message) || !/[a-z]{3,}/i.test(message)) {
		return { success: false, message: "Invalid Message" };
	}


	


	// Honeypot trap
	if (hidden) {
		return { success: false, message: "Error occurred" };
	}

	// 🔒 Verify reCAPTCHA token
	const captchaCheck = await verifyRecaptcha(recaptchaToken);
	if (!captchaCheck.success) {
		return captchaCheck; // e.g. { success: false, message: "Failed reCAPTCHA validation" }
	}




	try {
		const res = await sendMail(name, email, service, message);
	} catch (error) {
		return {
			success: false,
			message:
				"Error occured while sending email | Please try again later",
		};
		//redirect('/contact-us?success=false')
	}
	redirect("/thank-you");
}





















// Instant Quote Mail
export async function sendInstantQuote(prevState, formData) {
	const headersList = headers();
	const referer = headersList.get("referer");

	const {
		name,
		email,
		phoneNumber,
		businessType,
		turnover,
		vatReturns,
		payrollManaging,
		bookkeeping,
		hidden,
		recaptchaToken,
	} = getFormData(
		formData,
		"name",
		"email",
		"phoneNumber",
		"businessType",
		"turnover",
		"vatReturns",
		"payrollManaging",
		"bookkeeping",
		"hidden",
		"recaptchaToken"
	);

	if (hidden) {
		return {
			error: true,
		};
	}

	console.log("bizType💚", businessType)

	if (!name || name.trim().length === 0 || !email || !businessType || !turnover) {
		return {
			error: true,
		};
	}

	const data = {
		name,
		email,
		phoneNumber,
		businessType,
		turnover,
		vatReturns,
		payrollManaging,
		bookkeeping,
	};

	// 🔒 Verify reCAPTCHA token
	const captchaCheck = await verifyRecaptcha(recaptchaToken);
	if (!captchaCheck.success) {
		return captchaCheck; // e.g. { success: false, message: "Failed reCAPTCHA validation" }
	}


	 
	try {
		const res = await sendInstantQuoteMail(data);
		console.log(res, data);
		// if (res) {
		//             return { success: true, message: `Your query is submitted | We'll get back to you soon`, };
		//         }
	} catch (error) {
		console.log(error);
		return {
			success: false,
			message:
				"Error occured while sending email | Please try again later",
		};
	}
	redirect("/thank-you");
	//redirect(`${referer}?success=true`);
}






















// Instant Quote From Header or Layout
export async function sendQuote(prevState, formData) {
	const {
		name,
		email,
		phoneNumber,
		businessType,
		turnover,
		bookkeeping,
		message,
		hidden,
		recaptchaToken,
	} = getFormData(
		formData,
		"name",
		"email",
		"phoneNumber",
		"businessType",
		"turnover",
		"bookkeeping",
		"message",
		"hidden",
		"recaptchaToken"
	);

	if (hidden) {
		console.log("THE VALUE OF HIDDEN INPUT IS:", hidden);
		return { success: false, message: "access_denied", invalidArr: [] };
	}

	console.log(name, businessType);

	const invalidArr = [];

	if (!name || name.trim().length === 0) {
		invalidArr.push("name");
	}

	if (email.length === 0) {
		invalidArr.push("email");
	}

	if (!businessType ) {
		invalidArr.push("businessType");
	}

	if (!turnover) {
		invalidArr.push("turnover");
	}

	if (invalidArr.length > 0) {
		return { success: false, message: "", invalidArr: invalidArr };
	}

	const data = {
		name,
		email,
		phoneNumber,
		businessType,
		turnover,
		bookkeeping,
		message,
	};

	// 🔒 Verify reCAPTCHA token
	const captchaCheck = await verifyRecaptcha(recaptchaToken);
	if (!captchaCheck.success) {
		return {
			...captchaCheck,
			invalidArr: invalidArr,
		};
	}

	
	try {
		const res = await sendQuoteMail(data);
		console.log(res, data);

		//return { success: true, message: "Message sent successfully!", invalidArr: [] };
	} catch (error) {
		console.log(error);
		return {
			success: false,
			message:
				"Error occured while sending email | Please try again later",
			invalidArr: [],
		};
	}

	redirect("/thank-you");
}
