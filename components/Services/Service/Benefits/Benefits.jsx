import React from 'react'
import Benefit from './Benefit'

const Benefits = ({benefitsTitle, benefits}) => {
  return (
    <section className='w-full px-60 max-2xl:px-40 max-xl:px-10 max-lg:p-0 py-4'>
        <div className='container mx-auto '>
        <div>
        <h2 className='text-4xl font-semibold mb-4'>{benefitsTitle}</h2>
        </div>

        <div>
            <ul>
                {
                    benefits.map((el) => <Benefit key={el.heading} {...el}/>)
                }
            </ul>
        </div>
        </div>
    </section>
  )
}

export default Benefits