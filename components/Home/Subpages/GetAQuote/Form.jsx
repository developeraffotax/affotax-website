'use client'

import { sendMessage } from '@/actions/contact';
 
import React, { useEffect, useRef, useState } from 'react'
 
import {  useFormState } from "react-dom";
 

import FormBtn from './FormBtn';


const Form = () => {


        const [error, setError] = useState('');


        
        const [state, formAction] = useFormState(sendMessage, {success:false, message: ''});
        const formRef = useRef();



        const formActionHandler = async (formData) => {



        

            const name = formData.get('name')
            const email = formData.get('email')
            const message = formData.get('message')





            if(name.length === 0 || email.length === 0 || message.length === 0) {
                setError('All the fields are required.');
            } else{
                
                await formAction(formData);

                
                
                formRef.current.reset();
                
            }
            
            return;

        }



  return (
    <div className='flex flex-row max-lg:flex-col justify-center w-full  gap-4 '>
         
        <div className=' bg-white w-full max-lg:w-full p-4 drop-shadow-xl rounded-2xl '>
            <form ref={formRef} action={formActionHandler}  className='flex flex-col  items-start gap-4'>
                <h2 className='w-full text-left font-bold text-lg '>Get a Quote</h2>
                <input className='px-2 py-1 bg-white rounded-lg w-full border-2 border-black/40 shadow-md shadow-black/10  outline-none focus:border-primary focus:shadow-primary/30' type='text' name='name' placeholder='Name*' />
                <input className='px-2 py-1 bg-white rounded-lg w-full border-2 border-black/40 shadow-md shadow-black/10 outline-none focus:border-primary focus:shadow-primary/30' type='email' name='email' placeholder='Email/Phone*'/>
                 
                <textarea  className='px-2 py-1 bg-white rounded-lg w-full border-2 border-black/40 shadow-md shadow-black/10 outline-none focus:border-primary focus:shadow-primary/30'  name="message" rows={4}   placeholder='Write your message*'></textarea>
                <input type='hidden' name='hidden' />
                {state.message && <p className={`${state.success ? 'text-green-600' : 'text-red-600'} text-sm`}>{state.message}</p>}

                {error && <p className='text-red-600 text-sm animate-bounce'>{error}</p>}
                <FormBtn onClick={() => setError('')}/>
            </form>
        </div>
    </div>
  )
}

export default Form