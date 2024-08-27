'use client'


import { useScroll, animated, useInView } from '@react-spring/web'




const steps = [
    {
        title: 'Registration',
        content: 'Register as a sole trader with HMRC'
    },
    {
        title: 'Bank Account',
        content: 'Open a separate bank account for business transactions'
    },
    {
        title: 'Insurance',
        content: 'Obtain necessary insurance coverage'
    },
    {
        title: 'Record Keeping',
        content: 'Set up a system for accurate financial records'
    },
]



export default function HowToGetStarted() {


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
				<div className="relative  py-16 max-lg:py-0 max-lg:pb-16  border-b border-gray-300  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                    Here's how we support Limited Companies:

					</h2>
					<span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
                    We can have you all set up in just in four simple steps…
					</span>

                    <animated.div  ref={ref} style={springs} > {
                            
                            (<div className="mt-12 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4  flex justify-center items-center ">
						{/* <Link
							href="/contact-us"
							className="flex flex-row items-center text-center justify-center gap-x-2 font-semibold rounded-lg text-white px-8 py-3 bg-orange-500 hover:bg-orange-600 animate-bounce transition-all "
						>
							Get a Quote
							<FaRegArrowAltCircleRight className="scale-110 " />
						</Link> */}



                            <ul className="  flex justify-center items-center gap-8 text-center max-lg:flex-col  ">
                                {
                                    steps.map((el, index) => {
                                        return (
                                            <li className="flex flex-col justify-center items-center gap-4">
                                                <div className="bg-[#23314E] drop-shadow-md  rounded-full aspect-square flex justify-center items-center text-4xl font-oswald font-semibold text-white w-24 ">{index+1}</div>
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
