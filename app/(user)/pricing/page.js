import React from 'react'
import ChoosePackage from '@/components/Home/Subpages/ChoosePackage/ChoosePackage'
import EmailPhone from '@/components/Home/Subpages/EmailPhone'
import { connectDB } from '@/lib/connectDB';
import PricingPage from '@/lib/Model/PricingPage/PricingPage';


export const metadata = {
	title: 'Pricing Page | Affotax',
	description: '',
   metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/pricing`, },}


const PricingPageServer = async () => {


  const db = await connectDB();

		const pricingPage = await PricingPage.findOne();


  return (
    <>
        <ChoosePackage pricingPage={JSON.stringify(pricingPage)}/>
        <EmailPhone />
    </>
  )
}

export default PricingPageServer