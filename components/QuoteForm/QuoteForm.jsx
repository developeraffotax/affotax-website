"use client"

import { FaPhoneAlt } from "react-icons/fa";
import { sendQuote } from "@/actions/contact";
import SubmitBtn from "./SubmitBtn";
import { useFormState } from "react-dom";
import SuccessModal from "./SuccessModal";





export default function QuoteForm() {

	const [formState, action] = useFormState(sendQuote, { success: false, message: "" });

	return (
		<>
			<div className="w-full flex flex-col items-center  px-12 max-lg:px-4  py-4 bg-gray-50  ">
				<div>
					<h2 className="font-poppins max-lg:leading-7  max-lg:text-3xl    text-transparent font-bold text-4xl leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text">
						Instant Quote!
					</h2>
					<p className="text-sm font-normal font-poppins text-center text-gray-600 ">
						Get instant quotation from our experts!
					</p>
				</div>

				{!formState?.success && formState.message.length === 0 && (
					<div className="flex w-full justify-center gap-10   ">
						<div className="flex w-full justify-center py-10 max-lg:py-4 items-center ">
							<form
								className="grid grid-cols-2 gap-8  place-content-start max-lg:grid-cols-1 max-lg:gap-4 text-base "
								action={action}
							>
								<div className=" ">
									<div className="  flex items-center justify-center mb-4 relative ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-gray-400 absolute left-0 ml-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											{" "}
											<path
												fill-rule="evenodd"
												d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
												clip-rule="evenodd"
											/>{" "}
										</svg>
										<input
											className=" outline-none bg-transparent border-black/30 rounded-xl text-lg  border-2 py-2 px-4 pl-12 w-full h-full  focus:border-orange-400 focus:border-[2px] shadow-md focus:shadow-primary/30 "
											type="text"
											name="name"
											id="name"
											placeholder="Enter Your Full name"
										/>
									</div>

									<div className="group  flex items-center justify-center mb-4 relative ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-gray-400 absolute left-0 ml-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											{" "}
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
											/>{" "}
										</svg>
										<input
											className=" outline-none bg-transparent border-black/30 rounded-xl  text-lg  border-2 py-2 px-4 pl-12 w-full h-full  focus:border-orange-400 focus:border-[2px]  shadow-md focus:shadow-primary/30"
											type="email"
											name="email"
											id="email"
											placeholder="Enter Your Email Address"
										/>
									</div>

									<div className="group  flex items-center justify-center   relative ">
										<FaPhoneAlt className="h-5 w-5 text-gray-400 absolute left-0 ml-4" />

										<input
											className=" outline-none bg-transparent border-black/30 rounded-xl   text-lg border-2 py-2 px-4 pl-12 w-full h-full  focus:border-orange-400 focus:border-[2px] shadow-md focus:shadow-primary/30"
											type="text"
											name="phoneNumber"
											id="phoneNumber"
											placeholder="Enter Your Phone Number"
										/>
									</div>
								</div>

								{/* second column */}

								<div className="">
									<div className="flex items-center w-full mb-4">
										<select
											name="businessType"
											className="w-full bg-transparent py-2 px-3 pr-8 rounded-xl border-2 overflow-hidden focus:border-orange-400 outline-none border-black/30 classicArrow shadow-md focus:shadow-primary/30"
										>
											<option selected disabled>
												Select Business Type
											</option>
											<option>Sole Trader</option>
											<option>Limited Company</option>
											<option>Partnership</option>
										</select>
									</div>

									<div className="flex items-center w-full  mb-4">
										<select
											name="turnover"
											className="w-full bg-transparent py-2 px-3 pr-8 rounded-xl border-2 overflow-hidden focus:border-orange-400 outline-none border-black/30 classicArrow shadow-md focus:shadow-primary/30 "
										>
											<option selected disabled>
												Select Turnover
											</option>
											<option>£0 to £20,000</option>
											<option>£20,001 to £90,000</option>
											<option>£90,001 to £200,000</option>
											<option>
												£300,001 to £300,000
											</option>
											<option>
												£300,001 to £400,000
											</option>
											<option>
												£400,001 to £500,000
											</option>
											<option>
												£500,001 to £600,000
											</option>
											<option>
												£600,001 to £700,000
											</option>
											<option>
												£700,001 to £800,000
											</option>
											<option>
												£800,001 to £900,000
											</option>
											<option>
												£900,001 to £1,000,000
											</option>
											<option>£1,000,000+</option>
										</select>
									</div>

									<div className="flex items-center w-full ">
										<select
											name="bookkeeping"
											className="w-full bg-transparent py-2 px-3 pr-8 rounded-xl border-2  focus:border-orange-400 outline-none border-black/30 classicArrow shadow-md focus:shadow-primary/30"
										>
											<option disabled selected>
												Need us to complete your
												Bookkeeping?
											</option>
											<option>Yes</option>
											<option>No</option>
										</select>
									</div>
								</div>

								<div className=" w-full col-span-2 max-lg:col-span-1">
									<textarea
										className=" outline-none bg-transparent border-black/30 rounded-xl  text-base  border-2 py-2 px-4   w-full h-full  focus:border-orange-400 focus:border-[2px]  shadow-md focus:shadow-primary/30"
										type="message"
										name="message"
										id="message"
										placeholder="Type your message here if you have any!"
									/>
								</div>

								<SubmitBtn />
							</form>
						</div>
					</div>
				)}

				{formState?.success && formState.message.length > 0 && (
					<SuccessModal />
				)}

				{!formState?.success && formState.message.length > 0 && (
					<p className="text-sm font-poppins text-red-500  ">
						Failed to send your query! Please try again later!
					</p>
				)}
			</div>
		</>
	);
}
