import React from 'react';
import HeroImg from '@/public/hero.png'
import HeroImg2 from '@/public/hero2.png'
import Link from 'next/link';

export default function HomeTop() {
   

    return (
        <section className=' text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage'>
            <div className='container mx-auto '>
            <div className=' flex py-24  flex-row max-lg:flex-col  max-lg:px-8 max-lg:py-8  items-center  justify-between  '>
                <div className='items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 '>
                    <h1 className=' text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left'> Online Accountant <br /> Services | UK's Affordable Accounting Firm </h1>
                    <p className='mb-8 leading-relaxed font-semibold text-tertiary/[70] text-xl max-lg:text-lg'> Welcome to the homepage of an affordable accounting firm in the UK made for small and micro-businesses. We are the esteemed ACCA-licensed, reliable accountants and HMRC-authorised agents dedicated to offering steadfast expertise. <br /> <br /> Find the comfort of having reliable accountants dedicated to your financial prosperity greetings from the UK for a new era of trustworthy and affordable accountancy services. </p>
                    <div className='flex justify-center text-nowrap '>
                        <Link href={'/services'}><button className='inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold'> Services </button></Link>
                        <Link href={'/contact-us'}><button className='ml-4 inline-flex text-primary bg-transparent border-0 py-2 px-6 outline-primary outline-1 outline hover:bg-primary hover:text-secondary rounded-md text-lg font-semibold'> Get a Quote </button></Link>
                    </div>
                </div>

                <div className=' w-[50%]   max-lg:scale-125 max-lg:mb-4 scale-125'>
                    <img
                        className='object-cover object-center rounded  drop-shadow-xl '
                        alt='hero'
                        src={HeroImg.src}
                    />
                </div>
            </div>
            </div>
        </section>
    );
}
