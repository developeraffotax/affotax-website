import Image from 'next/image'
import React from 'react'
import AboutUsImage from '@/public/about.png'




const AboutUs = () => {
  return (
    <section className='w-full px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-0 max-lg:pt-16 py-8 bg-primary/10   shadow-md drop-shadow-2xl shadow-gray-300 '>
        <div className='container mx-auto flex flex-col items-center gap-4 max-md:px-8'>
        <h2 className='text-primary text-6xl font-semibold '>About Us</h2>
        <div className='flex flex-col items-start'>
            <h3 className='text-bold text-3xl '>Who are we?</h3>
            <p className='text-lg 2xl:text-xl'>We at Affotax Ltd are a reliable UK-based accountancy firm that specialises in providing affordable accounting and tax filing services online for clients within the UK. We have a team of highly qualified and experienced professionals who are determined to provide a personalised accounting service to the small and medium-sized businesses in the UK. 

With over ten years of expertise in managing accounting and tax requirements, we at Affotax take pride in being the most reliable accountants in the UK. Our staff consists of experts with certifications in QBO and XERO, as well as UK tax and accounting advisors with experience in working with Companies House and HMRC. You can rely on us to handle all of your accounting and tax needs online because of our experience and knowledge, which will free up more time for you to concentrate on expanding your company.</p>
        </div>

        <div className='flex flex-row max-md:flex-col gap-4 items-start w-full'>
            <div className='flex flex-col items-start w-[40%] max-lg:w-full'>
                <h3 className='text-bold text-3xl '>Our commitment </h3>
                <p className='text-lg 2xl:text-xl'>We are dedicated to offering small and medium-sized businesses in the UK professional accounting services. Being one of the most reliable accounting companies in the UK is a reputation we have built on our dedication to providing top-notch services. Whether your company is new or well-established, Affotax can offer you the accounting assistance you want, to be successful. In order to be the best we can be, we are determined to providing exceptional customer service, going above and beyond, taking pleasure in what we do, being creative, and persistently challenging the status quo.</p>
            </div>

            <div className='w-[60%] max-lg:w-full rounded-2xl overflow-hidden mt-2'>
                <Image src={AboutUsImage} />
            </div>
        </div>

        <div className='flex flex-col items-start'>
            <h3 className='text-bold text-3xl '>Our customers</h3>
            <p className='text-lg 2xl:text-xl'>Our commitment to prioritising our customers is evident in the positive feedback we receive from them. We don't consider our job done until you're satisfied. So, why not see what our clients have to say about us?</p>
        </div>



        </div>

    </section>
  )
}

export default AboutUs