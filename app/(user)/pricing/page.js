import React from 'react'
import ChoosePackage from '@/components/Home/Subpages/ChoosePackage/ChoosePackage'
import EmailPhone from '@/components/Home/Subpages/EmailPhone'
import { connectDB } from '@/lib/connectDB';
import PricingPage from '@/lib/Model/PricingPage/PricingPage';

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