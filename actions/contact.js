'use server';

import { getFormData } from "@/lib/getFormData";
import sendMail from "@/lib/sendMail";










//  SEND MESSAGE

export async function sendMessage(formData) {
        

        //const {name, email, service, message} = getFormData(formData, 'name', 'email', 'service', 'message');

        //console.log(email, name)

        const res = await sendMail();

        console.log(res)
}