

export default function Tick() {
    return (
        <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
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
                </p>
    )
}