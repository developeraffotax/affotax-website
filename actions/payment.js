"use server";

import { Client } from "square";
import { randomUUID } from "crypto";


BigInt.prototype.toJSON = function () {
    return this.toString();
  };


const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox",
});


// CREATE PAYMENT

export async function submitPayment(sourceId, {buyer_email_address, amount }) {
    
  try {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        amount: amount,
        currency: 'GBP'
      },
      buyer_email_address: buyer_email_address,
      

    });

    console.log(result)
    return result;
  } catch (error) {
    console.log(error);
    return false;
    
  }
}