'use client'

import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HeroImg from "@/public/Accountant1.PNG";
import Link from "next/link";
import { useScroll, animated, useInView } from '@react-spring/web';

import img1 from '@/public/1.PNG';
import img2 from '@/public/2.PNG';
import img3 from '@/public/3.PNG';
import img4 from '@/public/4.PNG';
import img5 from '@/public/5.PNG';
import img6 from '@/public/6.PNG';




const steps = [
    {
        title: 'Simplified Accounting',
        img: img1,
        content: 'We take the burden of accounting off your shoulders, managing your daily business transactions, including receipts and invoices, through user-friendly cloud-based applications.'
    },
    {
        title: 'Tax-Related Expertise',
        img: img2,
        content: 'We ensure you receive all applicable deductions and allowances, reducing your tax burden. Stay updated with the latest tax laws affecting sole traders in the UK.'
    },
    {
        title: 'HMRC Compliance',
        img: img3,
        content: 'We handle all communication with HMRC, ensuring you never miss a deadline or incur penalties.'
    },
    {
        title: 'Strategic Planning',
        img: img4,
        content: 'Receive valuable financial advice tailored to your business, helping you set realistic goals, make informed decisions, and plan for the future.'
    },
    {
        title: 'Simple bookkeeping software',
        img: img6,
        content: "Pandle was developed for our clients, and is now used by over 90,000 businesses around the world. Our bookkeeping team will regularly review your entries to ensure they're accurate."
    },
    {
        title: 'Unlimited Support',
        img: img5,
        content: 'Our friendly team is always available to answer queries and offer guidance on business decisions.'
    },
]



export default function WhyChooseUs() {


    const { scrollYProgress } = useScroll();
 


	return (
		<>
			<div className="flex w-full py-20 max-lg:py-8  flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="relative  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                    Why Choose Us for Your Sole Trader Accounting Needs?
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
                                                <h3 className="font-semibold text-xl font-poppins ">{el.title}</h3>
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
