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


export default function Manchester() {
  return (
    <main className="w-full  flex flex-col items-center justify-between   max-lg:p-0">
        {/* HOME TOP */}
        <section className=' text-gray-600 w-full bg-slate-50 pt-8 px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8 bgImage'>
            <div className='container mx-auto '>
            <div className=' flex pb-24  flex-row max-lg:flex-col  max-lg:px-4 max-lg:py-8  items-center  justify-between  '>
                <div className='items-start pt-10 max-lg:pt-0 w-[50%] max-w-2xl text-left  flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 '>
                    <h1 className=' text-5xl  max-lg:text-4xl mb-4 font-bold  text-tertiary max-lg:text-left'>  Online Chartered Accountants in Manchester

                    </h1>
                    <p className='mb-8 leading-relaxed font-semibold text-tertiary/[70] text-xl max-lg:text-lg'> At Affotax, an expert accountancy company, we are a team of qualified chartered accountants providing services in the North West – Manchester. We understand what it's like to run a business in the UK; chasing dreams and seizing opportunities cannot be harder. However, having us by your side, you can focus on your businesses’ growth while we handle the nitty-gritty.<br /> 


Manage your accounts from anywhere in the world; our accountants in Manchester are dedicated to your financial prosperity. Put your trust in Affotax; let us handle your accounts and tax filing, and we will help you score a goal.

 </p>
                    <div className='flex justify-center text-nowrap '>
                        <Link href={'/services'}><button className='inline-flex text-secondary shadow-md shadow-black/15 bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold'> Services </button></Link>
                        <Link href={'/contact-us'}><button className='ml-4 inline-flex text-primary shadow-md shadow-black/15 bg-transparent border-0 py-2 px-6 outline-primary outline-1 outline hover:bg-primary hover:text-secondary rounded-md text-lg font-semibold'> Get a Quote </button></Link>
                    </div>
                </div>

                <div className=' w-[50%]  max-lg:w-full  max-lg:mb-4 scale-125'>
                    <img
                        className='object-cover object-center rounded  drop-shadow-xl '
                        alt='hero'
                        src={HeroImg.src}
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
                Why choose our accountants in Manchester?

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
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
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
                <FcDataSheet className='scale-150'/>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Customised solution

                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                At Affotax, we believe one size does not fit all. Our priority is understanding what your business requires and crafting customised solutions that align with your business requirements. Whether you are a start-up or an established company, our chartered accountants in Manchester have got the expertise to provide a customised solution for your unique business needs.

                </h4>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
                />
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
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
                <FcBullish className='scale-150'/>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Transparency & integrity

                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                Transparency and integrity are at the core of everything we do; put your trust in Affotax. We are delighted to provide honest advice and transparent communication throughout the process. Our Manchester accountants always provide you with insights on where you stand, providing peace of mind and confidence in your financial decisions. 

                </h4>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
                />
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
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
                <FcOk className='scale-150'/>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Responsive support

                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                We understand how important time is to you as a business owner. That is why we are proud of ourselves for being responsive and accessible whenever you want. Whether you need an answer to a question, or have an urgent issue or concern, our dedicated chartered accountants in Manchester are just a click away to provide expertise solutions.

                </h4>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                    <path
                    d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg> */}
                <FcCurrencyExchange className='scale-150'/>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Value for money

                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                We at Affotax understand how businesses can be expensive, that is why we provide exceptional value to your money. Our prices are affordable while our services are outstanding, ensuring you get the best possible return on your investment. With our online chartered accountants in Manchester, you get more bang for the buck, so why wait? Get a quote now!
                </h4>
                </div>
            </li>
            </ul>
        </div>
    </section>






        {/* WHY CHOOSE US */}

        <section className="text-gray-600 body-font px-80 max-2xl:px-40 max-xl:px-10  max-lg:px-8">
        <div className="container px-5 py-12 mx-auto">
            <div className="text-center mb-16">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                What can our Manchester accountants do for you?

                </h1>
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
                    <Image src={Tax}  cover="true"  />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-primary text-lg title-font font-medium mb-3">
                    Tax Advisory and Planning

                    </h2>
                    <p className="leading-relaxed text-base">
                    Our tax advisors in Manchester specialize in strategic tax planning to minimize your liabilities and maximize your savings. We stay updated with the latest tax laws to provide you with accurate advice and efficient tax solutions.

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
                    Bookkeeping and VAT Returns

                    </h2>
                    <p className="leading-relaxed text-base">
                    Our Manchester accountants ensure that your bookkeeping is precise and up-to-date, allowing you to focus on your core business activities. We also handle VAT returns meticulously, ensuring timely submissions and compliance with HMRC regulations.

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
                    <Image src={Deadline}  cover="true"  />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-primary text-lg title-font font-medium mb-3">
                    Financial Reporting and Analysis



                    </h2>
                    <p className="leading-relaxed text-base">
                    We offer detailed financial reporting and analysis to give you a clear picture of your company's financial status. Our chartered accountants in Manchester convert complex data into actionable insights that drive informed decision-making.

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
                    Business Planning and Cash Flow Management

                    </h2>
                    <p className="leading-relaxed text-base">
                    Effective business planning and cash flow management are critical for sustaining growth. Our Manchester accountants work with you to create robust business plans and manage your cash flow efficiently, helping you navigate through financial challenges.

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
                    Payroll Services



                    </h2>
                    <p className="leading-relaxed text-base">
                    Managing payroll can be a complex and time-consuming task. Our accounting firms in Manchester provide comprehensive payroll services, ensuring your employees are paid accurately and on time while complying with all statutory requirements.

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
                    <Image src={Support}  cover="true"  />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-primary text-lg title-font font-medium mb-3">
                    Audit and Assurance

                    </h2>
                    <p className="leading-relaxed text-base">
                    Our chartered accountants in Manchester offer audit and assurance services to give you confidence in your financial statements. We provide an objective assessment of your financial records, enhancing credibility with stakeholders.

                    </p>
                    
                    </div>
                </div>
            </div>

        <div className=' mt-20  text-center items-center bg-slate-50 w-full rounded-xl p-12 max-lg:p-6 drop-shadow-md '>
            <h1 className=' title-font text-3xl font-semibold '>
            Contact with expert Accountants in Manchester

            </h1>
            <p className='mt-4 text-md '>
            For further assistance or to schedule a consultation, reach out to our team of Manchester accountants. We look forward to partnering with you to achieve your financial goals.

            </p>
            <Link href={'/contact-us'}><button className='drop-shadow-md transition-all  mt-4 inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  '> Get a Quote </button></Link>
                        
        </div>

        </div>

    </section>
    </main>
  );
}


