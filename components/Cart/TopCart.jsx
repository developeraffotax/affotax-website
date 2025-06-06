'use client'

import { useEffect, useState } from "react";

export default function TopChart({isDrawer}) {

	
	const [orderRef, setOrderRef] = useState('')


	useEffect(() => {

		const order_ref_id = localStorage.getItem('order_ref_id');

		if (isDrawer) {
			if (!order_ref_id) {
				// Generate a random integer between 5000 and 6000
				const randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
				
				//console.log(randomNumber);
				
				localStorage.setItem('order_ref_id', randomNumber);
				setOrderRef(randomNumber)
			} else {
				setOrderRef(order_ref_id)
			}
		}





	}, [])


	return (
		<>
			<h2 className={`title font-manrope font-bold text-4xl leading-10 mb-2 text-center  ${isDrawer ? 'text-white' : 'text-black'}`}>
				{isDrawer ? 'Your Order' : 'Cart'}
			</h2>
			{isDrawer && <p className="text-center ">Order Reference: #{orderRef} </p>}
			<div className={`hidden lg:grid grid-cols-2 py-6 border-b border-gray-200 mb-8`}>
				<div className={`font-normal text-xl leading-8  ml-4 ${isDrawer ? 'text-white' : 'text-gray-500'}`}>
					Package
				</div>
				<p className={`font-normal text-xl leading-8 flex items-center justify-end ${isDrawer ? 'text-white' : 'text-gray-500'}`}>
					<span className={`w-full max-w-[200px] text-end mr-8`}>
						Price
					</span>
				</p>
			</div>
		</>
	);
}
