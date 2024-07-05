import Link from "next/link";
import HeroImg from '@/public/hero.png'
import Tax from '@/public/tax.png'
import Experience from '@/public/experience.png'
import Deadline from '@/public/deadline.png'
import Award from '@/public/award.png'
import Fully from '@/public/fully.png'
import Support from '@/public/support.png'
import { FcBullish, FcCurrencyExchange, FcDataSheet, FcOk } from "react-icons/fc";
import Image from "next/image";
import { hero, icon1, icon2, icon3} from "@/public/assets/Scotland";


export default function Scotland() {
  return (
    <main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
        {/* HOME TOP */}
        <section className=' text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage'>
            <div className='container mx-auto '>
            <div className=' flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  '>
                <div className='items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 '>
                    <h1 className=' text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left'> Online  <br /> Chartered Accountants in Scotland

                    </h1>
                    <p className='mb-8  text-tertiary/[70] text-xl max-lg:text-lg'> Chartered Accountants in Scotland
We are chartered accountants providing accounts and tax filing services in Scotland and all over the UK. Our office is based in London, but the expert accountants at Affotax know the whole caboodle of the business world in Scotland. <br/> <br/>

 To be frank, not opting for our service is like living in Scotland and not visiting the mediaeval castles. Get in touch, and our chartered accountants in Scotland will serve you proper by managing your accounting and tax filing needs.

 </p>
                    <div className='flex justify-center text-nowrap '>
                        <Link href={'/services'}><button className='inline-flex text-secondary shadow-md shadow-black/15 bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold'> Services </button></Link>
                        <Link href={'/contact-us'}><button className='ml-4 inline-flex text-primary shadow-md shadow-black/15 bg-transparent border-0 py-2 px-6 outline-primary outline-1 outline hover:bg-primary hover:text-secondary rounded-md text-lg font-semibold'> Get a Quote </button></Link>
                    </div>
                </div>

                <div className=' w-[50%]  max-lg:w-full  max-lg:mb-4 scale-125'>
                    <Image
                        className='object-cover object-center rounded  drop-shadow-xl '
                        alt='hero'
                        src={hero}
                    />
                </div>
            </div>
            </div>
        </section>







        {/* HOW IT WORKS */}
        <section className="bg-slate-50 py-12 sm:py-16 lg:py-12 xl:py-12 w-full drop-shadow-lg px-80 max-2xl:px-40 max-xl:px-20  max-lg:px-8  ">
        <div className="mx-auto max-w-7xl px-4  max-lg:px-4">
            <div className="text-center mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Why choose our accountants in Scotland?

                </h1>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
                </div>
            </div>
            <ul className="mx-auto mt-12 grid grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
                <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
                />
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
                {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                    <path
                    d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg> */}
                <Image src={icon1} alt="scotland icon" className="p-2"/>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Experienced accountants

                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                Our team of Scotland accountants have 6+ years of experience in providing tax filing and accounting services all over the UK. They have the required knowledge of local tax regulations and financial best practices, ensuring satisfaction. Our accountants in Scotland have helped many businesses and individuals find their way through the complications of Scottish finance, now ready to serve you.
                </h4>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
                />
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
                {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                    <path
                    d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg> */}
                <Image src={icon2} alt="scotland icon" className="p-2"/>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Affordable prices

                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                Our prices are the most affordable. We understand and also recommend to pay less for accounting and tax filing services and save more. That's why we offer a whole smorgasbord of affordably priced accounting services, so you can choose what would best suit your requirements. Let’s find the perfect accounting solution for you and let us help you stay financially healthy without hurting your sporran!
                </h4>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
                />
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-200 group-hover:bg-gray-200">
                {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                    <path
                    d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg> */}
                <Image src={icon3} alt="scotland icon" className="p-2"/>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Improved financial decisions

                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                With our accountants in Scotland by your side, you will make informed financial decisions as your business growth is our success story. We provide clear financial data and expert advice to help you and your business grow. Our accountants in Scotland provide multiple services including tax planning and preparation, bookkeeping, Payroll, and company formation, etc.
                </h4>
                </div>
            </li>
            
            </ul>
        </div>
    </section>






        {/* WHY CHOOSE US */}

        <section className="text-gray-600 body-font px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8">
        <div className="container px-5 py-12 mx-auto ">
            
          <h2 className="text-3xl font-bold ">
          Get digital

          </h2>

          <p className="mt-4">
          In this digital world, it’s more important to turn your accounting and tax filing needs digital, as cloud-based accounting services offer many benefits, including:

          </p>

          <ul className="list-disc font-semibold mt-4">
            <li> Real-time access to financial data </li>
            <li> Improved collaboration amongst teams
            </li>
            <li> Automated tasks that free up valuable time
            </li>
            <li> Managing accounts and tax filing from wherever you want
            </li>
            <li> No more paperwork burden and many more benefits. </li>
          </ul>


            
            <h2  className="text-3xl font-bold mt-8">
            Our Scotland accountants provide their services to:

            </h2>
            <ul>
                {
                    ['Limited Companies', 'Micro-entities', 'LLPs', 'Partnerships', 'Freelancers', 'Self-employed professionals', 'Contractors, etc.'].map((el) => {
                        return <li key={el} className="font-semibold list-disc"> {el} </li>
                    })
                }
            </ul>


        </div>

    </section>
    </main>
  );
}



