'use client'

import { sendMessage } from '@/actions/contact';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Instagram from '@/public/ig.png';
import Facebook from '@/public/fb.png';
import LinkedIn from '@/public/li.png';
import Whatsapp from '@/public/wa.png';
import Image from 'next/image';
import { useFormState } from "react-dom";
import { useSearchParams } from 'next/navigation'

import FormBtn from './FormBtn';
import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';


const contactDetails = [

  {
    label: "Email",
    value: "info@affotax.com",
    href: "mailto:info@affotax.com",
    icon: <FiMail className="w-5 h-5" />,
  },
  {
    label: "WhatsApp",
    value: "075 3718 8920",
    href: "https://wa.me/447537188920",
    icon: <FaWhatsapp className="w-5 h-5" />,
  },
  {
    label: "Phone",
    value: "075 3718 8920",
    href: "tel:+447537188920",
    icon: <FiPhone className="w-5 h-5" />,
  },

  {
    label: "Opening Hours",
    value: "Mon - Fri, 07:00 - 20:00",
    href: null,
    icon: <FiClock className="w-5 h-5" />,
  },
      {
    label: "Address",
    value: "240 Plashet Grove, London E6 1DQ",
    href: "https://maps.google.com/?q=240+Plashet+Grove,+London+E6+1DQ",
    icon: <FiMapPin className="w-5 h-5" />,
  },
];

const socialLinks = [
    { name: 'Whatsapp', href: 'https://wa.me/447537188920', icon: Whatsapp },
    { name: 'Instagram', href: 'https://www.instagram.com/affotax_/', icon: Instagram },
    { name: 'Facebook', href: 'https://www.facebook.com/affotax/', icon: Facebook },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/affotax/', icon: LinkedIn },
];
const ContactDetailsList = ({ dense }) => (
  <ul className={`flex flex-col ${dense ? "gap-4" : "gap-5"}`}>
    {contactDetails.map((item) => (
      <li key={item.label}>
        <div className="flex flex-row items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
            <span className="w-[18px] h-[18px]">{item.icon}</span>
          </span>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-black/40 font-medium">
              {item.label}
            </span>

            {item.href ? (
              <Link
                href={item.href}
                target="_blank"
                className={`${dense ? "text-sm" : "text-base"} font-medium text-black/80 hover:text-primary transition-colors`}
              >
                {item.value}
              </Link>
            ) : (
              <span
                className={`${dense ? "text-sm" : "text-base"} font-medium text-black/80`}
              >
                {item.value}
              </span>
            )}
          </div>
        </div>
      </li>
    ))}
  </ul>
);
const SocialRow = () => (
    <div className='flex flex-row items-center gap-3'>
        {socialLinks.map((s) => (
            <Link
                key={s.name}
                target='_blank'
                href={s.href}
                aria-label={s.name}
                className='flex items-center justify-center w-11 h-11 rounded-full bg-primary/5 border border-primary/10 transition-all  hover:bg-primary/20 hover:border-primary hover:scale-105 '
            >
                <Image src={s.icon} alt={s.name} className='w-5 h-5' />
            </Link>
        ))}
    </div>
);


const Form = () => {

    const [error, setError] = useState('');

    const [state, formAction] = useFormState(sendMessage, { success: false, message: '' });
    const formRef = useRef();

    const formActionHandler = async (formData) => {
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }

        try {
            // ✅ Get invisible reCAPTCHA token
            const token = await grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                { action: "submit" }
            );

            // ✅ Attach token to formData before sending to the server action
            formData.append("recaptchaToken", token);

            await formAction(formData);
            formRef.current?.reset();
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        }
    };


    return (
        <div className='flex flex-row max-lg:flex-col justify-center w-full gap-10 max-lg:gap-0'>

            {/* Desktop left column (hidden on mobile) */}
            <div className='flex flex-col w-[38%] max-lg:w-full max-lg:hidden'>
                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/5 text-primary w-max'>
                    Contact Us
                </span>
                <h2 className='text-[#23314E] text-4xl lg:text-5xl font-extrabold tracking-tight my-2'>
                    Get In Touch
                </h2>
                <p className='text-slate-600 text-base max-w-md leading-relaxed px-2'>
                                        Have questions? Fill out the form and our <span className="text-orange-500 font-semibold">expert team</span> will reach out shortly.

                </p>

                <div className='mt-10 pt-8 border-t border-black/10'>
                    <ContactDetailsList />
                </div>

                <div className='mt-10 pt-8 border-t border-black/10'>
                    <p className='text-xs uppercase tracking-wide text-black/40 font-medium mb-4'>Follow us</p>
                    <SocialRow />
                </div>
            </div>

            {/* Mobile header only (hidden on desktop) — shows first */}
            <div className='hidden max-lg:flex flex-col w-full  '>
                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/5 text-primary w-max mx-auto'>
                    Contact Us
                </span>
                <h2 className='text-[#23314E] text-4xl text-center font-extrabold tracking-tight my-2'>
                    Get In Touch
                </h2>
               <p className='text-slate-600 text-center text-sm px-8 leading-relaxed'>
                    Have questions? Fill out the form and our <span className="text-orange-500 font-semibold">expert team</span> will reach out shortly.
                    </p>
            </div>

            {/* Form panel (order-2 on mobile so it comes right after the header) */}
            <div className='relative  bg-white w-[62%] max-lg:w-full px-10 py-10 max-lg:px-6 max-lg:py-8   rounded-sm  max-lg:rounded-none max-lg:mt-8 overflow-hidden max-lg:order-2'>
                <span className='absolute top-0 left-0 w-full h-1.5 bg-primary'></span>

                <div className='mb-6'>
                    <h3 className='text-2xl font-semibold text-black/90'>Send us a message</h3>
                    <p className='text-sm text-black/50 mt-1'>We usually reply within a few hours.</p>
                </div>

                <form ref={formRef} action={formActionHandler} className='flex flex-col items-start gap-5'>

                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-5 w-full'>
                        <label className='flex flex-col gap-1.5 w-full'>
                            <span className='text-xs font-medium uppercase tracking-wide text-black/50'>Name</span>
                            <input className='px-4 py-3 bg-black/[0.03] rounded-lg w-full border border-black/10 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15' type='text' name='name' placeholder='Your full name' />
                        </label>

                        <label className='flex flex-col gap-1.5 w-full'>
                            <span className='text-xs font-medium uppercase tracking-wide text-black/50'>Email</span>
                            <input className='px-4 py-3 bg-black/[0.03] rounded-lg w-full border border-black/10 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15' type='email' name='email' placeholder='you@example.com' />
                        </label>
                    </div>

                    <label className='flex flex-col gap-1.5 w-full'>
                        <span className='text-xs font-medium uppercase tracking-wide text-black/50'>Service</span>
                        <select className='px-4 py-3 bg-black/[0.03] rounded-lg w-full border border-black/10 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15 classicArrow' name="service">
                            <option value="No Service Selected">Select Service</option>
                            <option value="Accounts">Accounts</option>
                            <option value="Corporation Tax">Corporation Tax</option>
                            <option value="Self Assessment">Self Assessment</option>
                            <option value="Payroll">Payroll</option>
                            <option value="VAT">VAT</option>
                            <option value="Company Formation">Company Formation</option>
                            <option value="Others">Others</option>
                        </select>
                    </label>

                    <label className='flex flex-col gap-1.5 w-full'>
                        <span className='text-xs font-medium uppercase tracking-wide text-black/50'>Message</span>
                        <textarea rows={5} className='px-4 py-3 bg-black/[0.03] rounded-lg w-full border border-black/10 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15 resize-none' name="message" placeholder='Tell us a bit about what you need help with'></textarea>
                    </label>

                    <input type='hidden' name='hidden' />

                    {state.message && <p className={`${state.success ? 'text-green-600' : 'text-red-600'} text-sm`}>{state.message}</p>}
                    {error && <p className='text-red-600 text-sm animate-bounce'>{error}</p>}

                    <div className='w-full pt-2'>
                        <FormBtn onClick={() => setError('')} />
                    </div>
                </form>
            </div>

   <div className='hidden max-lg:flex flex-col w-full max-lg:order-3 border-t'>
    <div className='bg-white  shadow-md overflow-hidden'>
        <div className='px-5 py-6'>
            <ContactDetailsList dense />
        </div>
        <div className='px-5 py-5 bg-primary/5 flex items-center justify-between'>
            <p className='text-xs uppercase tracking-wide text-black/40 font-medium'>Follow us</p>
            <SocialRow />
        </div>
    </div>
</div>
        </div>
    )
}

export default Form