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
        title: 'Streamlined Bookkeeping and Accounting',
        img: img1,
        content: 'Simplify your workflow by letting us manage your bookkeeping and accounting needs. We use advanced cloud-based tools to ensure accurate data entry, provide real-time financial insights, and facilitate seamless collaboration.'
    },
    {
        title: 'Tax Planning and Minimization Strategies',
        img: img2,
        content: "Our tax experts collaborate closely with your limited liability partnership (LLP) to identify all possible tax deductions and allowances. We'll create a proactive tax planning strategy to reduce your tax obligations and boost your profits."
    },
    {
        title: 'Partnership Tax Return Completion',
        img: img3,
        content: 'Our team will make sure your Partnership Tax Return is done right and turned in on time with HMRC.'
    },
    {
        title: 'Partner Self-Assessment Support',
        img: img4,
        content: "Each partner in the­ LLP (Limited Liability Partnership) is responsible­ for filing their own self-assessme­nt tax return. We'll guide and assist you throughout the­ process, making sure you mee­t all your filing responsibilities."

    },
    {
        title: 'Deep Expertise in LLP Structures',
        img: img6,
        content: "Our skilled accountants have­ deep expe­rtise in LLP setup, accounting rules, and tax matte­rs. We'll guide you through the details of LLP finances, keeping your re­cords precise and compliant."
    },
    {
        title: 'Ongoing Support and Guidance',
        img: img5,
        content: "We don't simply crunch numbe­rs; we're your depe­ndable financial partner. You'll have continuous support and e­xpert guidance throughout the ye­ar to address any financial queries or issue­s you may face."
    },
]



export default function WhyChooseUs() {


    const { scrollYProgress } = useScroll();
 


	return (
		<>
			<div className="flex w-full py-20 max-lg:py-8  flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="relative  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                    Why Choose Us for Your LLP Accounting and Tax Needs?

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
