// app/api/checkout/session/route.js
import { connectDB } from '@/lib/connectDB';
import Order from '@/lib/Model/Order';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';




// orderData={{
//   items: cartItemsArr,
//   totalPrice:
//     totalPrice +
//     (20 / 100) * totalPrice,
// }}


function generateRandomNumber() {
  // Get current time in milliseconds
  const timestamp = new Date().getTime();
  
  // Use modulus to ensure the number is 6 digits
  const randomNum = timestamp % 10000000;
  
  // If the result is less than 6 digits, pad with leading zeros
  const sevenDigitNumber = randomNum.toString().padStart(7, '0');


  
  return sevenDigitNumber;
}
 

export async function GET(req) {
      
  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
   

  const headersList = await headers()
  const origin = headersList.get('origin')


 
 
  try {

      // const orderNumber = generateRandomNumber()


      //  const db = await connectDB();

      //  let newOrderData = {
      //   items: cartItemsArr.map((el) => ({priceId: el._id, pageTitle: el.pageTitle, addOns: el.addOns?.filter((addOn) => addOn.isChecked === true)})),
      //   totalPrice: (+totalPrice + (+totalPrice * (20/100))),
      //   // payment_id: paymentId,
      //   // customer_id: customerDoc._id,
      //   orderNumber: orderNumber,
      //   payment_status: "pending"

      //  }

      //   const order = new Order(newOrderData)
         
      //   const orderDoc = await order.save();









    



    const session = await stripe.checkout.sessions.retrieve('cs_test_b19JjzCWtyR1r6WeFk5H1reeRbxblshHBM9WqD2xYdVxUOy6cGY4y8rxya', 
       {
        expand: ['line_items'], 
       }
    )


    console.log(session.line_items)






    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: cartItemsArr.map(item => ({
    //     price_data: {
    //       currency: 'gbp',
          
    //       product_data: {
    //         name: `${item.priceTitle} | ${item.pageTitle}`,


    //       },
          
    //       unit_amount: +(((+(item.price)) * 100).toFixed(2)), // Amount in cents
    //     },
    //     quantity: item.quantity || 1,
    //   })),
    //   mode: 'payment',
    //   expand: ['line_items'],
      
    //   success_url: `${origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,     
    //   cancel_url: `${origin}/?canceled=true`,

    //   metadata: {
        
    //     orderNumber: orderNumber
    //   }
    // });

     
 

  return new Response(JSON.stringify({   items: session.line_items  }), { status: 200 });
} catch (error) {
  console.error(error);
  return new Response(JSON.stringify({ error: error.message }), { status: 500 });
}


 


}












