"use client";

import { useState } from "react";
import CartDrawer from "./CartDrawer";
import SquareForm from "./SquareForm";
import validator from "validator";

export default function Checkout() {
	const [cartItemsArr, setCartItemsArr] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [company, setCompany] = useState("");

	const [isValid, setIsValid] = useState({ name: true, email: true, phone: true, company: true, });


	const inputHandler = (event) => {
		const value = event.target.value;

		switch (event.target.name) {
			case "name": setIsValid((prev) => ({ ...prev, name: !validator.isEmpty(value), })); return setName(value);
			case "email": setIsValid((prev) => ({ ...prev, email: validator.isEmail(value), })); return setEmail(value);
			case "phone": setIsValid((prev) => ({ ...prev, phone: validator.isMobilePhone(value), })); return setPhone(value);
			case "company": setIsValid((prev) => ({ ...prev, company: !validator.isEmpty(value), })); return setCompany(value);
		}
	};




	
	return (
		<>
			<div className="relative mx-auto w-full bg-white max-lg:mt-8 mt-0">
				<div className="grid min-h-screen grid-cols-10">
					<div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24 ">
						<div className="mx-auto w-full max-w-lg">
							<h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl ">
								Secure Checkout
								<span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
							</h1>
							<form
								action=""
								className="mt-10 flex flex-col space-y-4"
							>
								<div>
									<label
										for="email"
										className="text-xs font-semibold text-gray-500"
									>
										Name
									</label>
									<input
										onChange={inputHandler}
										value={name}
										type="text"
										id="name"
										name="name"
										placeholder="Enter You Full Name"
										className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								{!isValid.name && (
									<p className="text-sm text-red-600 ">
										Please Enter Your Name
									</p>
								)}

								<div>
									<label
										for="email"
										className="text-xs font-semibold text-gray-500"
									>
										Company Name
									</label>
									<input
										onChange={inputHandler}
										value={company}
										type="text"
										id="company"
										name="company"
										placeholder="Enter Your Company Name"
										className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								{!isValid.company && (
									<p className="text-sm text-red-600 ">
										Please Enter Your Company Name
									</p>
								)}

								<div>
									<label
										for="email"
										className="text-xs font-semibold text-gray-500"
									>
										Email
									</label>
									<input
										onChange={inputHandler}
										value={email}
										type="email"
										id="email"
										name="email"
										placeholder="Enter Your Email Address Here"
										className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								{!isValid.email && (
									<p className="text-sm text-red-600 ">
										{" "}
										Please Enter a valid Email Address
									</p>
								)}
								<div className="relative">
									<label
										for="phone-number"
										className="text-xs font-semibold text-gray-500"
									>
										Phone number
									</label>
									<input
										onChange={inputHandler}
										value={phone}
										type="text"
										id="phone"
										name="phone"
										placeholder="Enter Your Phone Number"
										className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
									/>
									<img
										src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
										alt=""
										className="absolute bottom-3 right-3 max-h-4"
									/>
								</div>
								{!isValid.phone && (
									<p className="text-sm text-red-600 ">
										{" "}
										Please Enter a valid Phone Number
									</p>
								)}
							</form>

							<div className="w-full mt-8">
								<SquareForm
									customerData={{
										name,
										email,
										phone,
										company,
									}}
									orderData={{
										items: cartItemsArr,
										totalPrice:
											totalPrice +
											(20 / 100) * totalPrice,
									}}
								/>
							</div>
							{/* <p className="mt-10 text-center text-sm font-semibold text-gray-500">
								By placing this order you agree to the{" "}
								<a
									href="#"
									className="whitespace-nowrap text-blue-400 underline hover:text-blue-600"
								>
									Terms and Conditions
								</a>
							</p> */}
						</div>
					</div>
					<div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24 text-white">
						<h2 className="sr-only">Order summary</h2>
						<div className="max-lg:hidden">
							<img
								src="https://images.pexels.com/photos/8296981/pexels-photo-8296981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="  absolute inset-0 h-full w-full object-cover"
							/>
							<div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[#23314E] via-[#2e436d]   to-[#23314E]    opacity-90 "></div>
						</div>

						<div className="max-lg:hidden ">
							<CartDrawer
								cartItemsArr={cartItemsArr}
								setCartItemsArr={setCartItemsArr}
								totalPrice={totalPrice}
								setTotalPrice={setTotalPrice}
							/>
						</div>

						<div className="relative mt-10 text-white max-lg:text-black">
							<h3 className="mb-5 text-lg font-bold">Support</h3>
							<p className="text-sm font-semibold">
								+44 20 8144 6811
								<span className="font-light text-white max-lg:text-black">
									{" "}
									(Phone)
								</span>
							</p>
							<p className="mt-1 text-sm font-semibold">
								info@affotax.com{" "}
								<span className="font-light">(Email)</span>
							</p>
							<p className="mt-2 text-xs font-medium">
								Call us now for payment related issues
							</p>
						</div>
						<div className="relative mt-10 flex">
							<p className="flex flex-col">
								<span className="text-sm font-bold text-white max-lg:text-black">
									Money Back Guarantee
								</span>
								<span className="text-xs font-medium text-white max-lg:text-black">
									within 30 days of purchase
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
