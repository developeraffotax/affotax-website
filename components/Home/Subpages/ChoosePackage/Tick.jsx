

export default function Tick({text='', index}) {


    const isEven = index % 2 === 0;

    return (
        <p className={` text-gray-600 text-center h-12 flex items-center justify-start gap-2 border-b  py-5 px-8 max-lg:px-4 `}>
                
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                    </span>
                    {text}
                </p>
    )
}







// export default function Tick({text='', index}) {


//     const isEven = index % 2 === 0;

//     return (
//         <p className={`${isEven ? 'bg-gray-100' : 'bg-white'} text-gray-600 text-center h-12 flex items-center  ${text.length === 0 ? 'justify-center' : 'justify-between'}  px-4`}>
                
//                     <span className="w-5 h-5 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
//                     <svg
//                         fill="none"
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={3}
//                         className="w-3 h-3"
//                         viewBox="0 0 24 24"
//                     >
//                         <path d="M20 6L9 17l-5-5" />
//                     </svg>
//                     </span>
//                     {text}
//                 </p>
//     )
// }