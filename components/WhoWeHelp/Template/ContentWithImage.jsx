"use client";

import Image from "next/image";




export default function ContentWithImage({slug, heading, html, imageUrl, imagePosition, index}) {
	

	return (
		<>
			<div className={`flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-10 ${index % 2 === 0 ? 'bg-gradient-to-tr' : 'bg-gradient-to-br' }    from-orange-300/5 to-orange-900/20`}>
				<div className={`flex ${imagePosition === 'Right' ? 'flex-row' : 'flex-row-reverse'} max-lg:flex-col-reverse max-lg:items-center  gap-16 p-8 justify-center`}>
					

					<div className="mt-4 max-w-2xl  flex   flex-col items-start justify-start  w-[60%] max-lg:w-full  ">
						<h2 className="pb-4   leading-relaxed text-start max-lg:text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
							{heading}
						</h2>
						<span className=" text-start text-xl leading-relaxed text-gray-800" dangerouslySetInnerHTML={{__html: html ? String(html) : "",}}>
							
						</span>
					</div>

					<div className="   flex flex-row justify-start text-start items-start rounded-[300px]  w-[40%]  max-lg:w-[80%] ">
						{/* <Image src={imageUrl} cover className="" height={500} width={500} /> */}
					</div>

				</div>
				
			</div>
		</>
	);
}
