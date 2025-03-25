"use client";


import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { ConfigProvider, Modal } from "antd";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import { createContext, useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { usePathname } from 'next/navigation'
import { PageTracker } from "@/lib/PageTracker";
import Clarity from '@microsoft/clarity';







export const QuoteFormContext = createContext();



export const TawkContext = createContext();

export const CartContext = createContext();

export default function RootLayout({ children }) {



	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
	  setIsModalOpen(true);
	};
	const handleOk = () => {
	  setIsModalOpen(false);
	};
	const handleCancel = () => {
	  setIsModalOpen(false);
	};


	
	const pathname = usePathname()



	useEffect(() => {

		PageTracker(pathname);


	}, [pathname])



	// MICROSOFT CLARITY INIT
	useEffect(() => {


		Clarity.init('q1dzb1ywc9');
		 



	}, [])










	const [cartItems, setCartItems] = useState(0);



	const tawkMessengerRef = useRef();
	const handleMaximize = () => {
		tawkMessengerRef.current.maximize();
	};

	return (
		<>	
			<QuoteFormContext.Provider value={{isModalOpen, showModal, handleOk, handleCancel}}>
			<CartContext.Provider value={{cartItems}}><Header /></CartContext.Provider>
			<div className="w-full p-0 mt-16 ">
			<TawkContext.Provider value={handleMaximize}> <CartContext.Provider value={{ setCartItems}}>{children}</CartContext.Provider> </TawkContext.Provider>
			<Link href={"https://wa.me/447723143223"} target="_blank" aria-label="whatsapp-button"> <IoLogoWhatsapp className="fixed size-16 right-5 bottom-28 hover:cursor-pointer hover:scale-110 text-green-500 z-50 " /> </Link>
			<TawkMessengerReact  ref={tawkMessengerRef} propertyId="667e5ad19d7f358570d4466f" widgetId="1i1ep5goa" />
			<NextTopLoader  color="#F27941" showSpinner={false} />


			<ConfigProvider theme={{ components: { Modal: { contentBg: '#f9fafb', borderRadiusLG: 24 } } }} >
			<Modal className="" width={800}   open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
			 	<QuoteForm  />
      		</Modal>

			  </ConfigProvider>
			</div>
			<Footer />
			</QuoteFormContext.Provider>

			
		</>
	);
}
