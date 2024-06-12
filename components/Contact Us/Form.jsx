'use client'

import { sendMessage } from '@/actions/contact';
import Link from 'next/link'
import React, { useState } from 'react'
import Instagram from '@/public/ig.png';
import Facebook from '@/public/fb.png';
import LinkedIn from '@/public/li.png';
import Whatsapp from '@/public/wa.png';
import Image from 'next/image';

const Form = () => {

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [service, setService] = useState('');
        const [message, setMessage] = useState('');
        const [error, setError] = useState('');
        const [successMessage, setSuccessMessages] = useState('')
        const [isLoading, setIsLoading] = useState(false);

        //const [formState, formAction] = useFormState(sendMessage, {})



        const inputChangeHandler = (e) => {
            switch(e.target.name) {
                case 'service': return setService(e.target.value);
                case 'name' : return setName(e.target.value);
                case 'email' : return setEmail(e.target.value);
                case 'message' : return setMessage(e.target.value);
            }
        }



        const formActionHandler = async (event) => {
            let error = false;
            
            setError('');
            
            if(name.length === 0 || email.length === 0 || message.length === 0) {
                error = true;
                setError('All the fields are required.')
            }
            
            
            
            
            
            setIsLoading(true);

            if(!error) {
                
                try {
                    const res = await sendMessage(event);
                    console.log('response' , res);
                    
                    setIsLoading(false);
                    setSuccessMessages('Your query is submitted');

                    setName('');
                    setEmail('');
                    setService('');
                    setMessage('')


                } catch (err) {
                    setError('catch error block ')
                    setIsLoading(false);
                }

                
            }


            return;





        }


  return (
    <div className='flex flex-row max-lg:flex-col justify-center w-full  gap-4'>
        <div className='flex flex-col w-[40%] max-lg:w-full gap-4 max-lg:hidden'>
            <h2 className='text-primary text-6xl font-semibold '>Get In Touch</h2>
            <p>Fill out the form and a member of our team will be in touch soon.</p>
            <Link href='https://wa.me/447723143223' className='flex flex-row w-10 items-center gap-4 font-semibold text-xl hover:text-primary '><Image src={Whatsapp} /> Whatsapp </Link>
            <Link href='https://www.instagram.com/affotax_/' className='flex flex-row w-10 items-center gap-4 font-semibold text-xl hover:text-primary '><Image src={Instagram} /> Instagram</Link>
            <Link href='https://www.facebook.com/affotax/' className='flex flex-row w-10 items-center gap-4 font-semibold text-xl hover:text-primary '><Image src={Facebook} /> Facebook</Link>
            <Link href='https://www.linkedin.com/company/affotax/' className='flex flex-row w-10 items-center gap-4 font-semibold text-xl hover:text-primary '><Image src={LinkedIn} /> LinkedIn</Link>
        </div>

        <div className='hidden flex-col w-[40%] max-lg:w-full gap-4 max-lg:flex mb-4'>
            <h2 className='text-primary text-5xl font-semibold '>Get In Touch</h2>
            <p>Fill out the form and a member of our team will be in touch soon.</p>
            <div className='grid grid-cols-2 gap-3 '>
            <Link href='https://wa.me/447723143223' className='flex flex-row w-10 items-center gap-4 font-semibold text-xl hover:text-primary '><Image src={Whatsapp} /> Whatsapp </Link>
            <Link href='https://www.instagram.com/affotax_/' className='flex flex-row w-10 items-center gap-4 font-semibold text-xl hover:text-primary '><Image src={Instagram} /> Instagram</Link>
            <Link href='https://www.facebook.com/affotax/' className='flex flex-row w-10 items-center gap-4 font-semibold text-xl hover:text-primary '><Image src={Facebook} /> Facebook</Link>
            <Link href='https://www.linkedin.com/company/affotax/' className='flex flex-row w-10 items-center gap-4 font-semibold text-xl hover:text-primary '><Image src={LinkedIn} /> LinkedIn</Link>
            </div>
        </div>
        <div className=' bg-white w-[60%] max-lg:w-full px-10 py-10 drop-shadow-xl rounded-2xl '>
            <form action={formActionHandler} className='flex flex-col  items-start gap-4'>
                <input className='px-4 py-3 bg-white rounded-lg w-full border-2 border-black/40 shadow-md shadow-black/10  outline-none focus:border-primary focus:shadow-primary/30' type='text' name='name' placeholder='Name' value={name} onChange={inputChangeHandler}/>
                <input className='px-4 py-3 bg-white rounded-lg w-full border-2 border-black/40 shadow-md shadow-black/10 outline-none focus:border-primary focus:shadow-primary/30' type='email' name='email' placeholder='Email' value={email} onChange={inputChangeHandler}/>
                <select className='px-4 py-3 bg-white rounded-lg w-full border-2 border-black/40 shadow-md shadow-black/10  outline-none focus:border-primary focus:shadow-primary/30' name="service" value={service} onChange={inputChangeHandler}> 
                    <option value="" disabled selected>Select Service</option>
                    <option value="Accounts" >Accounts</option>
                    <option value="Corporation Tax">Corporation Tax</option>
                    <option value="Self Assessment">Self Assessment</option>
                    <option value="Payroll">Payroll</option>
                    <option value="VAT">VAT</option>
                    <option value="Company Formation">Company Formation</option>
                    <option value="Others">Others</option>
                 </select>
                <textarea className='px-4 py-3 bg-white rounded-lg w-full border-2 border-black/40 shadow-md shadow-black/10 outline-none focus:border-primary focus:shadow-primary/30'  name="message" placeholder='Write your message' value={message} onChange={inputChangeHandler}></textarea>
                {error && <p className='text-red-600 text-sm '>{error}</p>}
                {successMessage && <p className='text-green-600 text-sm '>{error}</p>}
                <button className='drop-shadow-md transition-all inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-md font-semibold  active:scale-95  ' > Send Message </button>
            </form>
        </div>
    </div>
  )
}

export default Form