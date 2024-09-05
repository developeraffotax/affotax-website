'use client'

import Image from "next/image";


export default function WhyChooseUs({slug, heading, shortDescription, arr, bg_gradient}) {


	return (
		<>
			<div className={`flex w-full py-20 max-lg:py-8  flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10  ${bg_gradient} from-orange-300/5 to-orange-900/20`}>
				<div className="relative  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className="pb-4 max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
                    {heading}
					</h2>
					<span className=" max-w-2xl text-center text-lg leading-relaxed text-gray-800">
                    {shortDescription}
					</span>


					<div className="mt-12 gap-8 w-full flex justify-center items-center content-center ">
						

                            <ul className=" grid grid-cols-3 w-full	  gap-8 text-center max-lg:grid-cols-2  ">
                                {
                                    arr.map((el, index) => {
                                        return (
                                            <li key={index + 'why-choose-us'} className="flex flex-col justify-center items-center gap-4  ">
                                                <div className="drop-shadow-md  flex justify-center items-center text-4xl font-oswald font-semibold  w-40">

                                                    <Image src={el.imageUrl} cover className="  " height={200} width={200} />
                                                </div>
                                                <h3 className="font-semibold text-xl font-poppins max-w-72">{el.title}</h3>
                                                <p className="text-sm max-w-72">{el.content}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            



					</div>
                   
				</div>

				
			</div>
		</>
	);
}
