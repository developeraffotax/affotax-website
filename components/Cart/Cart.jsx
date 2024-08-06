"use client";

import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { dataArr } from "@/data/serviceData";
import TopChart from "./TopCart";
import TotalPrice from "./TotalPrice";
import CheckoutBtn from "./CheckoutBtn";
import CartItems from "./CartItems";
import Checkout from "../Checkout/Checkout";
import SquareForm from "../Checkout/SquareForm";
import SuggestedPackages from "./SuggestedPackages";
import { CartContext } from "@/app/(user)/layout";



export default function Cart() {
	// const {id, pageTitle, priceTitle, price, priceContent, packageIncludes} = productObject;
	// let packageIncludesArr = packageIncludes.split(',');

	const [cartItemsArr, setCartItemsArr] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

	const cartContext = useContext(CartContext)



	useEffect(() => {
		const idsArr = localStorage.getItem("price_id")?.split(",") || [];

		let tempArr = [];
		dataArr.forEach((el) => {
			el.prices.filter((element) => {
				idsArr.forEach((id) => {
					if (element.id === id) {
						element.pageTitle = el.title;
						tempArr.unshift(element);
					}
				});
			});
		});

		setCartItemsArr(tempArr);
        //calculateTotalPrice()
		console.log(cartItemsArr)
	}, []);



useEffect(() => {
	calculateTotalPrice();
	cartContext.setCartItems(cartItemsArr.length)
})



	const removeFromCartHandler = (id) => {
		const old_ids = localStorage.getItem("price_id");
		let ids_arr = old_ids.split(",");

		const resArr = ids_arr.filter((el) => el !== id);

		localStorage.setItem("price_id", resArr);



        //need to edi here
        let arr = [...cartItemsArr];

        console.log(arr)

        const res = arr.filter((el) => {
            return el.id !== id;
        })














		setCartItemsArr(res);
        //calculateTotalPrice();
	};



    const calculateTotalPrice = () => {
        const tPrice = cartItemsArr.reduce((acc, cur) => {
            const price = +(cur.price?.replace('£', ''))
            console.log(price)
            return acc + price;
        }, 0)
        console.log('calculate total price ran ' , tPrice)
        setTotalPrice(tPrice)
    }

	return (
		<section className="py-24 relative">
			{cartItemsArr.length === 0 ? (
				<div className="w-full  px-4 mx-auto text-center ">
					<p>Your cart is empty!</p>
				</div>
			) : (
				<div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
					<TopChart />

					<CartItems
						cartItemsArr={cartItemsArr}
						removeFromCartHandler={removeFromCartHandler}
					/>

					<TotalPrice totalPrice={totalPrice} />
					<CheckoutBtn />


					<SuggestedPackages setCartItemsArr={setCartItemsArr} cartItemsArr={cartItemsArr} removeFromCartHandler={removeFromCartHandler}/>




				</div>
			)}


			
		</section>
	);
}
