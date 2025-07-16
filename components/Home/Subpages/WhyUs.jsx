"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import { QuoteFormContext } from '@/app/(user)/layout'



export default function WhyUs({WhyChooseUsSection, CTASection}) {
    const quoteContext = useContext(QuoteFormContext)


    const {heading, arr} = JSON.parse(WhyChooseUsSection);
    const {heading: ctaHeading, html} = JSON.parse(CTASection);


  return (
    <section className="text-gray-600 body-font px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8">
        <div className="container px-5 py-12 mx-auto">
            <div className="text-center mb-16">
                <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                {heading}

                </h2>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
                </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                {
                    arr.map((el, i) => {
                        return (
                            <div key={el._id} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                    <Image src={el.iconUrl} width={500} height={500} cover="true"  className='scale-125' alt={`icon-${i}`}/>
                    {/* <Image src={Tax}  cover="true"  /> */}
                    </div>
                    <div className="flex-grow">
                    <h3 className="text-primary text-lg title-font font-medium mb-3">
                    {el.title}

                    </h3>
                    <p className="leading-relaxed text-base">
                    {el.content}
                    </p>
                    
                    </div>
                </div>
                        )
                    })
                }





            </div>

        <div className=' mt-20  text-center  flex-col flex items-center justify-center bg-slate-50 w-full  rounded-xl p-12 max-lg:p-6 drop-shadow-md '>
            <h2 className=' title-font text-3xl font-semibold '>
            {ctaHeading}

            </h2>
            <div className='mt-4 text-md  max-w-[600px] ' dangerouslySetInnerHTML={{__html: html}}>
             </div>
            <button onClick={quoteContext.showModal} className='drop-shadow-md transition-all  mt-4 inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  '> Get a Quote </button>
                        
        </div>

        </div>

    </section>

  )
}


















