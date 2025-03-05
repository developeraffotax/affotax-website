// "use client";
// import { createOrder } from "@/actions/order";
// import { submitPayment } from "@/actions/payment";
// import { useState } from "react";
// import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

// export default function SquareForm({customerData, orderData}) {


// 	//const locationId = "LRFC1EZH77S4Y";                                           //sandbox
// 	//const appId = "sandbox-sq0idb-gASJb-Nb95rkIZVJwrmdzQ";


// 	const appId = "sq0idp-VbSgv5OeEK79loJCstt-_g";							//production
// 	const locationId = "L3BCKHG9DGWDX";

// 	console.log(customerData, orderData)

// 	const [isError, setIsError] = useState(false);




// 	return (
// 		<PaymentForm
			
// 			applicationId={appId}
// 			locationId={locationId}
// 			cardTokenizeResponseReceived={async (token) => {
				
// 				try {
// 					setIsError(false)
// 				const result = await submitPayment(token.token, {buyer_email_address: customerData.email , amount:(Math.floor(orderData.totalPrice*100)),});
// 				// our orders api will run here
				
// 				if (result.payment.status !== 'COMPLETED') {
// 					setIsError(true)
// 				} else {
					

// 					const res = await createOrder(customerData, orderData, result.payment.id);

// 					localStorage.removeItem('price_id')

// 					if (!res) {
// 						setIsError(true);
// 					}

					

// 				}
// 				} catch (error) {
					
// 					setIsError(true);

// 				}




// 			}}
// 		>	

		
			
// 			<CreditCard />
// 			<div>
// 			{isError && <p className="text-red-500 text-sm text-center mt-4"> Error Occured while ordering | Please try agian later!</p>}
// 			</div>
// 		</PaymentForm>
// 	);
// }
