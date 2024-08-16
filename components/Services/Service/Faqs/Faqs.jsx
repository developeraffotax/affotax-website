import React, { useState } from "react";
import Faq from "./Faq";
import { v4 as uuid } from "uuid";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Faqs = ({ faqs }) => {


	const [active, setActive] = useState('')

	const accordionOnChangeHandler = (event) => {
		
		setActive(event[0])

	}
 





	return (
		<section className="w-full px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-8 bg-gray-100 py-8   ">
			<div className="container mx-auto">
				<h2 className="text-3xl font-semibold mb-2">FAQS:</h2>



					
<Accordion allowZeroExpanded onChange={accordionOnChangeHandler}>
    {faqs.map((item) => (
        <AccordionItem key={item.key} uuid={item.key}>
            <AccordionItemHeading>
                <AccordionItemButton>
                   <div className="flex justify-start items-center gap-2 my-5 font-poppins  text-xl leading-relaxed border-b border-black/25 py-2   ">
					
				   <IoIosArrowDroprightCircle className={`${item.key === active ? 'rotate-90 text-orange-500' : ''} transition-all  scale-125`}/> {item.question}
				   </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-4 bg-slate-200 rounded-lg  ">
              {item.answer}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>


				<p className="font-semibold ">
					If you have any personalised guidance or additional
					inquiries about our service, please don't hesitate to
					contact us.{" "}
				</p>
			</div>
		</section>
	);
};

export default Faqs;























// <ul>
// 					{faqs.map((el) => (
// 						<Faq
// 							key={uuid()}
// 							question={el.question}
// 							answer={el.answer}
// 						/>
// 					))}
// 				</ul>