'use client'

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import SuggestedPriceBoxes from "./SuggestedPriceBoxes";

export default function SuggestedPackages({ cartItemsArr, suggestedPackages, setCartItemsArr }) {
    const [arr, setArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchSuggestedPackages = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.post(
                "/api/service-page/get-suggested-packages",
                {
                    suggestions: suggestedPackages,
                }
            );
            setArr(data || []);
        } catch (error) {
            console.error("Error fetching suggestions", error);
        } finally {
            // FIXED: Set to false so the spinner actually stops
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (suggestedPackages?.length > 0) {
            fetchSuggestedPackages();
        } else {
            // If no suggestions were passed at all, stop loading
            setIsLoading(false);
        }
    }, [suggestedPackages]);

    // 1. Show nothing while loading (or keep the spinner if you prefer)
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 w-full">
                <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-500 font-medium tracking-tight">
                    Finding Suggested Packages for You!
                </p>
            </div>
        );
    }

    // 2. Return null if there are no packages to show after loading finishes
    if (!arr || arr.length === 0) {
        return null;
    }

    // 3. Render the full component if data exists
    return (
        <div className="p-16 w-full max-lg:p-4">
            <h2 className="font-semibold text-3xl mb-12 text-center">
                Suggested Packages for You!
            </h2>

            <div className="">
                <SuggestedPriceBoxes
                    prices={arr}
                    isCheckout={true}
                    isCart={true}
                    setCartItemsArr={setCartItemsArr}
                />
            </div>
        </div>
    );
}
























































// 'use client'

// import { useCallback, useEffect, useState } from "react";
// import PriceBoxes from "../Services/Service/PriceBoxes/PriceBoxes";
// import CartItems from "./CartItems";
// import { dataArr } from "@/data/serviceData";
// import axios from "axios";
// import SuggestedPriceBoxes from "./SuggestedPriceBoxes";

// export default function SuggestedPackages({cartItemsArr, suggestedPackages,  setCartItemsArr}) {

// 	const [arr, setArr] = useState([]);

// 	const [isLoading, setIsLoading] = useState(true)

// 	console.log("suggestedPackages 🧡", suggestedPackages)
// 	console.log("suggestedPackages AAAAAARRRRR", arr)
	 



// 	// useEffect(() => {
		
// 	// 	const getAndSetData = async () => {

// 	// 		const res = await axios.get('/api/service-page/get-all');
// 	// 		const dataArr = res.data;

// 	// 		let tempArr = []
// 	// 		for (let i = 0; i < 3; i++) {
// 	// 				const randomIndex = Math.floor(Math.random() * dataArr.length);
// 	// 				const randomServiceData = dataArr[randomIndex];

// 	// 				if (!randomServiceData?.prices?.length) {
// 	// 					continue; // skip this iteration if no prices
// 	// 				}

// 	// 				const randomPriceIndex = Math.floor(Math.random() * randomServiceData.prices.length);
// 	// 				const randomPriceData = { ...randomServiceData.prices[randomPriceIndex] }; // clone so we don’t mutate original

// 	// 				randomPriceData.pageTitle = randomServiceData.title;

// 	// 				tempArr.push(randomPriceData);
// 	// 				}
			
			
		 
// 	// 		setArr(tempArr);



// 	// 	}


// 	// 	getAndSetData()
// 	// }, [])


	

// const fetchSuggestedPackages = async () => {

//   setIsLoading(true);

//   try {
//     const { data } = await axios.post(
//       "/api/service-page/get-suggested-packages",
//       {
//         suggestions: suggestedPackages, // ✅ wrapped properly
//       }
//     );

//     console.log("Suggested:", data);
// 	setArr(data);

//   } catch (error) {
//     console.log("Error fetching suggestions", error);
//   } finally {
//     setIsLoading(true);
//   }
// }



// useEffect(() => {
//   if (suggestedPackages?.length > 0) {
//     fetchSuggestedPackages();
//   }
// }, [suggestedPackages,]);
 



 


// return (
//   <div className="p-16 w-full max-lg:p-4">
//     <h2 className="font-semibold text-3xl mb-12 text-center">
//       Suggested Packages for You!
//     </h2>

//     {isLoading ? (
//       <div className="flex flex-col items-center justify-center py-20">
//         {/* Modern Spinner */}
//         <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
//         <p className="mt-4 text-gray-500 font-medium">Loading the suggested packages...</p>
//       </div>
//     ) : (
//       <div className="">
//         <SuggestedPriceBoxes 
//           prices={arr} 
//           isCheckout={true} 
//           isCart={true} 
//           setCartItemsArr={setCartItemsArr} 
//         />
//       </div>
//     )}
//   </div>
// );



// }