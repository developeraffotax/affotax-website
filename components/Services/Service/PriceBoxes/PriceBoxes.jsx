import React from 'react'
import PriceBox from './PriceBox'

const PriceBoxes = ({prices}) => {
  return (
    <section className='w-full px-60 max-2xl:px-40 max-xl:px-10 max-lg:p-0 '>
        <div className='mx-auto container flex flex-col max-lg:items-center  '>
            {
                prices.map((el) => <PriceBox {...el}/>)
            }
        </div>
    </section>
  )
}

export default PriceBoxes