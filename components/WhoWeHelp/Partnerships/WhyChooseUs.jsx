'use client'

import Image from "next/image";
import { useScroll} from '@react-spring/web';

import img1 from '@/public/1.PNG';
import img2 from '@/public/2.PNG';
import img3 from '@/public/3.PNG';
import img4 from '@/public/4.PNG';
import img5 from '@/public/5.PNG';
import img6 from '@/public/6.PNG';




const steps = [
    {
        title: 'Personalised accounting solutions',
        img: img1,
        content: `We offer personalised accounting solutions that align precisely with your requirements. We'll collaborate with you to design a tailored system that includes: 
A well-defined profit-sharing structure
Efficient management of partner contributions and distributions
Streamlined record-keeping practices to enhance operations
`
    },
    {
        title: 'Tax planning and compliance',
        img: img2,
        content: "Navigating UK tax rules can be tricky and time-wasting. Our team of experts will make sure your partnership meets all tax obligations, such as Self Assessment and Corporation Tax. We'll also work hard to reduce your tax bill and find ways to save you money."
    },
    {
        title: 'Profit and loss management',
        img: img3,
content: "Get a clear picture of how your partnership is doing financially with our timely and accurate Profit and Loss statements. We'll help you analyse your income, expenses, and partner distributions so you can make smart decisions about your finances and boost performance."
    },
    {
        title: 'Succession planning',
        img: img4,
        content: "Prepare for the future by having a succession plan in place. We can assist in developing strategies to minimise disruption and protect your business in case a partner leaves or retires. This plan ensures a smooth transition and protects your business's long-term success."
    },
    {
        title: 'Business partnership agreements',
        img: img6,
        content: " Protect your business with a comprehensive partnership agreement. Our team can help create or review existing agreements, clarifying roles, duties, profit distribution, and conflict resolution processes. This ensures everyone knows their place and how disputes will be handled."
    },
    {
        title: 'Unlimited Support',
        img: img5,
        content: 'Our friendly team is always available to answer queries and offer guidance on business decisions. Feel Free to contact us anytime.'
    },
]



export default function WhyChooseUs() {


    const { scrollYProgress } = useScroll();
 


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





                    {/* <animated.div style={{ translateX: scrollYProgress.to((val) => {
                        return val * 208 + 'px'
                    }), opacity: scrollYProgress  }}> */}
					<div className="mt-12 gap-8 w-full flex justify-center items-center content-center ">
						{/* <Link
							href="/contact-us"
							className="flex flex-row items-center text-center justify-center gap-x-2 font-semibold rounded-lg text-white px-8 py-3 bg-orange-500 hover:bg-orange-600 animate-bounce transition-all "
						>
							Get a Quote
							<FaRegArrowAltCircleRight className="scale-110 " />
						</Link> */}



                            <ul className=" grid grid-cols-3 w-full	  gap-8 text-center max-lg:grid-cols-2  ">
                                {
                                    steps.map((el, index) => {
                                        return (
                                            <li className="flex flex-col justify-center items-center gap-4  ">
                                                <div className="drop-shadow-md  flex justify-center items-center text-4xl font-oswald font-semibold  w-40">

                                                    <Image src={el.img} cover className="saturate-  "/>
                                                </div>
                                                <h3 className="font-semibold text-xl font-poppins max-w-72">{el.title}</h3>
                                                <p className="text-sm max-w-72">{el.content}</p>
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
