'use client'

import { useRouter } from 'next/navigation'



export default function CheckoutBtn() {

    const router = useRouter()

    
    return(
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3  border-b py-12 ">
                {/* <button
                    className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-orange-50 justify-center transition-all duration-500 hover:bg-orange-100">
                    <span className="px-2 font-semibold text-lg leading-8 text-orange-600">Add Coupon Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button> */}
                <button
                    onClick={() => router.push('/checkout')}
                    className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-orange-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-orange-700">Continue
                    to Payment
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
    )
}