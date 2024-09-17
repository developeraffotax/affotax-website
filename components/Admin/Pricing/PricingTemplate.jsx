import Link from "next/link";
import Tick from "./Tick";
import Cross from "./Cross";
import { BsCheckCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";






export default function PricingTemplate({_id, pkgName, pkgPrice, pkgTurnover, packageIncludes, footerText, finalArr, editingHandler, onChangeHandler, onEnterHandler, arrHandler, isServiceEdit, serviceEditIndex}) {
	return (
		
			<div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
				<div className="px-2 text-center h-48 flex flex-col items-center justify-center">
					{!pkgName.isEditing ? <h3 onClick={editingHandler?.pkgName} className="tracking-widest">{pkgName.value}</h3> : <input onKeyDown={onEnterHandler} className="text-center border-none ring-2 ring-gray-300 rounded-lg p-2 w-full shadow-md shadow-black/30   outline-none focus:ring-blue-500   transition duration-300 " name="pkgName" value={pkgName.value} onChange={onChangeHandler}/>}
					<h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
						{!pkgPrice.isEditing ? <span onClick={editingHandler?.pkgPrice}>£{pkgPrice.value}</span> : <input  onKeyDown={onEnterHandler} className="text-center border-none ring-2 ring-gray-300 rounded-lg p-2 w-full shadow-md shadow-black/30   outline-none focus:ring-blue-500   transition duration-300" name="pkgPrice" value={pkgPrice.value} onChange={onChangeHandler}/>}
						<span className="text-gray-600 text-base ml-1">
							+ VAT
						</span>
					</h2>
					{!pkgTurnover.isEditing ? <span className="text-sm text-gray-600" onClick={editingHandler?.pkgTurnover}> {pkgTurnover.value} </span> : <input  onKeyDown={onEnterHandler} className="text-center border-none ring-2 ring-gray-300 rounded-lg p-2 w-full shadow-md shadow-black/30   outline-none focus:ring-blue-500   transition duration-300" name="pkgTurnover" value={pkgTurnover.value} onChange={onChangeHandler}/>}
				</div>

                {/* Here Comes the ticks and cross */}








                {finalArr?.map((el, index) => {

if (isServiceEdit && parseInt(serviceEditIndex) === index) {
	return (
		<div className="flex justify-center gap-2 items-center w-full p-2 border-b "> <BsCheckCircle onClick={arrHandler.add} className="text-xl hover:cursor-pointer"/> <RxCrossCircled onClick={arrHandler.remove}  className="text-xl hover:cursor-pointer"/> </div> 
	)
}
						



                   if (packageIncludes.value?.includes(el)) {
					return (
                       <Tick key={`${el}--${index}--pricing-template`}/>
                    )
				   } else {
					return (
                        <Cross key={`${el}--${index}--pricing-template`} />
                    )
				   }


                })}




				<div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
					<Link href={"/cart"}> <button className="flex items-center justify-center text-secondary bg-primary/90 border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary rounded"> Buy Now <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1 mt-1" viewBox="0 0 24 24" > <path d="M5 12h14M12 5l7 7-7 7" /> </svg> </button> </Link>
					
						{!footerText.isEditing ? <p className="text-xs text-gray-500 mt-3" onClick={editingHandler?.footerText}>{footerText.value}</p> : <textarea  onKeyDown={onEnterHandler} className="text-center  border-none ring-2 ring-gray-300 rounded-lg p-2 w-full shadow-md shadow-black/30   outline-none focus:ring-blue-500   transition duration-300" name="footerText" value={footerText.value} onChange={onChangeHandler}/>}
					
				</div>
			</div>
		
	);
}
