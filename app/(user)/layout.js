"use client";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Link from "next/link";
import { createContext, useRef } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export const TawkContext = createContext();

export default function RootLayout({ children }) {
	const tawkMessengerRef = useRef();
	const handleMaximize = () => {
		tawkMessengerRef.current.maximize();
	};

	return (
		<>
			<TawkContext.Provider value={handleMaximize}> {children} </TawkContext.Provider>
			<Link href={"https://wa.me/447723143223"} target="_blank"> <IoLogoWhatsapp className="fixed size-16 right-5 bottom-28 hover:cursor-pointer hover:scale-110 text-green-500 z-50 " /> </Link>
			<TawkMessengerReact ref={tawkMessengerRef} propertyId="667e5ad19d7f358570d4466f" widgetId="1i1ep5goa" />
		</>
	);
}
