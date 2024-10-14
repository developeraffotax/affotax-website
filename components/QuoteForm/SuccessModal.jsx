"use client"

import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { QuoteFormContext } from "@/app/(user)/layout";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const SuccessModal = () => {

    const quoteContext = useContext(QuoteFormContext)


	//const pathname = usePathname();

	//console.log(pathname);

	return (
		<div className="py-8 ">
			<div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4  rounded-lg">
				<p className="text-2xl font-poppins font-semibold  ">Query Submitted <FaRegCheckCircle  className="inline text-2xl mb-1  ml-1" /></p> 
				<p>
					Your query has been submitted | We'll get back to you soon!
				</p>
			</div>

			<div className="mt-8 w-full text-center ">
            <button className="font-poppins  px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-400 " onClick={quoteContext.handleCancel} >Go back</button>
			<Link  className="font-poppins ml-4   border-b py-1   text-slate-700  hover:text-orange-500 hover:border-orange-400 transition-all " href={"/"} onClick={quoteContext.handleCancel} >Go to homepage <  FaArrowRightLong className="inline ml-2 text-slate-700"/></Link>
            </div>
		</div>
	);
};

export default SuccessModal;
