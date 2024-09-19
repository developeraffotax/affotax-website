import ContactUs from "@/components/Contact Us/ContactUs";
import EmailPhone from "@/components/Home/Subpages/EmailPhone";



export const metadata = {
	title: 'Get In Touch',
	description: 'Seeking help? Look no further!  Use our easy-to-use form to get in touch with us if you have any questions or are interested in our services. Contact us today!',
   metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/contact-us`, },}


export default function ContactPage() {
    return (
       <>
         <ContactUs />
         <EmailPhone />
       </>
    );
  }
  