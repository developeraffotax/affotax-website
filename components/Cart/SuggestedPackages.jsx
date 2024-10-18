'use client'

import { useEffect, useState } from "react";
import PriceBoxes from "../Services/Service/PriceBoxes/PriceBoxes";
import CartItems from "./CartItems";
import { dataArr } from "@/data/serviceData";
import axios from "axios";
import SuggestedPriceBoxes from "./SuggestedPriceBoxes";

export default function SuggestedPackages({cartItemsArr, setCartItemsArr}) {

	const [arr, setArr] = useState([]);


	useEffect(() => {
		

		const getAndSetData = async () => {

			const res = await axios.get('/api/service-page/get-all');


			const dataArr = res.data;


			
			let tempArr = []
			for(let i=0; i<3; i++) {
				
				const randomIndex = Math.floor(Math.random() * dataArr.length);
				const randomServiceData = dataArr[randomIndex]
				
				const randomPriceIndex = Math.floor(Math.random() * randomServiceData.prices.length);
				const randomPriceData = randomServiceData.prices[randomPriceIndex];
				
				randomPriceData.pageTitle = randomServiceData.title;
				
				tempArr.push(randomPriceData)
			}
			
			
			console.log(tempArr)
			setArr(tempArr);



		}


		getAndSetData()
	}, [])


	

	console.log('IN THE SUGESTED PACKED>>>>>>>>>>><<><><><>><><><><><>><<><><><><><><><>')

	



	




	// console.log(randomPriceData)








    return(
        <div className="p-16 w-full max-lg:p-4">
						<h2 className="font-semibold text-3xl mb-12 text-center ">
							Suggested Packages for You!
						</h2>

						<div className="">
						{/* <CartItems
                        
						cartItemsArr={cartItemsArr}
						removeFromCartHandler={removeFromCartHandler}
					/> */}


					<SuggestedPriceBoxes prices={arr}  isCheckout={true} isCart={true} setCartItemsArr={setCartItemsArr} />
						</div>
					</div>
    )
}