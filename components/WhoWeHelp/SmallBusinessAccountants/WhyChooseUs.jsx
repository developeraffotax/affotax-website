'use client'

import Image from "next/image";
import { useScroll } from '@react-spring/web';

import img1 from '@/public/1.png';
import img2 from '@/public/2.png';
import img3 from '@/public/3.png';
import img4 from '@/public/4.png';
import img5 from '@/public/5.png';
import img6 from '@/public/6.png';




const steps = [
    {
        title: 'Accounts Management',
        img: img1,
        content: 'Keeping accurate accounts is fundamental for any business. Our team will ensure your accounts are meticulously maintained and updated regularly. This includes preparing your annual accounts, managing ledgers, and ensuring all financial records are accurate and compliant with UK standards.'
    },
    {
        title: 'Corporation Tax',
        img: img2,
        content: 'Navigating the complexities of corporation tax can be daunting. We offer comprehensive corporation tax services, including tax planning, preparation, and filing. Our experts will work to minimize your tax liabilities while ensuring compliance with HMRC regulations.'
    },
    {
        title: 'Self-Assessment',
        img: img3,
        content: 'Self-assessment can be time-consuming and complex. We simplify this process by managing your self-assessment tax returns, ensuring all income and expenditures are accurately reported. Our goal is to help you avoid any penalties and optimize your tax situation.'
    },
    {
        title: 'Bookkeeping',
        img: img4,
        content: 'Effective bookkeeping is the backbone of any successful business. Our small business bookkeeping services ensure that your financial records are kept up to date, accurate, and compliant. We manage your day-to-day financial transactions, maintain ledgers, and provide regular financial reports.'
    },
    {
        title: 'Payroll Services',
        img: img6,
        content: "Managing payroll can be a complex and time-consuming task. Our payroll services ensure that your employees are paid accurately and on time, every time. We handle all aspects of payroll management, including PAYE, National Insurance, and statutory deductions, freeing you from the administrative burden."
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
                    Why choose our small business accounting services?
					</h2>
					<span className="mt-4 max-w-2xl text-center text-xl leading-relaxed text-gray-800">
                    Our small business accounting services are designed to handle all your financial management needs, allowing you to focus on what you do best – running your business. We provide a full suite of services to help you stay compliant, manage cash flow, and plan for future growth.

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
