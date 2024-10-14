"use client"

import React, { useContext } from 'react'
import Tax from '@/public/tax.png'
import Experience from '@/public/experience.png'
import Deadline from '@/public/deadline.png'
// import Award from '@/public/award.png'
import Award from '@/public/consulting.png'
import Fully from '@/public/fully.png'
import Support from '@/public/support.png'
import Image from 'next/image'
import Link from 'next/link'
import DeadlineReminder from "@/public/deadline-reminder.png"
import SupportNew from "@/public/support-new.png"
import TaxSaving from "@/public/tax-saving.png"
import { QuoteFormContext } from '@/app/(user)/layout'





export default function WhyUs() {
    const quoteContext = useContext(QuoteFormContext)


  return (
    <section className="text-gray-600 body-font px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8">
        <div className="container px-5 py-12 mx-auto">
            <div className="text-center mb-16">
                <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Why Choose Affotax as Your Online Accountant?

                </h2>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
                </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                    {/* <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg> */}
                    {/* <img src={Tax.src} alt="tax"/> */}
                    <Image src={TaxSaving}  cover="true"  className='scale-150'/>
                    {/* <Image src={Tax}  cover="true"  /> */}
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-primary text-lg title-font font-medium mb-3">
                    Tax saving

                    </h2>
                    <p className="leading-relaxed text-base">
                    Our team of UK tax experts will collaborate with you to minimise your corporation and personal tax liability while adhering to the UK tax legislation. We will make sure to identify all allowances and expenses you're eligible for to reduce your tax burden.

                    </p>
                    
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
                    {/* <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <circle cx={6} cy={6} r={3} />
                        <circle cx={6} cy={18} r={3} />
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                    </svg> */}
                    <Image src={Award}  cover="true"  />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-primary text-lg title-font font-medium mb-3">
                    Free consultation

                    </h2>
                    <p className="leading-relaxed text-base">
                    Keep your financial data safe and compliant with GDPR. Send your bank statements directly to your online accountant, and manage your finances with confidence. Let's talk about your business needs and find the best solutions together.

                    </p>
                    
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
                    {/* <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                    </svg> */}
                    {/* <Image src={Deadline}  cover="true"  /> */}
                    <Image src={DeadlineReminder}  cover="true" className='scale-150' />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-primary text-lg title-font font-medium mb-3">
                    Deadline reminders



                    </h2>
                    <p className="leading-relaxed text-base">
                    Our email reminders ensure you never miss a deadline for your limited company accounts and company tax returns to be submitted to HMRC and Companies House. Stay informed and avoid late filing penalties, while focusing on running your business.

                    </p>
                    
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
                    {/* <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg> */}
                    <Image src={Experience}  cover="true"  />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-primary text-lg title-font font-medium mb-3">
                    Experience
                    </h2>
                    <p className="leading-relaxed text-base">
                    We're the UK's most reliable UK online accountants with 10+ years of expertise in handling accounting and tax necessities. Our team consists of specialists certified in XERO and QBO, UK accounting and tax consultants in dealing with HMRC and Companies House.

                    </p>
                    
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
                    {/* <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <circle cx={6} cy={6} r={3} />
                        <circle cx={6} cy={18} r={3} />
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                    </svg> */}
                    <Image src={Fully} cover="true" />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-primary text-lg title-font font-medium mb-3">
                    Fully accredited



                    </h2>
                    <p className="leading-relaxed text-base">
                    As authorised accountants and registered agents with HMRC and Companies House, we offer reliable and customised accounting services. Our commitment to excellence remains steadfast, and we strive to deliver top-notch service and support to all our clients.

                    </p>
                    
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-primary mb-5 flex-shrink-0">
                    {/* <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                    </svg> */}
                    {/* <Image src={Support}  cover="true"  /> */}
                    <Image src={SupportNew}  cover="true"  className='scale-150'/>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-primary text-lg title-font font-medium mb-3">
                    Support
                    </h2>
                    <p className="leading-relaxed text-base">
                    Our expert UK accountants offer free live chat and email support to guide you every step of the way. Whether you're facing HMRC notices or need help with compliance, we'll take care of the declaration process for you in full compliance with UK regulations.

                    </p>
                    
                    </div>
                </div>
            </div>

        <div className=' mt-20  text-center  flex-col flex items-center justify-center bg-slate-50 w-full  rounded-xl p-12 max-lg:p-6 drop-shadow-md '>
            <h2 className=' title-font text-3xl font-semibold '>
            Ready to chat with the UK's online accountants?

            </h2>
            <p className='mt-4 text-md  max-w-[600px] '>
            Send us a message today, or get a quote, our expert online accountants in the UK are ready to manage your accounting and tax filings with expertise.

            </p>
            <button onClick={quoteContext.showModal} className='drop-shadow-md transition-all  mt-4 inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  '> Get a Quote </button>
                        
        </div>

        </div>

    </section>

  )
}
