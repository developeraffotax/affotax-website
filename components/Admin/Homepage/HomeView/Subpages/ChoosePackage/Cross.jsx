

export default function Cross({text='', index}) {

    const isEven = index % 2 === 0;
    
    return (
        <p className={`${isEven ? 'bg-gray-100' : 'bg-white'} text-gray-600 text-center h-12 flex items-center ${text.length === 0 ? 'justify-center' : 'justify-between'} px-4`}>
            {text}
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    className="w-5 h-5 text-red-500"
                    viewBox="0 0 24 24"
                    >
                    <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </p>
    )
}