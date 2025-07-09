'use client'

import Link from 'next/link'
import React from 'react'
import PricingTemplate from './PricingTemplate';
import PricingTemplateMobile from './PricingTemplateMobile';

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
                <p className='text-base text-orange-400  font-Montserrat font-semibold '>Pricing & Plan</p>
                <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-Montserrat pt-2">
                    {title}
                </h2>
                <p className='text-sm font-Montserrat'>Making tax filing affordable with 100% satisfaction and 30-day Money-Back guarantee.</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
                </div>
            </div>
        <div className="flex flex-wrap">
            <div className="lg:w-1/4 mt-48 hidden lg:block">
                <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">

                {
                    finalArr.map((el, index) => {
                        const isEven = index % 2 === 0;
                        return  <p key={`${el}--${index}--pricing-user`} className={`${isEven ? 'bg-gray-100' : 'bg-white'} text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px`}> {el} </p>

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
   <p className='text-base text-orange-400  font-Montserrat font-semibold '>Pricing & Plan</p>
       <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  mb-4">
           {title}
       </h2>
       <p className='text-sm font-Montserrat'>Making tax filing affordable with 100% satisfaction and 30-day Money-Back guarantee.</p>

       <div className="flex mt-6 justify-center">
           <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
       </div>
   </div>
<div className="flex flex-wrap">
   <div className="lg:w-1/4 mt-48 hidden lg:block">
       <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">



       {
                    finalArr.map((el, index) => {

                        return  <p key={`${el}--${index}--mobile`} className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px"> {el} </p>

                    })


                }



       
     
       </div>
   </div>



   <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg  ">
       <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
       
       <PricingTemplateMobile {...first} finalArr={finalArr} onClick={onClickLocalStorageHandler.bind(null, '66e3edbe001f439adee69a87')}/>
       

       </div>

















       <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-primary relative">
       <span className="bg-primary text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
           POPULAR
       </span>
       

       <PricingTemplateMobile {...second} finalArr={finalArr} onClick={onClickLocalStorageHandler.bind(null, '66e3edbe001f439adee69a88')}/>
       
       </div>



















       <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
       
       
       
       <PricingTemplateMobile {...third} finalArr={finalArr} onClick={onClickLocalStorageHandler.bind(null, '66e3edbe001f439adee69a89')}/>
      
       
      
       </div>
   </div>
</div>
</div>
</section>

</>





  )
}


















//onClickLocalStorageHandler.bind(null, '66e3edbe001f439adee69a87')