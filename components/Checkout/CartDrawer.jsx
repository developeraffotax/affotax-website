"use client";

import { useEffect, useState } from "react";
import { dataArr } from "@/data/serviceData";
import TopChart from "../Cart/TopCart";
import TotalPrice from "../Cart/TotalPrice";
import CartItems from "../Cart/CartItems";


export default function CartDrawer({cartItemsArr, setCartItemsArr, totalPrice, setTotalPrice}) {
	

	
    

	useEffect(() => {


		const getAndSetData = async () => {


			const res = await axios.get('/api/service-page/get-all');
			console.log(res)
			let dataArr = res.data;

			const idsArr = localStorage.getItem("price_id")?.split(",") || [];

			let tempArr = [];
			dataArr.forEach((el) => {
				el.prices.filter((element) => {
					idsArr.forEach((_id) => {
						if (element._id === _id) {
							element.pageTitle = el.title;
							tempArr.unshift(element);
						}
					});
				});
			});

			setCartItemsArr(tempArr);
			//calculateTotalPrice()


		}


		getAndSetData()


	}, []);



useEffect(() => {
	calculateTotalPrice()
})



	const removeFromCartHandler = (_id) => {
		const old_ids = localStorage.getItem("price_id");
		let ids_arr = old_ids.split(",");

		const resArr = ids_arr.filter((el) => el !== _id);

		localStorage.setItem("price_id", resArr);



        //need to edi here
        let arr = [...cartItemsArr];

        console.log(arr)

        const res = arr.filter((el) => {
            return el._id !== _id;
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
		<section className=" relative max-lg:hidden">
			{cartItemsArr.length === 0 ? (
				<div className="w-full  px-4 mx-auto text-center ">
					<p>Your cart is empty!</p>
				</div>
			) : (
				<div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
					<TopChart isDrawer={true}/>

					<CartItems
						cartItemsArr={cartItemsArr}
						removeFromCartHandler={removeFromCartHandler}
						isDrawer={true}
					/>

					<TotalPrice totalPrice={totalPrice} isDrawer={true}/>
					





				</div>
			)}


			
		</section>
	);
}
