'use client'

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import Script from "next/script";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';



// export const metadata = {
//   title: "The Affotax Accountants",
//   description: "The Affotax Accountants | Making Tax Affordable",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
        <body>
          <Link href={'https://wa.me/447723143223'} target="_blank"><IoLogoWhatsapp color="" className="fixed size-16 right-5 bottom-5 hover:cursor-pointer hover:scale-110 text-green-500 z-50 "/></Link>
        <Header />
        <div className="  w-full p-0 mt-20 ">
        {children}
        </div>
        <Footer />

        
        <TawkMessengerReact
                propertyId="667e5ad19d7f358570d4466f"
                widgetId="1i1ep5goa"/>
        </body>
        
    </html>
  );
}


















{/* <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
              var s1=document.createElement("script");
              var s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/667e5ad19d7f358570d4466f/1i1ep5goa';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
        })();
        </script> */}