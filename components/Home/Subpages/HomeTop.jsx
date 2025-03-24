"use client"

import React, { useContext } from 'react';
import HeroImg4 from '@/public/hero4.png';
import Link from 'next/link';
import { QuoteFormContext } from '@/app/(user)/layout';
import Image from 'next/image';

export default function HomeTop({HeroSection}) {

    console.log(HeroSection)
    const {heading, html, imageUrl} = JSON.parse(HeroSection)
    const quoteContext = useContext(QuoteFormContext);

    return (
        <section className=' text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage'>
            <div className='container mx-auto '>
            <div className=' flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  '>
                <div className='items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 '>
                    <h1 className=' text-5xl  max-lg:text-4xl mb-8 font-bold  text-tertiary max-lg:text-left leading-[3rem]'  dangerouslySetInnerHTML={{__html: heading}} ></h1>
                    <div className='mb-8 leading-relaxed  text-tertiary/[70] text-xl max-lg:text-lg' dangerouslySetInnerHTML={{__html: html}}></div>
                    <div className='flex justify-center text-nowrap '>
                        <Link href={'/services'}><button className='inline-flex text-primary shadow-md shadow-black/15 bg-transparent border-0 py-2 px-6 outline-primary outline-1 outline   hover:bg-primary hover:text-secondary rounded-md text-lg font-semibold'> Services </button></Link>
                        <button onClick={quoteContext.showModal} className='ml-4 inline-flex text-secondary shadow-md shadow-black/15 bg-primary border-0 py-2 px-6 hover:outline-primary outline outline-1 outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold'> Get a Quote </button>
                    </div>
                </div>

                <div className=' w-[50%]  max-lg:w-full  max-lg:mb-4  '>
                    <img
                        className='object-cover object-center rounded  drop-shadow-xl   '
                        alt='hero'
                        src={HeroImg4.src}
                        
                    />
                </div>
            </div>
            </div>
        </section>
    );
}
