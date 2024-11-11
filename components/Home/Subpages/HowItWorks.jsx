import React from 'react'
import { FcBullish } from "react-icons/fc";
import { FcDataSheet } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { v4 as uuidv4 } from 'uuid';


export default function HowItWorks({HowItWorksSection}) {

    const {heading, arr} = JSON.parse(HowItWorksSection);


    const iconsArr = [
        <FcDataSheet key={uuidv4()} className='scale-150'/>, <FcBullish  key={uuidv4()} className='scale-150'/>, <FcOk  key={uuidv4()} className='scale-150'/>, <FcCurrencyExchange  key={uuidv4()} className='scale-150'/>
    ]

    const mappedWithIconsArray = arr.map((el, i) => {
        return {
            ...el,
            iconCmp: iconsArr[i]
        }
    })

  return (
    
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-12 xl:py-12 w-full drop-shadow-lg px-80 max-2xl:px-40 max-xl:px-20  max-lg:px-8  ">
        <div className="mx-auto max-w-7xl px-4  max-lg:px-4">
            <div className="text-center mb-12">
                <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    {heading}
                </h2>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
                </div>
            </div>


            <ul className="mx-auto mt-12 grid grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-4">

                {
                    mappedWithIconsArray.map((el) => {
                        return (
                            
                            <li key={el._id} className="flex-start group relative flex lg:flex-col">
                                    <span
                                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                                    aria-hidden="true"
                                    />
                                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
                                    {el.iconCmp}
                                    </div>
                                    <div className="ml-6 lg:ml-0 lg:mt-10">
                                    <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                    {el.title}

                                    </h3>
                                    <h4 className="mt-2 text-base text-gray-700">
                                    {el.content}
                                    </h4>
                                    </div>
                        </li>
                        )
                    })
                }



            </ul>
        </div>
    </section>


  )
}
