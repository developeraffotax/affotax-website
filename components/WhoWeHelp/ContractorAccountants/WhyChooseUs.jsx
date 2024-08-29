'use client'

import Image from "next/image";
import { useScroll} from '@react-spring/web';

import img1 from '@/public/1.png';
import img2 from '@/public/2.png';
import img3 from '@/public/3.png';
import img4 from '@/public/4.png';
import img5 from '@/public/5.png';
import img6 from '@/public/6.png';




const steps = [
    {
        title: 'Your Personal Accountant, Not a Chatbot',
        img: img1,
        content: "You won't be dealing with robots here. You'll have a dedicated contractor accountant who understands the joys (and tribulations) of freelancing and can give you personalised advice customised specifically for your situation."
    },
    {
        title: 'Limited Company Champions',
        img: img3,
        content: "Setting up and running a limited company can be a right faff. But fear not! We'll help you navigate the process, ensuring proper bookkeeping and tax filing for maximum financial gain (because, let's be honest, that's why you went limited in the first place!"
    },
    {
        title: 'Tax Efficiency, Our Middle Name (Almost)',
        img: img2,
        content: "We don't just file your tax return – we're tax planning ninjas! We'll find every allowable deduction under the sun (well, not literally, but you get the idea) to keep your hard-earned cash where it belongs – in your pocket."
    },
    {
        title: 'Free Up Your Time to Slay Dragons (or Clients)',
        img: img4,
        content: "Leave the number-crunching to us. We'll handle all your accounting and tax needs efficiently, freeing you up to focus on what you do best – rocking your freelance world."
    },
    {
        title: 'Transparent Pricing, No Haggling',
        img: img6,
        content: "We offer competitive, fixed-fee packages that are clear as day. No hidden costs, just expert service at a fair and affordable price, because who doesn’t need that?"
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
                    Top Reasons to Select Our Contractor Accountancy Service
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
