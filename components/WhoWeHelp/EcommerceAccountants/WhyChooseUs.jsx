'use client'

import Image from "next/image";

import { useScroll } from '@react-spring/web';

import img1 from '@/public/1.PNG';
import img2 from '@/public/2.PNG';
import img3 from '@/public/3.PNG';
import img4 from '@/public/transparentPricing.PNG';
import img5 from '@/public/5.PNG';
import img6 from '@/public/6.PNG';




const steps = [
    {
        title: 'Expertise and Experience',
        img: img1,
        content: `Our accountants have extensive experience working with ecommerce businesses of all sizes. We understand the complexities of online sales platforms like Amazon and Shopify, enabling us to provide tailored advice and solutions.
`
    },
    {
        title: 'Proactive Tax Planning',
        img: img2,
        content: `We help you navigate complex tax landscapes, ensuring you comply with regulations while minimizing tax liabilities. Our proactive tax planning strategies are designed to optimize your ecommerce business's financial efficiency.
`
    },
    {
        title: 'Personalized Service',
        img: img3,
        content: `We believe in building long-term relationships with our clients. Our accountants offer personalized service, taking the time to understand your business goals and challenges. We're committed to helping you achieve success in your ecommerce ventures.
`
    },
    {
        title: 'Transparent Pricing',
        img: img4,
        content: `We offer transparent pricing with no hidden fees. Our accountancy services for ecommerce businesses are designed to provide excellent value for money, ensuring you receive the highest quality service at competitive rates.
s`
    },
    {
        title: 'Technology-Driven Solutions',
        img: img6,
        content: `We leverage cutting-edge accounting software and technology to streamline processes and provide real-time financial insights. Our Amazon accounting and Shopify accountant services use automation to enhance accuracy and efficiency.`
    },
    {
        title: 'Unlimited Support',
        img: img5,
        content: `Our friendly team is always available to answer queries and offer guidance on business decisions.`
    },
]



export default function WhyChooseUs() {


    const { scrollYProgress } = useScroll();
 


	return (
		<>
			<div className="flex w-full py-20 max-lg:py-8  flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="relative  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                    Why Choose Us for Your Ecommerce Business Accounting Needs?
					</h2>
					<span className="mt-4 max-w-2xl text-center text-xl leading-relaxed text-gray-800">
                    Choosing our specialized accountancy services for ecommerce businesses means partnering with a team that understands the unique challenges and opportunities of online selling platforms. Here's why we stand out:

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

                                                    <Image src={el.img} cover className="scale-110 "/>
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
