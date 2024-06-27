import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";



export const metadata = {
  title: "The Affotax Accountants",
  description: "The Affotax Accountants | Making Tax Affordable",
};

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
        </body>
        
    </html>
  );
}
