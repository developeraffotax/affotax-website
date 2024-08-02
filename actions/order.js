"use server";

import { connectDB } from "@/lib/connectDB";
import { getFormData } from "@/lib/getFormData";
import Customer from "@/lib/Model/Customer";
import Order from "@/lib/Model/Order";
import sendMail from "@/lib/sendMail";
import { redirect } from "next/navigation";
import mongoose from "mongoose";

//Create order--------------

export async function createOrder(customerData, orderData, paymentId) {
	//const { name, email, service, message } = getFormData( formData, "name", "email", "service", "message" );


    

    
	try {
        const db = await connectDB();

        console.log('hello')

        const customer = new Customer({
            ...customerData
        })

       const customerDoc =  await customer.save();

       console.log(customerDoc)



       let newOrderData = {
        items: orderData.items.map((el) => ({id: el.id, pageTitle: el.pageTitle})),
        totalPrice: orderData.totalPrice,
        payment_id: paymentId,
        customer_id: customerDoc._id

       }

        const order = new Order(newOrderData)
         
        const orderDoc = await order.save();

        console.log(orderDoc)

        
        

       
		
	} catch (error) {
        console.log(error)
		return false;
		//redirect('/contact-us?success=false')

	} 
    

    redirect('/order-success');
	
}
