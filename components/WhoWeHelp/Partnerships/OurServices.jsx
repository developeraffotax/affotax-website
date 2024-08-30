'use client'


import { useScroll, animated, useInView } from '@react-spring/web'
import { FaCheck } from "react-icons/fa6";

import { v4 as uuidv4 } from 'uuid';



const steps = [
    {
        title: 'Personalised support',
        key: uuidv4(),
        content: ' Get a specialised accountant who serves as your go-to contact, providing tailored advice to suit your specific business needs.'
    },
    {
        title: 'Regular updates',
        key: uuidv4(),
        content: 'Stay up-to-date with essential information such as approaching tax deadlines, industry regulations, and financial analysis, delivered through regular communications.'
    },
    {
        title: 'Cloud-based accounting software',
        key: uuidv4(),
        content: 'Leverage our recommendation for reliable cloud-based accounting software that promotes seamless collaboration and gives you instant access to vital financial data.'
    },

]



export default function OurServices() {


    
    
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
                    Beyond the numbers, we offer
					</h2>
					<span className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-800">
                    We provide comprehensive online accountancy services for Partnerships
					</span>

                    <animated.div  ref={ref} style={springs} > {
                            
                            (<div className="mt-12 gap-8   flex justify-center items-center ">
						



                            <ul className="  grid grid-cols-3  gap-20 text-center  max-lg:grid-cols-2">
                                {
                                    steps.map((el, index) => {
                                        return (
                                            <li key={el.key} className="flex flex-col justify-center items-center gap-4">
                                                
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

			</div>
		</>
	);
}
