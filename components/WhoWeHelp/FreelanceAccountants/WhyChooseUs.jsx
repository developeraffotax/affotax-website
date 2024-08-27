'use client'

import Image from "next/image";

import { useScroll } from '@react-spring/web';

import img1 from '@/public/1.PNG';
import img2 from '@/public/2.PNG';
import img3 from '@/public/3.PNG';
import img4 from '@/public/4.PNG';
import img5 from '@/public/5.PNG';
import img6 from '@/public/6.PNG';




const steps = [
    {
        title: 'Expertise and Experience',
        img: img1,
        content: `Our accountants for freelancers have years of experience in the accounting industry and are well-versed in the latest regulations and tax laws. Our affordable accountants stay up-to-date with industry changes, providing you with the most current information and strategies to manage your finances effectively. With our expertise, you can be confident that your financial matters are in capable hands.`
    },
    {
        title: 'Personalized Service',
        img: img2,
        content: `We believe that every freelancer is unique, and we tailor our services to meet your specific requirements. Our accountants for freelancers take the time to understand your business and financial goals, offering personalized advice and solutions. Our affordable accountants are always available to answer your questions and provide support, ensuring you feel confident and informed about your financial matters.
`},
    {
        title: 'Transparent Pricing',
        img: img3,
        content: `We believe in transparency and honesty in all our dealings. Our accountants for freelancers provide clear and upfront pricing, with no hidden fees or surprises. Our affordable accountants offer flexible payment plans to suit your budget, ensuring you get the services you need without breaking the bank.
`
    },
    {
        title: 'Client Satisfaction',
        img: img4,
        content: `Our clients are our top priority, and we strive to exceed their expectations in every way. Our accountants for freelancers are committed to providing high-quality services and excellent customer support. Our affordable accountants have built a reputation for reliability and trustworthiness, and we are proud to have a long list of satisfied clients.`
    },
    {
        title: 'Technology-Driven Solutions',
        img: img6,
        content: `We leverage the latest technology to provide efficient and effective accounting services. Our accountants for freelancers use advanced software for bookkeeping, payroll, and tax management, ensuring accuracy and compliance. Our affordable accountants provide you with access to real-time financial information, helping you make informed decisions and stay on top of your finances.
`
    },
    {
        title: 'Unlimited Support',
        img: img5,
        content: 'Our friendly team is always available to answer queries and offer guidance on business decisions. Send us a message today or get a quote. Our expert accountants for freelancer in the UK are ready to manage your accounting and tax filings with expertise.'
    },
]



export default function WhyChooseUs() {


    const { scrollYProgress } = useScroll();
 


	return (
		<>
			<div className="flex w-full py-20 max-lg:py-8  flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="relative  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                    Why Choose Our Freelancer Accountant Services?

					</h2>
					<span className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-800">
                    Choosing our accountants for freelancers means you get expert financial advice and support at an affordable price. We understand the unique challenges freelancers face, and our goal is to provide you with the best possible service tailored to your needs. Our team of professional accountants is dedicated to helping you succeed, offering personalized services and practical advice to optimize your financial position.

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

                                                    <Image src={el.img} cover className="  "/>
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
