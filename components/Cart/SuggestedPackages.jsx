import PriceBoxes from "../Services/Service/PriceBoxes/PriceBoxes";
import CartItems from "./CartItems";
import { dataArr } from "@/data/serviceData";

export default function SuggestedPackages({cartItemsArr, setCartItemsArr}) {

	let arr = [];

	for(let i=0; i<3; i++) {

		const randomIndex = Math.floor(Math.random() * dataArr.length);
		const randomServiceData = dataArr[randomIndex]
	
		const randomPriceIndex = Math.floor(Math.random() * randomServiceData.prices.length);
		const randomPriceData = randomServiceData.prices[randomPriceIndex];

		randomPriceData.pageTitle = randomServiceData.title;

		arr.push(randomPriceData)
	}



	




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


					<PriceBoxes prices={arr}  isCheckout={true} isCart={true} setCartItemsArr={setCartItemsArr}/>
						</div>
					</div>
    )
}