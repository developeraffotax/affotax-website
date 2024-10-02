"use client";



import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const TopSection = ({ title, content }) => {


	return (
		<section className="w-full flex flex-col justify-center items-center     px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-8 max-lg:mt-0 relative    ">
			<div className="   flex  justify-center items-start gap-4  px-8 max-lg:px-0     ">
				<MdOutlineKeyboardDoubleArrowRight className="text-6xl text-orange-400 max-lg:hidden " />
				
				<h1 className="text-4xl  font-bold text-gray-900  mb-2 pb-4 ">
					<span className=" py-2 leading-relaxed max-lg:leading-[0.1] drop-shadow-md   text-center bg-gradient-to-br from-orange-400  to-orange-700 bg-clip-text  font-Montserrat text-4xl max-lg:py-0   font-bold text-transparent  lg:max-w-3xl ">
						{title}
					</span>
				</h1>
                
			</div>
			<span className=" bottom-0   rounded left-0 w-full h-1 bg-gradient-to-r from-orange-400  to-orange-700 max-lg:hidden  "></span>
		</section>
	);
};

export default TopSection;























{/* <h1 className=" py-4 leading-relaxed drop-shadow-md   text-center bg-gradient-to-br from-orange-400 via-orange-500 via-50% to-orange-700 bg-clip-text   text-2xl max-lg:py-0   font-semibold text-transparent font-poppins  lg:max-w-3xl lg:text-6xl">{title}</h1> */}
// px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-8 max-lg:mt-4

//            <div className="w-full pattern  flex  justify-center items-center gap-4   bg-gradient-to-br from-gray-50 to-slate-200 py-4 rounded-lg transform  shadow-[5px_5px_0px_0px_rgba(255,185,123)] border-2 border-orange-300 ">

//bg-white      py-2 rounded-full   transform  shadow-[5px_5px_0px_0px_rgba(255,185,123)] border-2 border-orange-300
