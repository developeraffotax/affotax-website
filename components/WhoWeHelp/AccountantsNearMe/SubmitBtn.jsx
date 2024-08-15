'use client'

import { TbSend } from "react-icons/tb";
import { useFormStatus } from "react-dom";
import { InfinitySpin } from "react-loader-spinner";



export default function SubmitBtn() {


    const { pending, data, method, action } = useFormStatus();

    return <button type="submit"  className="shadow-md shadow-black/30  place-self-center flex flex-row w-[25%] max-lg:w-full hover:bg-[#ec7944] hover:scale-105 active:scale-95 transition-all   col-span-2 max-lg:col-span-1 bg-[#FF7F45] -mt-2 max-lg:mt-2 py-2 rounded-xl text-white font-semibold  justify-center items-center gap-1" >  {!pending ? <span className="flex justify-center items-center gap-1"><TbSend /> Submit</span> : 'Submitting...!!'}  </button>
}
