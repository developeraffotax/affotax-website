// "use client";

// import React, { useContext } from 'react';
// import HeroImg4 from '@/public/hero4.png';
// import Link from 'next/link';
// import { QuoteFormContext } from '@/app/(user)/layout';
// import Image from 'next/image';
// import { LiaStarSolid } from 'react-icons/lia';

// export default function HomeTop({ HeroSection }) {
//   const { heading, html } = JSON.parse(HeroSection);
//   const quoteContext = useContext(QuoteFormContext);

//   return (
//     <>
       

     

//       {/* Design 3: Text-left with bottom wave divider */}
//       <section className="w-full relative bg-gradient-to-r from-blue-50 via-white to-purple-50 overflow-hidden pt-24 pb-32 px-6 sm:px-10 md:px-16 lg:px-24">
//         <div className="  flex flex-col lg:flex-row items-center justify-between gap-16">
//           <div className="flex flex-col gap-6 text-left max-w-xl">
//             <h1 className="text-4xl sm:text-5xl font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: heading }} />
//             <div className="text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: html }} />
//             <div className="flex gap-4 mt-4">
//               <Link href="/services"><button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90">Services</button></Link>
//               <button onClick={quoteContext.showModal} className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition">Get a Quote</button>
//             </div>
//           </div>
//           <div>
//             <Image src={HeroImg4} alt="Hero" className="w-full h-auto" priority />
//           </div>
//         </div>
//         <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path fill="currentColor" className="text-blue-100" d="M0,0 C480,100 960,0 1440,100 L1440,150 L0,150 Z" />
//         </svg>
//       </section>
//     </>
//   );
// }