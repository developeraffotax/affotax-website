'use client'

import { useFormStatus } from "react-dom";

export default function FormBtn({onClick}) {
    const { pending, data, method, action } = useFormStatus();
    return <button onClick={onClick} disabled={pending} className={`drop-shadow-md transition-all inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-md font-semibold  active:scale-95 ${pending ? 'hover:cursor-not-allowed' : null}`} > {pending ? 'Sending...!!' : 'Send Message'} </button>
}