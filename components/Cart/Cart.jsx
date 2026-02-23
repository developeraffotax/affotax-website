"use client";

import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import TopChart from "./TopCart";
import TotalPrice from "./TotalPrice";
import CheckoutBtn from "./CheckoutBtn";
import CartItems from "./CartItems";
import Checkout from "../Checkout/Checkout";
import SquareForm from "../Checkout/SquareForm";
import SuggestedPackages from "./SuggestedPackages";
import { CartContext } from "@/app/(user)/layout";
import axios from "axios";

export default function Cart() {
	const [cartItemsArr, setCartItemsArr] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const [isLoading, setIsLoading] = useState(true);

	const cartContext = useContext(CartContext);

	// useEffect(() => {
	// 	const getAndSetData = async () => {
	// 		setIsLoading(true);

	// 		const res = await axios.get("/api/service-page/get-all");

	// 		setIsLoading(false);

	// 		let dataArr = res.data;

	// 		const idsArr = localStorage.getItem("price_id")?.split(",") || [];

	// 		let tempArr = [];

	// 		idsArr.forEach((_id) => {																		 // NEW LOGIC TO SHOW ITEMS IN CART
	// 			dataArr.forEach((el) => {
	// 				el.prices.forEach((element) => {
	// 					if (element._id === _id) {

	// 						if (localStorage.getItem('addon_id')) {

	// 							const old_ids = localStorage.getItem('addon_id');
	// 							let ids_arr_addOns = old_ids.split(',');

	// 							if (element.addOns?.length > 0) {

	// 								ids_arr_addOns.forEach((addOn_id) => {

	// 									const addOnIndex = element.addOns.findIndex((doc) => doc._id === addOn_id);

	// 									if (addOnIndex >= 0) {
	// 										element.addOns[addOnIndex].isChecked = true;

	// 										const newPrice = +(element.price) + +(element.addOns[addOnIndex].price);
	// 										element.price = newPrice.toString();
	// 									}

	// 								})

	// 							}

	// 						}

	// 						element.pageTitle = el.title;
	// 						tempArr.unshift(element);

	// 					}
	// 				});
	// 			});
	// 		});

	// 		setCartItemsArr(tempArr);
	// 		//calculateTotalPrice()

	// 	};

	// 	getAndSetData();
	// }, []);

	useEffect(() => {


		const idsArr = localStorage.getItem("price_id")?.split(",") || [];
		const addonIds = localStorage.getItem("addon_id")?.split(",") || [];

		const getAndSetData = async () => {
			try {
				setIsLoading(true);
				const { data } = await axios.post(
					"/api/service-page/get-cart-items",
					{
						ids: idsArr?.filter(Boolean),
					},
				);

				if (!data) return;

				// ✅ Build a Map of all prices by id for O(1) lookup
				const priceMap = new Map();
				data.forEach((service) => {
					service.prices.forEach((priceObj) => {
						// keep reference to parent title for later use
						priceMap.set(priceObj._id, {
							...priceObj,
							pageTitle: service.title,
						});
					});
				});

				let tempArr = [];
				idsArr.forEach((_id) => {
					const element = priceMap.get(_id);
					if (element) {
						// ✅ Handle addons
						if (addonIds.length && element.addOns?.length > 0) {
							element.addOns = element.addOns.map((addOn) => {
								if (addonIds.includes(addOn._id)) {
									addOn.isChecked = true;
									element.price = (
										+element.price + +addOn.price
									).toString();
								}
								return addOn;
							});
						}

						tempArr.unshift(element);
					}
				});

				setCartItemsArr(tempArr);
			} catch (error) {
				console.log("Error occured!", error);
			} finally {
				setIsLoading(false);
			}
		};

		getAndSetData();
	}, []);

	useEffect(() => {
		calculateTotalPrice();
		cartContext.setCartItems(cartItemsArr.length);
	});

	const removeFromCartHandler = (_id) => {
		const old_ids = localStorage.getItem("price_id");
		let ids_arr = old_ids.split(",");

		const resArr = ids_arr.filter((el) => el !== _id);

		localStorage.setItem("price_id", resArr);

		//need to edi here
		let arr = [...cartItemsArr];

		const res = arr.filter((el) => {
			return el._id !== _id;
		});

		setCartItemsArr(res);
		//calculateTotalPrice();
	};

	const calculateTotalPrice = () => {
		const tPrice = cartItemsArr.reduce((acc, cur) => {
			const price = +cur.price?.replace("£", "");

			return acc + price;
		}, 0);

		setTotalPrice(tPrice);
	};

	return (
		<>
			{isLoading ? (
				<div className="w-[100vw] h-[100vh] flex justify-center items-center">
					<div className="w-12 h-12   rounded-full animate-spin border-2 border-solid border-orange-500 border-t-transparent"></div>
				</div>
			) : (
				<section className="py-24 relative  ">
					{cartItemsArr.length === 0 && !isLoading ? (
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
							<CheckoutBtn
								cartItemsArr={cartItemsArr}
								totalPrice={totalPrice}
							/>

							<SuggestedPackages
								setCartItemsArr={setCartItemsArr}
								cartItemsArr={cartItemsArr}
								removeFromCartHandler={removeFromCartHandler}
							/>
						</div>
					)}
				</section>
			)}
		</>
	);
}
