import Link from "next/link";
import Tick from "./Tick";
import Cross from "./Cross";
import { BsCheckCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";






export default function PricingTemplate({_id, pkgName, pkgPrice, pkgTurnover, packageIncludes, footerText, finalArr, onClick}) {
	return (
		
			<>
            
            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="tracking-widest">{pkgName}</h3>
					<h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
                    <span >£{pkgPrice}</span>
						<span className="text-gray-600 text-base ml-1">
							+ VAT
						</span>
					</h2>
                    <span className="text-sm text-gray-600" > {pkgTurnover} </span>
				</div>

                {/* Here Comes the ticks and cross */}

                {finalArr?.map((el, index) => {


						



                   if (packageIncludes?.includes(el)) {
					return (
                       <Tick key={`${el}--${index}--pricing-template-tick`}/>
                    )
				   } else {
					return (
                        <Cross key={`${el}--${index}--pricing-template-cross`} />
                    )
				   }

                })}




				<div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
					<Link href={"/cart"} onClick={onClick}> <button className="flex items-center justify-center text-secondary bg-primary/90 border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary rounded"> Buy Now <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1 mt-1" viewBox="0 0 24 24" > <path d="M5 12h14M12 5l7 7-7 7" /> </svg> </button> </Link>
					
                    <p className="text-xs text-gray-500 mt-3" >{footerText}</p>
					
				</div>
                
                </>
				
			
		
	);
}
