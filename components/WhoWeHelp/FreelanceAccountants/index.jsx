'use client'


import EmailPhone from "@/components/Home/Subpages/EmailPhone";
import Hero from "./Hero";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import InstantQuoteForm from "./InstantQuoteForm";
import { useRef } from "react";


export default function FreelanceAccountants() {


	const formRef = useRef()


	const scrollToForm = () => {
		formRef.current.scrollIntoView({
			behavior: "smooth",
			block: 'center'
		});
	}




	return (
		<>
			<div className="w-full ">
                <Hero scrollToForm={scrollToForm}/>
				{/* <WhatIsSoleTrader />
				<HowToGetStarted /> */}
				<OurServices />
				<WhyChooseUs />
				<InstantQuoteForm ref ={formRef} />
				<EmailPhone />
            </div>
		</>
	);
}
