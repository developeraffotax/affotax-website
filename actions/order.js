"use server";

import { connectDB } from "@/lib/connectDB";
import { getFormData } from "@/lib/getFormData";
import Customer from "@/lib/Model/Customer";
import Order from "@/lib/Model/Order";
import sendMail from "@/lib/sendMail";
import { redirect } from "next/navigation";
import mongoose from "mongoose";
import sendPaymentMail from "@/lib/sendPaymentMail";
import OrderNumber from "@/lib/Model/OrderNumber";

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


       const oldOrderNumber = await OrderNumber.find().sort({_id: -1}).limit(1);
       const newOrderNumber = oldOrderNumber[0].orderNumber + 1;
        
       console.log(newOrderNumber)
       const newOrderNumberDoc = await OrderNumber.create({
           orderNumber: newOrderNumber
       });

       console.log(newOrderNumberDoc)
       


       let newOrderData = {
        items: orderData.items.map((el) => ({id: el.id, pageTitle: el.pageTitle})),
        totalPrice: orderData.totalPrice,
        payment_id: paymentId,
        customer_id: customerDoc._id,
        orderNumber: 'AF#' + newOrderNumberDoc.orderNumber.toString()

       }

        const order = new Order(newOrderData)
         
        const orderDoc = await order.save();

        //console.log(orderDoc)

        

       const isEmailSent = await sendPaymentMail(customerData, orderData, orderDoc.orderNumber)


       console.log(isEmailSent)
        
        

       
		
	} catch (error) {
        console.log(error)
		return false;
		//redirect('/contact-us?success=false')

	} 
    

    redirect('/order-success');
	
}
