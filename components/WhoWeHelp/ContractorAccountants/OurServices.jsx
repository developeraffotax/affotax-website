'use client'

import { useScroll, animated, useInView } from '@react-spring/web'
import { FaCheck } from "react-icons/fa6";





const steps = [
    {
        title: 'Accounts',
        content: 'Maintaining accurate financial records to meet regulatory requirements.'
    },
    {
        title: 'Corporation Tax',
        content: 'Guidance on corporation tax for potential future incorporation.'
    },
    {
        title: 'Booking & VAT',
        content: 'Efficient payroll management to ensure compliance'
    },
    {
        title: 'Payroll',
        content: 'Detailed bookkeeping services and VAT management'
    },

    {
        title: 'Self Assessment',
        content: 'Assistance in preparing and filing self-assessment tax returnss'
    },

    {
        title: 'Company Formation',
        content: 'Support in transitioning from a sole trader to a limited company.'
    },
]



export default function OurServices() {


    const { scrollYProgress } = useScroll();
    
    const [ref, springs] = useInView( () => ({
        from: {
          opacity: 0,
          y: 300,
          
        },
        to: {
          opacity: 1,
          y: 0,
         
        },

        
      }),


      
      );
 


	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-br from-orange-300/5 to-orange-900/20 ">
				<div className="relative  py-16 border-b border-gray-300  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  font-bold text-transparent sm:max-w-2xl text-4xl">
                    Our Services for Sole Traders
					</h2>
					<span className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-800">
                    We provide comprehensive online accountancy services for sole traders
					</span>

                    <animated.div  ref={ref} style={springs} > {
                            
                            (<div className="mt-12 gap-8   flex justify-center items-center ">
						{/* <Link
							href="/contact-us"
							className="flex flex-row items-center text-center justify-center gap-x-2 font-semibold rounded-lg text-white px-8 py-3 bg-orange-500 hover:bg-orange-600 animate-bounce transition-all "
						>
							Get a Quote
							<FaRegArrowAltCircleRight className="scale-110 " />
						</Link> */}



                            <ul className="  grid grid-cols-3  gap-20 text-center  max-lg:grid-cols-2">
                                {
                                    steps.map((el, index) => {
                                        return (
                                            <li className="flex flex-col justify-center items-center gap-4">
                                                
                                                    <div className=" rounded-full bg-slate-200 relative drop-shadow-none bottom-3 right-3 z-10 w-24    aspect-square flex justify-center items-center text-4xl font-oswald font-semibold text-white">
                                                    <div className=" border-[0.25rem] bg-transparent  absolute border-orange-500 drop-shadow-md  w-full h-full  rounded-full  top-2 left-3 z-10 flex justify-center items-center">

                                                    <FaCheck className="text-orange-500 scale-125"/>
                                                    </div>
                                                    </div>
                                               
                                                <h3 className="font-semibold text-xl font-poppins ">{el.title}</h3>
                                                <p className="text-sm max-w-52">{el.content}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            



					</div>) 
                        
                        }
					
                    </animated.div>
				</div>

				{/* <div className="flex-1 flex flex-row justify-start items-start -mt-10 ">
					<Image src={HeroImg} cover className="scale-90" />
				</div> */}
			</div>
		</>
	);
}
