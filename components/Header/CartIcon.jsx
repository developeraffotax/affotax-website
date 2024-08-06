'use client'

import Link from "next/link";
import { BsCartCheck } from "react-icons/bs";




export default function CartIcon({cartContext}) {

















	return (
		<div className="absolute top-8 right-12">
                {cartContext.cartItems !== 0 ? <span className="rounded-full bg-white text-orange-400 absolute w-5 h-5 flex justify-center items-center -top-4 -right-4 p-2 z-50"> {cartContext.cartItems} </span> : null}
			<Link href={"/cart"}>
				<BsCartCheck className="scale-150 transition-all  text-white  cursor-pointer hover:scale-[2]" />
			</Link>
		</div>
	);
}
