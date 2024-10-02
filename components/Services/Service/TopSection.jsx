'use client'

import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { PiArrowFatLineRightFill } from "react-icons/pi";

const TopSection = ({ title, content }) => {

    //let html = content.html || null;

    
    


    return (
        <section className="w-full flex justify-center items-center     px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-8 max-lg:mt-0  drop-shadow-md    ">
            

        
            <div className="   flex  justify-center items-center gap-4  px-8 bg-white      py-2 rounded-full   transform  shadow-[5px_5px_0px_0px_rgba(255,185,123)] border-2 border-orange-300 ">
            <PiArrowFatLineRightFill className="text-5xl text-orange-400 max-lg:hidden "/>
                <h1 className=" py-4 leading-relaxed drop-shadow-md   text-center bg-gradient-to-br from-orange-400 via-orange-500 via-50% to-orange-700 bg-clip-text   text-2xl max-lg:py-0   font-semibold text-transparent font-poppins  lg:max-w-3xl lg:text-4xl">{title}</h1>
                
               

                
            </div>
        </section>
    );
};

export default TopSection;



// px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-8 max-lg:mt-4 



//            <div className="w-full pattern  flex  justify-center items-center gap-4   bg-gradient-to-br from-gray-50 to-slate-200 py-4 rounded-lg transform  shadow-[5px_5px_0px_0px_rgba(255,185,123)] border-2 border-orange-300 ">