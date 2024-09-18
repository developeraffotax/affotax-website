'use client'

import Link from 'next/link'
import React from 'react'
import PricingTemplate from './PricingTemplate';

export default function ChoosePackage({pricingPage}) {

    const pricingPageData = JSON.parse(pricingPage);

    const {title, first, second, third, finalArr } = pricingPageData;



    const onClickLocalStorageHandler = (id) => {


        console.log(id)

        if(localStorage.getItem('price_id')) {
           
            const old_ids = localStorage.getItem('price_id');
            let ids_arr = old_ids.split(',');
            
            
            if (!(ids_arr.find((el) => el === id))) {
                ids_arr.push(id);
            }

            console.log(ids_arr)
            localStorage.setItem('price_id', ids_arr)
            
        } else {
            
            localStorage.setItem('price_id', id)
        }

    }















  return (
    
    <>
    
    <section className="text-gray-700 body-font w-full py-4 overflow-hidden border-t border-b-2  border-gray-200 px-80 max-2xl:px-40 max-xl:px-10 max-lg:hidden">
         <div className="container  py-16 mx-auto">
            <div className="text-center mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  mb-4">
                    {title}
                </h1>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
                </div>
            </div>
        <div className="flex flex-wrap">
            <div className="lg:w-1/4 mt-48 hidden lg:block">
                <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">

                {
                    finalArr.map((el, index) => {

                        return  <p key={`${el}--${index}--pricing-user`} className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px"> {el} </p>

                    })


                }










               
                </div>
            </div>
            <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg  ">
                <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                
               
               <PricingTemplate {...first} finalArr={finalArr} onClick={onClickLocalStorageHandler.bind(null, '66e3edbe001f439adee69a87')}/>
               
                
               
                
                
               
                </div>
                <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-primary relative">
                <span className="bg-primary text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                </span>
                
                
               
                <PricingTemplate {...second} finalArr={finalArr} onClick={onClickLocalStorageHandler.bind(null, '66e3edbe001f439adee69a88')}/>
               
              
                
                </div>


                <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                
               
                
                <PricingTemplate {...third} finalArr={finalArr} onClick={onClickLocalStorageHandler.bind(null, '66e3edbe001f439adee69a89')}/>
              
               
                
                
                </div>





            </div>
        </div>
        </div>
    </section>

    























 {/* Mobile Section */}




<section className="text-gray-700 body-font w-full py-4 overflow-hidden border-t border-b-2  border-gray-200 px-80 max-2xl:px-40 max-xl:px-10 max-lg:block hidden">
<div className="container  py-16 mx-auto">
   <div className="text-center mb-12">
       <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  mb-4">
           Choose Your Package!
       </h2>
       <div className="flex mt-6 justify-center">
           <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
       </div>
   </div>
<div className="flex flex-wrap">
   <div className="lg:w-1/4 mt-48 hidden lg:block">
       <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
       <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">
       Annual Accounts

       </p>
       <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
       Companies House Submission
       </p>
       <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
       Corporation Tax

       </p>
       <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
       CT600 Submission with HMRC

       </p>
       <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
       Tax consultation

       </p>
       <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
       Director Payroll

       </p>
       {/* <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
           Brooklyn helvetica
       </p>
       <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
           Long Feature Two
       </p>
       <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
           Feature One
       </p> */}
       </div>
   </div>
   <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg  ">
       <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
       <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
           <h3 className="tracking-widest">Basic</h3>
           <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
           £99

           <span className="text-gray-600 text-base ml-1">+ VAT</span>
           </h2>
           <span className="text-sm text-gray-600">{"Turnover < 25K"}</span>
       </div>
       {/* <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
           Schlitz single-origin
       </p> */}
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Annual Accounts
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Companies House Submission
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Corporation Tax
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       {/* <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
           Feature
       </p> */}
       <p className="text-gray-600 text-center h-12 flex items-center justify-between px-4">
       CT600 Submission with HMRC
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Tax consultation 
           <svg
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2.2"
           className="w-5 h-5 text-red-500"
           viewBox="0 0 24 24"
           >
           <path d="M18 6L6 18M6 6l12 12" />
           </svg>
       </p>
       <p className="text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Director Payroll
           <svg
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2.2"
           className="w-5 h-5 text-red-500"
           viewBox="0 0 24 24"
           >
           <path d="M18 6L6 18M6 6l12 12" />
           </svg>
       </p>
       {/* <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
           <svg
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2.2"
           className="w-5 h-5 text-gray-500"
           viewBox="0 0 24 24"
           >
           <path d="M18 6L6 18M6 6l12 12" />
           </svg>
       </p>
       <p className="text-gray-600 text-center h-12 flex items-center justify-center">
           <svg
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2.2"
           className="w-5 h-5 text-gray-500"
           viewBox="0 0 24 24"
           >
           <path d="M18 6L6 18M6 6l12 12" />
           </svg>
       </p>
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
           <svg
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2.2"
           className="w-5 h-5 text-gray-500"
           viewBox="0 0 24 24"
           >
           <path d="M18 6L6 18M6 6l12 12" />
           </svg>
       </p> */}
       <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
           <Link href={'/cart'} onClick={onClickLocalStorageHandler.bind(null, 'pkg1')}>
           <button className="flex items-center justify-center text-secondary bg-primary/90 border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary rounded">
           Buy Now
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               className="w-4 h-4 ml-1 mt-1"
               viewBox="0 0 24 24"
           >
               <path d="M5 12h14M12 5l7 7-7 7" />
           </svg>
           </button></Link>
           <p className="text-xs text-gray-500 mt-3">
           Making tax filing affordable with 100% satisfaction and 30-day Money-Back guarantee.

           </p>
       </div>
       </div>
       <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-primary relative">
       <span className="bg-primary text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
           POPULAR
       </span>
       <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
           <h3 className="tracking-widest">Standard</h3>
           <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
           £149
           <span className="text-gray-600 text-base ml-1">+ VAT</span>
           </h2>
           <span className="text-sm text-gray-600">{'Turnover < 50K'}</span>
       </div>
       {/* <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
           Schlitz single-origin
       </p> */}
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Annual Accounts
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Companies House Submission
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-between px-4">
        Corporation Tax
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="text-gray-600 text-center h-12 flex items-center justify-between px-4">
       CT600 Submission with HMRC
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Tax consultation
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       
       <p className="text-gray-600 text-center h-12 flex items-center  justify-between px-4">
       Director Payroll
           <svg
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2.2"
           className="w-5 h-5 text-red-600 "
           viewBox="0 0 24 24"
           >
           <path d="M18 6L6 18M6 6l12 12" />
           </svg>
       </p>
       
       <div className="p-6 text-center border-t border-gray-300">
           <Link href={'/cart'} onClick={onClickLocalStorageHandler.bind(null, 'pkg2')}>
           <button className="flex items-center justify-center mt-auto text-secondary bg-primary/90 border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary rounded">
           Buy Now
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               className="w-4 h-4 ml-1 mt-1"
               viewBox="0 0 24 24"
           >
               <path d="M5 12h14M12 5l7 7-7 7" />
           </svg>
           </button></Link>
           <p className="text-xs text-gray-500 mt-3">
           Making tax filing affordable with 100% satisfaction and 30-day Money-Back guarantee.

           </p>
       </div>
       </div>
       <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
       <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
           <h3 className="tracking-widest">Premium</h3>
           <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
           £249

           <span className="text-gray-600 text-base ml-1">+ VAT</span>
           </h2>
           <span className="text-sm text-gray-600">{'Turnover < 100K'}</span>
       </div>
       {/* <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
           Schlitz single-origin
       </p> */}
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Annual Accounts
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Companies House Submission
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Corporation Tax
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       {/* <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
           Feature
       </p> */}
       <p className="text-gray-600 text-center h-12 flex items-center justify-between px-4">
       CT600 Submission with HMRC
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Tax consultation 
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       <p className="text-gray-600 text-center h-12 flex items-center justify-between px-4">
       Director Payroll
           <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={3}
               className="w-3 h-3"
               viewBox="0 0 24 24"
           >
               <path d="M20 6L9 17l-5-5" />
           </svg>
           </span>
       </p>
       
       <div className="p-6 text-center border-t border-gray-300">
           <Link href={'/cart'} onClick={onClickLocalStorageHandler.bind(null, 'pkg3')}>
           <button className="flex items-center justify-center text-secondary bg-primary/90 border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary rounded">
           Buy Now
           <svg
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               className="w-4 h-4 ml-1 mt-1"
               viewBox="0 0 24 24"
           >
               <path d="M5 12h14M12 5l7 7-7 7" />
           </svg>
           </button>
           </Link>
           <p className="text-xs text-gray-500 mt-3">
           Making tax filing affordable with 100% satisfaction and 30-day Money-Back guarantee.

           </p>
       </div>
       </div>
   </div>
</div>
</div>
</section>

</>





  )
}


















//onClickLocalStorageHandler.bind(null, '66e3edbe001f439adee69a87')