'use client'

import Link from "next/link";
import { v4 as uuid } from "uuid";
import { ImPriceTags } from "react-icons/im";
import Checkbox from "./Checkbox";
import { useEffect, useState } from "react";

const PriceBox = ({ priceTitle, priceContent, price, packageIncludes, _id, pageTitle, isCart, isCheckout, setCartItemsArr, addOns}) => {


    

    const onClickLocalStorageHandler = () => {
        if(localStorage.getItem('price_id')) {
           
            const old_ids = localStorage.getItem('price_id');
            let ids_arr = old_ids.split(',');
            
            
            if (!(ids_arr.find((el) => el === _id))) {
                ids_arr.push(_id);
            }

            console.log(ids_arr)
            localStorage.setItem('price_id', ids_arr)
            
        } else {
            
            localStorage.setItem('price_id', _id)
        }


        if (isCart) {
            setCartItemsArr((prev) => {
                return [...prev, 
                    {
                        priceTitle,
                        priceContent,
                        price,
                        packageIncludes,
                        _id,
                        pageTitle
                    }
                ].reverse()
            })
        }
    }





    const [addOnsArr, setAddOnsArr] = useState([]);;

    



    // Checkbox Handler
    const onChangeHandlerCheckbox = (event) => {

        setAddOnsArr((prev) => {

            const newArr = [...prev];
            const clickedItemIndex =  newArr.findIndex((el) => el._id === event.target.name);
            

            if (newArr[clickedItemIndex].isChecked === true) {
                newArr[clickedItemIndex].isChecked = false;
            } else {
                newArr[clickedItemIndex].isChecked = true;
            }

            return newArr;


        })


    }

    



    useEffect(() => {

        if(addOns?.length > 0) {
            const newArr = addOns.map((el) => {
                return {
                    ...el,
                    isChecked: false
                }
            })
            setAddOnsArr(newArr);
        }

    }, [])





















    return (
        <div className={`relative flex flex-row max-lg:flex-col  gap-8 items-end max-lg:items-center justify-between  bg-gray-100  rounded-xl  p-8  ${isCheckout ? 'w-full' : 'w-[100%] max-lg:w-[100%]'}`}>
            <div className="flex flex-col gap-2 w-full">
                <h3 className="text-xl  font-semibold  shadow-[5px_5px_0px_0px_rgba(148,163,184)] border-2 border-[rgb(148,163,184)] bg-gray-50 rounded-md py-1 text-center    ">{priceTitle} {isCart ? "| " + pageTitle : null}</h3>
                <p className="text-sm  max-lg:text-sm  p-2   ">{priceContent}</p>



                    <div className="flex flex-row justify-between items-start max-lg:flex-col max-lg:justify-start max-lg:gap-8   w-full    ">


                        
                <ul className="list-disc text-sm ">
                    {packageIncludes.length > 0 ? <h4 className="font-semibold text-md  mb-2 "> <span className="px-3 py-[2px] bg-gradient-to-br from-slate-400 via-slate-400 via-50% to-slate-500 text-white rounded-md  ">
                        Package Includes :
                        </span></h4> : null}

                    {packageIncludes?.map((el) => (
                        <li key={uuid()} className="ml-4"> {" "} {el}{" "} </li>
                    ))}
                </ul>


                {
                    addOns?.length > 0 && (
                        <ul className="list-disc text-sm " >
                            
                            {
                                addOnsArr.map((el) => {
                                    return <li key={el._id}> <Checkbox el={el}  onChange={onChangeHandlerCheckbox}/>  </li>
                                })
                            }



                        </ul>
                    )
                }









                <div className="flex flex-col items-center gap-2 max-lg:flex-row  max-lg:items-center  max-lg:justify-between max-lg:w-full ">
                    
                <h3 className="text-2xl font-semibold font-poppins text-teal-600   bg-teal-50    rounded-lg p-2 relative  z-10">£<span className=" text-4xl ">{price}</span></h3>
                <Link onClick={onClickLocalStorageHandler} href={`/cart`}>
                <button  className="text-nowrap  ml-3 drop-shadow-md transition-all inline-flex text-secondary bg-teal-500 border-0 py-2 px-6 hover:outline-teal-500 outline-1 outline outline-transparent hover:bg-transparent hover:text-teal-500 rounded-md text-lg font-semibold hover:scale-105 active:scale-95  ">
                    {" "}
                    Buy Now{" "}
                </button>
                </Link>
            </div>


                    </div>
            </div>

           
        </div>
    );
};

export default PriceBox;


