"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import { createContext, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";












export const TawkContext = createContext();

export const CartContext = createContext();

export default function RootLayout({ children }) {



	const [cartItems, setCartItems] = useState(0);



	const tawkMessengerRef = useRef();
	const handleMaximize = () => {
		tawkMessengerRef.current.maximize();
	};

	return (
		<>	
			<CartContext.Provider value={{cartItems}}><Header /></CartContext.Provider>
			<div className="w-full p-0 mt-16 ">
			<TawkContext.Provider value={handleMaximize}> <CartContext.Provider value={{ setCartItems}}>{children}</CartContext.Provider> </TawkContext.Provider>
			<Link href={"https://wa.me/447723143223"} target="_blank"> <IoLogoWhatsapp className="fixed size-16 right-5 bottom-28 hover:cursor-pointer hover:scale-110 text-green-500 z-50 " /> </Link>
			<TawkMessengerReact ref={tawkMessengerRef} propertyId="667e5ad19d7f358570d4466f" widgetId="1i1ep5goa" />
			<NextTopLoader  color="#F27941" showSpinner={false} />
			</div>
			<Footer />
		</>
	);
}
