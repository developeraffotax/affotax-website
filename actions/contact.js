"use server";

import { getFormData } from "@/lib/getFormData";
import sendInstantQuoteMail from "@/lib/sendInstantQuoteMail";
import sendMail from "@/lib/sendMail";
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import sendQuoteMail from "@/lib/sendQuoteMail";


//  SEND MESSAGE

export async function sendMessage(prevState, formData) {
	const { name, email, service, message } = getFormData( formData, "name", "email", "service", "message" );
	try {
		const res = await sendMail(name, email, service, message);

		if (res) {
                        return { success: true, message: `Your query is submitted | We'll get back to you soon`, };
                }

		
	} catch (error) {
		return { success: false, message: "Error occured while sending email | Please try again later", };
		//redirect('/contact-us?success=false')

	}
	//redirect('/contact-us?success=true')
}













// Instant Quote Mail

export async function sendInstantQuote(formData) {

	const headersList = headers()
	const referer = headersList.get('referer')


	const { name, email, phoneNumber, businessType, turnover, vatReturns, payrollManaging, bookkeeping } = getFormData( formData, "name", "email", "phoneNumber", "businessType", "turnover", "vatReturns", "payrollManaging", "bookkeeping"  );
	
	const data = {
		name,
		email,
		phoneNumber,
		businessType,
		turnover,
		vatReturns,
		payrollManaging,
		bookkeeping
	}

	

	try {
		const res = await sendInstantQuoteMail(data);
		console.log(res, data)
		// if (res) {
        //             return { success: true, message: `Your query is submitted | We'll get back to you soon`, };
        //         }

		
	} catch (error) {
		console.log(error)
		return { success: false, message: "Error occured while sending email | Please try again later", };
		

	}
	//redirect('/contact-us?success=true')
	redirect(`${referer}?success=true`);
}






















// Instant Quote From Header or Layout

export async function sendQuote(prevState, formData) {

	


	const { name, email, phoneNumber, businessType, turnover, bookkeeping, message } = getFormData( formData, "name", "email", "phoneNumber", "businessType", "turnover", "bookkeeping", "message"  );
	
	const data = {
		name,
		email,
		phoneNumber,
		businessType,
		turnover,
		bookkeeping,
		message
	}

	

	try {
		const res = await sendQuoteMail(data);
		console.log(res, data)

		return { success: true, message: "Message sent successfully!", };
		
	} catch (error) {
		console.log(error)
		return { success: false, message: "Error occured while sending email | Please try again later", };
		

	}

}