'use client'


import Link from "next/link";
import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './styles.css';

const Faqs = ({ FaqSection }) => {


	const [active, setActive] = useState('')

	const accordionOnChangeHandler = (event) => {
		
		setActive(event[0])

	}
	

	const faqs = JSON.parse(FaqSection)





	return (
		<section className="w-full px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-8  mt-20 mb-8 max-lg:mt-4 max-lg:mb-4 customList ">
				<h2 className="text-4xl font-semibold mb-2    text-center font-poppins text-transparent py-2 leading-normal bg-gradient-to-br from-orange-400 via-orange-500 via-50% to-orange-700 bg-clip-text"><span className="px-3 py-0 bg-gradient-to-br from-orange-400 via-orange-500 via-50% to-orange-600 text-white rounded-xl ">Frequently</span> Asked Questions</h2>
			<div className="container mx-auto    py-4 px-4 max-lg:px-0  rounded-3xl w-[70%] max-lg:w-full   mt-4">



					
<Accordion allowZeroExpanded onChange={accordionOnChangeHandler}>
    {faqs.map((item) => (
        <AccordionItem key={item._id} uuid={item._id} className="mb-4 ">
            <AccordionItemHeading>
                <AccordionItemButton>
                   <div className={`flex justify-start  items-center max-lg:items-center      gap-2  shadow-md shadow-black/20 w-full  font-poppins  text-xl max-lg:text-base  leading-relaxed border-b   rounded-t-2xl  ${item._id === active ? 'rounded-b-none' : 'rounded-b-2xl'}    bg-slate-500/80  w-full cursor-pointer select-none border-2 border-slate-500/30 px-4 py-4 text-gray-50 transition-all duration-300 hover:border-slate-500/80 hover:text-white `}>
					
				   <IoIosArrowDroprightCircle className={`${item._id === active ? 'rotate-90  ' : ''} transition-all  text-xl w-[5%] max-lg:w-[10%] `}/> <span className=" w-[90%]">{item.question}</span>
				   </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="    ">
              
				<div className="   w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-slate-600/30 bg-slate-100/50 px-4 py-4 text-slate-800" dangerouslySetInnerHTML={{__html: item.answer}}>



				</div>
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>


				<p className="font-semibold ">
					If you have any personalised guidance or additional
					inquiries about our service, please don't hesitate to
					<Link className="text-orange-400" href={'/contact-us'}> contact us</Link>.{" "}
				</p>
			</div>
		</section>
	);
};

export default Faqs;

















 