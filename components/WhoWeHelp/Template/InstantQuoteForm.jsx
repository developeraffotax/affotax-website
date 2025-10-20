'use client'

import { FaPhoneAlt } from "react-icons/fa";
import { sendInstantQuote } from "@/actions/contact";
import SubmitBtn from "./SubmitBtn";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";



export default function InstantQuoteForm({bg_gradient= 'bg-gradient-to-br'}) {
	const searchParams = useSearchParams();

	const success = searchParams.get("success");
	const [formState, action] = useFormState(sendInstantQuote, {error: false});
	const ref = useRef();

	useEffect(() => {
		if (success) {
			ref.current.scrollIntoView({
				behavior: "smooth",
			});
		}
	}, []);

					  const submitAction = async (formData) => {
     

    // ✅ Ensure reCAPTCHA is loaded
    if (typeof grecaptcha === "undefined") {
      alert("reCAPTCHA not loaded yet. Please wait a second and try again.");
      return;
    }

    // ✅ Get invisible reCAPTCHA token
    const token = await grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action: "submit" }
    );

     
     
    formData.append("recaptchaToken", token);

    // ✅ Submit form to server action
    action(formData);
  };
	return (
		<>
			<div className={`flex flex-col items-center  py-12 px-80 max-2xl:px-40 max-xl:px-10    ${bg_gradient} from-orange-300/5 to-orange-900/20`} ref={ref}>
				<div>
					<h2 className="font-poppins  text-transparent font-bold text-4xl leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text">
                    Instant Quote!
					</h2>
					<p className="text-sm font-normal text-center text-gray-600 ">
						Get instant quotation from our experts!
					</p>
				</div>

				<div className="flex w-full justify-center gap-10 ">
					<div className="flex w-full justify-center py-10 items-center ">
						<form className="grid grid-cols-2 gap-10  place-content-start max-lg:grid-cols-1 max-lg:gap-4 text-base p-10 rounded-3xl shadow-md shadow-black/40" action={submitAction}>
							<div className="">
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
										className=" outline-none bg-transparent border-black/30 rounded-2xl text-lg  border-2 py-2 px-8 pl-12 w-full h-full  focus:border-orange-400 focus:border-[2px] shadow-md focus:shadow-primary/30 "
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
										className=" outline-none bg-transparent border-black/30 rounded-2xl  text-lg  border-2 py-2 px-8 pl-12 w-full h-full  focus:border-orange-400 focus:border-[2px]  shadow-md focus:shadow-primary/30"
										type="email"
										name="email"
										id="email"
										placeholder="Enter Your Email Address"
									/>
								</div>





								<div className="group  flex items-center justify-center mb-4 relative ">
									<FaPhoneAlt className="h-5 w-5 text-gray-400 absolute left-0 ml-4" />

									<input
										className=" outline-none bg-transparent border-black/30 rounded-2xl   text-lg border-2 py-2 px-8 pl-12 w-full h-full  focus:border-orange-400 focus:border-[2px] shadow-md focus:shadow-primary/30"
										type="text"
										name="phoneNumber"
										id="phoneNumber"
										placeholder="Enter Your Phone Number"
									/>
								</div>



								<div className="flex items-center w-full ">
									<select
										name="businessType"
										className="w-full bg-transparent py-2 px-3 pr-8 rounded-2xl border-2 overflow-hidden focus:border-orange-400 outline-none border-black/30 classicArrow shadow-md focus:shadow-primary/30"
										
									>
										<option selected disabled>Select Business Type</option>
										<option>Sole Trader</option>
										<option>Limited Company</option>
										<option>Partnership</option>
									</select>
								</div>
							</div>

							{/* second column */}

							<div>
								<div className="flex items-center w-full  mb-4">
									<select
										
                                        name="turnover"
										className="w-full bg-transparent py-2 px-3 pr-8 rounded-2xl border-2 overflow-hidden focus:border-orange-400 outline-none border-black/30 classicArrow shadow-md focus:shadow-primary/30 "
										
									>
                                        <option selected disabled>Select Turnover</option>
										<option>£0 to £20,000</option>
										<option>£20,001 to £90,000</option>
										<option>£90,001 to £200,000</option>
										<option>£300,001 to £300,000</option>
										<option>£300,001 to £400,000</option>
										<option>£400,001 to £500,000</option>
										<option>£500,001 to £600,000</option>
										<option>£600,001 to £700,000</option>
										<option>£700,001 to £800,000</option>
										<option>£800,001 to £900,000</option>
										<option>£900,001 to £1,000,000</option>
										<option>£1,000,000+</option>
										
									</select>
								</div>

								<div className="flex items-center w-full  mb-4">
									<select
										name="vatReturns"
										className="w-full bg-transparent py-2 px-3 pr-8 rounded-2xl border-2  focus:border-orange-400 outline-none border-black/30 classicArrow shadow-md focus:shadow-primary/30"
										
									>
										<option selected disabled>Need VAT Returns Completing?</option>
										<option>Yes</option>
										<option>No</option>
									</select>
								</div>

								<div className="flex items-center w-full mb-4 ">
									<select
										name="payrollManaging"
										className="w-full bg-transparent py-2 px-3 pr-8 rounded-2xl border-2  focus:border-orange-400 outline-none border-black/30 classicArrow shadow-md focus:shadow-primary/30"
										
									>
										<option selected disabled>Need Payroll Managing?</option>
										<option>No</option>
										<option>Weekly</option>
										<option>Monthly</option>
									</select>
								</div>

								<div className="flex items-center w-full ">
									<select
										name="bookkeeping"
										className="w-full bg-transparent py-2 px-3 pr-8 rounded-2xl border-2  focus:border-orange-400 outline-none border-black/30 classicArrow shadow-md focus:shadow-primary/30"
										
									>
										<option disabled selected >Need us to complete your Bookkeeping?</option>
										<option>Yes</option>
										<option>No</option>
									</select>
								</div>
							</div>

							<SubmitBtn />
						</form>
					</div>
				</div>

				{success && (
					<p className="text-sm font-poppins text-emerald-500  ">
						Your query has been submitted | We'll get back to you
						soon
					</p>
				)}
				
			</div>
		</>
	);
}
