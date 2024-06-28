"use client";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function RootLayout({ children }) {
	return (
		<>
            
			{children}
            <Link href={'https://wa.me/447723143223'} target="_blank"><IoLogoWhatsapp className="fixed size-16 right-5 bottom-28 hover:cursor-pointer hover:scale-110 text-green-500 z-50 "/></Link>
			<TawkMessengerReact propertyId="667e5ad19d7f358570d4466f" widgetId="1i1ep5goa" />
		</>
	);
}
