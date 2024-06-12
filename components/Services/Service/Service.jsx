import React from 'react'
import TopSection from './TopSection'
import PriceBoxes from './PriceBoxes/PriceBoxes'
import Benefits from './Benefits/Benefits'
import Faqs from './Faqs/Faqs'


const Service = ({data}) => {
  return (
    <div className=''>
        <TopSection title={data.title} content={data.content}/>




        <PriceBoxes prices={data.prices}/>
         <Benefits benefitsTitle={data.benefitsTitle} benefits={data.benefits}/>
        <Faqs faqs={data.faqs}/>



    </div>
  )
}

export default Service