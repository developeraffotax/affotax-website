'use client'

import Link from "next/link";
import { v4 as uuid } from "uuid";

const PriceBox = ({ priceTitle, priceContent, price, packageIncludes, _id, pageTitle, isCart, isCheckout, setCartItemsArr}) => {


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

    return (
        <div className={`relative flex flex-row max-lg:flex-col  gap-8 items-end max-lg:items-center justify-between  bg-gray-100  rounded-xl  p-8  ${isCheckout ? 'w-full' : 'w-[100%] max-lg:w-[100%]'}`}>
            <div className="flex flex-col gap-2 ">
                <h3 className="text-xl font-semibold">{priceTitle} {isCart ? "| " + pageTitle : null}</h3>
                <p className="text-md ">{priceContent}</p>

                <ul className="list-disc text-sm ">
                    {packageIncludes.length > 0 ? <h4 className="font-semibold text-md "> Package includes: </h4> : null}

                    {packageIncludes?.map((el) => (
                        <li key={uuid()} className="ml-4"> {" "} {el}{" "} </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col items-center gap-2  ">
                <h3 className="text-2xl font-semibold">{price}</h3>
                <Link onClick={onClickLocalStorageHandler} href={`/cart`}>
                <button  className="text-nowrap  ml-3 drop-shadow-md transition-all inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  ">
                    {" "}
                    Buy Now{" "}
                </button>
                </Link>
            </div>
        </div>
    );
};

export default PriceBox;


