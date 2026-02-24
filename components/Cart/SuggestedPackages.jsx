'use client'

import { useEffect, useState } from "react";
import PriceBoxes from "../Services/Service/PriceBoxes/PriceBoxes";
import CartItems from "./CartItems";
import { dataArr } from "@/data/serviceData";
import axios from "axios";
import SuggestedPriceBoxes from "./SuggestedPriceBoxes";

export default function SuggestedPackages({cartItemsArr, setCartItemsArr}) {

	const [arr, setArr] = useState([]);


	console.log("CART ITEMS ARR", cartItemsArr)

	useEffect(() => {
		

		const getAndSetData = async () => {

			const res = await axios.get('/api/service-page/get-all');


// 			const service = await Service.findOne({ link: req.params.link })
//   .populate("suggestedPackages.service");

			// send ids of the current cart services 
			// OR directly use this cartItemsArr
			// const res = await axios.post('/api/service-page/get-suggestions');


			const dataArr = res.data;




// 			const suggestions = service.suggestedPackages.map(pkg => {
//   const selectedPrice = pkg.service.prices.find(
//     p => p._id.toString() === pkg.priceId.toString()
//   );

//   return {
//     ...selectedPrice,
//     pageTitle: pkg.service.title,
//     serviceLink: pkg.service.link
//   };
// });


			
			let tempArr = []
			for (let i = 0; i < 3; i++) {
					const randomIndex = Math.floor(Math.random() * dataArr.length);
					const randomServiceData = dataArr[randomIndex];

					if (!randomServiceData?.prices?.length) {
						continue; // skip this iteration if no prices
					}

					const randomPriceIndex = Math.floor(Math.random() * randomServiceData.prices.length);
					const randomPriceData = { ...randomServiceData.prices[randomPriceIndex] }; // clone so we don’t mutate original

					randomPriceData.pageTitle = randomServiceData.title;

					tempArr.push(randomPriceData);
					}
			
			
		 
			setArr(tempArr);



		}


		getAndSetData()
	}, [])


	

 

	



	




 








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