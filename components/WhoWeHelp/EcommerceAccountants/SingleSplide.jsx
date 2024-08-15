

import { FaCheck } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';


export default function SingleSplide({title, content, key}) {
    return (
        <div key={key} className="flex flex-col justify-center items-center gap-4">
                                                
                            <div className=" rounded-full bg-slate-200 relative drop-shadow-none bottom-3 right-3 z-10 w-24    aspect-square flex justify-center items-center text-4xl font-oswald font-semibold text-white">
                            <div className=" border-[0.25rem] bg-transparent  absolute border-orange-500 drop-shadow-md  w-full h-full  rounded-full  top-2 left-3 z-10 flex justify-center items-center">

                            <FaCheck className="text-orange-500 scale-125"/>
                            </div>
                            </div>
                       
                        <h3 className="font-semibold text-xl font-poppins ">{title}</h3>
                        <p className="text-sm text-center  max-w-72">{content}</p>
                    </div>
    )
}