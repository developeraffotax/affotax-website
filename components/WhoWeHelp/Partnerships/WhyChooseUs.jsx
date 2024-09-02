'use client'

import Image from "next/image";
import { useScroll} from '@react-spring/web';

import img1 from '@/public/1.png';
import img2 from '@/public/2.png';
import img3 from '@/public/3.png';
import img4 from '@/public/4.png';
import img5 from '@/public/pay.png';
import img6 from '@/public/6.png';

import { v4 as uuidv4 } from 'uuid';



const steps = [
    {
        title: 'Personalised accounting solutions',
        key: uuidv4(),
        img: img1,
        content: {
            head: `We offer personalised accounting solutions that align precisely with your requirements. We'll collaborate with you to design a tailored system that includes: `,
            ul: ['A well-defined profit-sharing structure', 'Efficient management of partner contributions and distributions', 'Streamlined record-keeping practices to enhance operations']
        }

    },
    {
        title: 'Tax planning and compliance',
        key: uuidv4(),
        img: img2,
        content: "Navigating UK tax rules can be tricky and time-wasting. Our team of experts will make sure your partnership meets all tax obligations, such as Self Assessment and Corporation Tax. We'll also work hard to reduce your tax bill and find ways to save you money."
    },
    {
        title: 'Profit and loss management',
        key: uuidv4(),
        img: img3,
content: "Get a clear picture of how your partnership is doing financially with our timely and accurate Profit and Loss statements. We'll help you analyse your income, expenses, and partner distributions so you can make smart decisions about your finances and boost performance."
    },
    {
        title: 'Succession planning',
        key: uuidv4(),
        img: img4,
        content: "Prepare for the future by having a succession plan in place. We can assist in developing strategies to minimise disruption and protect your business in case a partner leaves or retires. This plan ensures a smooth transition and protects your business's long-term success."
    },
    {
        title: 'Business partnership agreements',
        key: uuidv4(),
        img: img6,
        content: " Protect your business with a comprehensive partnership agreement. Our team can help create or review existing agreements, clarifying roles, duties, profit distribution, and conflict resolution processes. This ensures everyone knows their place and how disputes will be handled."
    },
    {
        title: 'Cash flow management',
        key: uuidv4(),
        img: img5,
        content: "Our experts will help you keep your cash flow healthy. We'll develop strategies to improve your cash flow forecasts and help you control your expenses."
    },
]



export default function WhyChooseUs() {


   
 


	return (
		<>
			<div className="flex w-full py-20 max-lg:py-8  flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="relative  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                    Here's how we can help your partnership thrive
					</h2>
					<span className="mt-4 max-w-2xl text-center text-xl leading-relaxed text-gray-800">
                    We have helped over 3,000+ businesses in the UK to thrive.
					</span>





					<div className="mt-12 gap-8 w-full flex justify-center items-center content-center ">
						



                            <ul className=" grid grid-cols-3 w-full	  gap-8 text-center max-lg:grid-cols-2  ">
                                {
                                    steps.map((el, index) => {
                                        return (
                                            <li key={el.key} className="flex flex-col justify-start  items-center gap-4  ">
                                                <div className="drop-shadow-md  flex justify-center items-center text-4xl font-oswald font-semibold  w-40">

                                                    <Image src={el.img} cover className="saturate-  "/>
                                                </div>
                                                <h3 className="font-semibold text-xl font-poppins max-w-72">{el.title}</h3>
                                                <p className="text-sm max-w-72">{!el.content.head ? el.content : null}</p>

                                                {el.content.head && <h3 className="">{el.content.head}</h3>}
                                                {el.content.ul && <ul className="list-disc ml-8">
                                                    {
                                                        el.content.ul.map((el, index) => {
                                                            return <li className="text-start text-sm font-poppins  ">{el}</li>
                                                        })
                                                    }</ul>}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            



					</div>
                    {/* </animated.div> */}
				</div>

				
			</div>
		</>
	);
}
