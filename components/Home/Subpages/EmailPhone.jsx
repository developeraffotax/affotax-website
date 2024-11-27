'use client'

import React, { useContext } from 'react';

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import Link from 'next/link';
import { QuoteFormContext, TawkContext } from '@/app/(user)/layout';

const contactArr = [{name: 'Phone', icon: <LuPhoneCall className='scale-125 mr-3'/> , link:'tel:02081446811',  value: '020 8144 6811', timings: '07:00 - 18:00 | Monday to Friday' }, {name: 'Email', icon: <MdOutlineMailOutline className=' scale-125 mr-2'/> ,link: 'mailto:info@affotax.com', value: 'info@affotax.com', timings: '07:00 - 18:00 | Monday to Friday' }, {name: 'Whatsapp', icon: <FaWhatsapp  className='text-green-500 scale-125 mr-2'/> ,link: 'https://wa.me/447723143223', value: '+44 7723 143223', timings: '07:00 - 18:00 | Monday to Friday' }]


const EmailPhone = () => {

    
    const handleMaximize = useContext(TawkContext);
    const quoteContext = useContext(QuoteFormContext)
    return (
        <section className=' w-full bg-[#2C3B58] px-80 max-2xl:px-40 max-xl:px-10'>
            <div className=' w-full '>
            <div className='flex flex-col justify-center items-center'>
            <div className=' container mx-auto  flex justify-around items-center py-10 w-full border-b-2     max-lg:flex-col max-lg:gap-2   '>
                <div className='flex items-center justify-center  '>
                    <h3 className='text-3xl text-secondary font-semibold z-20 max-lg:text-2xl relative text-center'>
                        Speak to one of our expert team members
                        <svg className='fill-primary w-12 inline-block ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/></svg>
                    </h3>
                    {/* <IoArrowRedoSharp className='z-10 scale-[5] text-center  rotate-[70deg] mt-4 absolute -right-12 top-4 text-primary/90 max-lg:hidden  '/> */}
                    {/* <div className='w-12 flex items-center  mt-2 ml-1 '>
                    <svg className='fill-primary ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/></svg>
                    </div> */}
                </div>
                <div>
                <button onClick={handleMaximize}className='drop-shadow-md transition-all inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  '> Live Chat </button>
                <button onClick={quoteContext.showModal} className='ml-3 drop-shadow-md transition-all inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  '> Get a Quote </button>
                </div>
            </div>

            <div className=' container mx-auto w-full py-12 '>
                <ul className='flex justify-around  items-center w-full max-lg:flex-col max-lg:gap-8'>
                    {
                        contactArr.map((el) => {
                            return (
                                <li key={el.name} className='flex flex-col justify-center gap-2 items-center p-4 border-t-0 border-b-0 border-r-primary/60 border-l-primary/60  border-2 rounded-xl  '>
                                    <h2 className='text-primary font-semibold text-2xl  '>{el.name}</h2>
                                    <Link href={el.link}>
                                    <div className='flex justify-center font-semibold  items-center gap-1 text-secondary text-xl hover:scale-105 transition-transform'>
                                        {el.icon}
                                        <h3>{el.value}</h3>
                                    </div>
                                    </Link>
                                    <p className='text-gray-200'>{el.timings}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
            </div>
        </section>
    )
};

export default EmailPhone;






//px-60 max-2xl:px-40 max-xl:px-10  max-lg:px-8























// import React from 'react';

// import { FaWhatsapp } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { LuPhoneCall } from "react-icons/lu";
// import Link from 'next/link';

// const contactArr = [{name: 'Phone', icon: <LuPhoneCall /> , link:'tel:2081446811',  value: '020 8144 6811', timings: '07:00 - 18:00 | Monday to Friday' }, {name: 'Email', icon: <MdOutlineMailOutline className='mt-1'/> ,link: 'mailto:info@affotax.com', value: 'info@affotax.com', timings: '07:00 - 18:00 | Monday to Friday' }, {name: 'Whatsapp', icon: <FaWhatsapp /> ,link: 'https://wa.me/447723143223', value: '+44 7723 143223', timings: '07:00 - 18:00 | Monday to Friday' }]



// const EmailPhone = () => {
//     return (
//         <div className='flex flex-col justify-center items-center  w-full  bg-slate-100 '>
//             <div className='flex justify-between items-center py-8 w-full border-b-2 border  px-60 max-2xl:px-40 max-xl:px-20  max-lg:px-8  max-lg:flex-col max-lg:gap-2  '>
//                 <div>
//                     <h3 className='text-2xl text-tertiary font-semibold '>
//                         Speak to one of our expert team members
//                     </h3>
//                 </div>
//                 <div>
//                 <button className='drop-shadow-md transition-all inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  '> Get a Quote </button>
//                 </div>
//             </div>

//             <div className='w-full py-8 px-60 max-2xl:px-40 max-xl:px-20  max-lg:px-8'>
//                 <ul className='flex justify-between  items-center w-full max-lg:flex-col max-lg:gap-2'>
//                     {
//                         contactArr.map((el) => {
//                             return (
//                                 <li key={el.name} className='flex flex-col justify-center items-center '>
//                                     <h2 className='text-primary font-medium '>{el.name}</h2>
//                                     <Link href={el.link}>
//                                     <div className='flex justify-center items-center gap-1 text-black '>
//                                         {el.icon}
//                                         <h3>{el.value}</h3>
//                                     </div>
//                                     </Link>
//                                     <p className='text-gray-600'>{el.timings}</p>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// };

// export default EmailPhone;






// //px-60 max-2xl:px-40 max-xl:px-10  max-lg:px-8