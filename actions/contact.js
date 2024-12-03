"use server";

import { getFormData } from "@/lib/getFormData";
import sendInstantQuoteMail from "@/lib/sendInstantQuoteMail";
import sendMail from "@/lib/sendMail";
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import sendQuoteMail from "@/lib/sendQuoteMail";


//  SEND MESSAGE

export async function sendMessage(prevState, formData) {
	const { name, email, service, message, hidden } = getFormData( formData, "name", "email", "service", "message", "hidden" );

	

	if(hidden) {
		
		return { success: false, message: "Error occured" };
	}


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

export async function sendInstantQuote(prevState, formData) {

	const headersList = headers()
	const referer = headersList.get('referer')


	const { name, email, phoneNumber, businessType, turnover, vatReturns, payrollManaging, bookkeeping, hidden } = getFormData( formData, "name", "email", "phoneNumber", "businessType", "turnover", "vatReturns", "payrollManaging", "bookkeeping", "hidden"  );
	
	if(hidden) {
		return {
			error: true
		}
	}

	if (!name || !email) {
		return {
			error: true
		}
	}


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

	


	const { name, email, phoneNumber, businessType, turnover, bookkeeping, message, hidden } = getFormData( formData, "name", "email", "phoneNumber", "businessType", "turnover", "bookkeeping", "message", "hidden"  );
	
	if(hidden) {
		console.log('THE VALUE OF HIDDEN INPUT IS:', hidden)
		return { success: false, message: "access_denied", invalidArr: []};
	}


	console.log(name, businessType)

	const invalidArr = []

	if(name.length === 0) {
		invalidArr.push('name')
	}

	if(email.length === 0) {
		invalidArr.push('email')
	}

	if(!businessType) {
		invalidArr.push('businessType')
	}

	if(!turnover) {
		invalidArr.push('turnover')
	}

	if(invalidArr.length > 0) {
		return { success: false, message: "", invalidArr: invalidArr};
	}

	



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
		
		
		//return { success: true, message: "Message sent successfully!", invalidArr: [] };
		
	} catch (error) {
		console.log(error)
		return { success: false, message: "Error occured while sending email | Please try again later", invalidArr: [] };
		

	}

	redirect('/thank-you');

}