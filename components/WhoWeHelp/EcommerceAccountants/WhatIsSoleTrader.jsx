'use client'

import Image from "next/image";
import HeroImg from "@/public/soleTraderman.PNG";

import { useScroll, animated } from '@react-spring/web'





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



export default function WhatIsSoleTrader() {


    const { scrollYProgress } = useScroll();
 


	return (
		<>
			<div className="flex w-full max-lg:flex-col  flex-row gap-10 py-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10    bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">

            <div className="   flex flex-row justify-start text-start items-start  blob overflow-hidden   bg-gradient-to-br from-orange-900 via-orange-500 via-50% to-orange-800  ">



            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FFD6E8" d="M28.5,-44.9C34.6,-34.9,35.5,-23.3,40.5,-12.2C45.5,-1,54.7,9.9,56.4,22.6C58.2,35.4,52.6,50.1,42,58.5C31.4,66.9,15.7,69,0.5,68.4C-14.8,67.7,-29.5,64.4,-43.5,57C-57.5,49.7,-70.7,38.5,-70.6,26C-70.4,13.4,-57,-0.4,-51,-15.9C-45.1,-31.4,-46.5,-48.7,-39.2,-58.4C-32,-68.1,-16,-70.2,-2.4,-67C11.2,-63.7,22.5,-55,28.5,-44.9Z" transform="translate(100 100)" />
</svg> */}




					<Image src={HeroImg} cover className="scale-110    " />
				</div>


				<div className="relative   flex   flex-col items-start justify-center  ">
					<h2 className="  max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                    What is a Sole Trader?
					</h2>
					<span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800">
                    A sole trader is the simplest form of business structure in the UK, where a single individual owns and operates the business. This structure offers full control over decision-making and management but also means personal responsibility for all business debts and liabilities.
					</span>

                    
				</div>

				
			</div>
		</>
	);
}
