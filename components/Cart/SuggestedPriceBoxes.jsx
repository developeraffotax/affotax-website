'use client'
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import PriceBox from "../Services/Service/PriceBoxes/PriceBox";




const SuggestedPriceBoxes = ({ prices, pageTitle, isCheckout, isCart,  setCartItemsArr}) => {


   
    // /addOns?.length > 0 && 
    const [pricesArr, setPricesArr] = useState([])



    useEffect(() => {


        // if(localStorage.getItem('addon_id')) {


        //     const localStorageAddOnId = localStorage.getItem('addon_id')
        //     let ids_arr = localStorageAddOnId.split(',');

        //     let newArr;
        //     ids_arr.forEach((storedId) => {

        //         const mappedArr = [...prices].map((price, index) => {

        //             price.addOns.forEach((addOn, i) => {

        //                 if(storedId === addOn._id) {
        //                     addOn.isChecked = true;
        //                 } 
        //                 console.log(addOn)
        //             })

        //             console.log(price)
        //             return {
        //                 ...price,

        //             }




        //         })

        //         setPricesArr(mappedArr)

        //     })



            
        // } else {
            
        // }
        
        // console.log(prices)
        
       setPricesArr(prices)
       




    }, [])
















    return (
        <section className={`w-full px-0 font-poppins `}>
            <div className="mx-auto container flex flex-col max-lg:items-center  ">

                
                {prices?.map((el) => {
                    console.log(el)
                    return (
                        <div key={uuid()} className="relative w-full group mb-16">
                           
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-teal-400 rounded-xl blur-sm opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                            
                            <PriceBox key={uuid()} {...el} isCheckout={isCheckout} isCart={isCart} setCartItemsArr={setCartItemsArr}/>
                            

                    </div>
                    )
                })}
            </div>
            <div>
                <p></p>
            </div>
        </section>
    );
};

export default SuggestedPriceBoxes;

