import React from 'react'

const PriceBox = ({priceTitle, priceContent, price, packageIncludes}) => {
  return (
    <div className='flex flex-row max-lg:flex-col mb-8 gap-8 items-end max-lg:items-center justify-start bg-gray-100 shadow-lg rounded-xl  p-8 w-[70%] max-lg:w-[90%]'>
        <div className='flex flex-col gap-2 '>
            <h3 className='text-xl font-semibold'>{priceTitle}</h3>
            <p className='text-md'>{priceContent}</p>

            <ul className='list-disc text-sm '>
            <h4 className='font-semibold text-md '>Package includes:</h4>

                {
                    packageIncludes.map((el) => <li key={Math.random() * 100} className='ml-4'> {el} </li>)
                }


                
                
            </ul>
        </div>

        <div className='flex flex-col items-center gap-2  '>
            <h3 className='text-2xl font-semibold'>{price}</h3>
            <button className='text-nowrap  ml-3 drop-shadow-md transition-all inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  '> Buy Now </button>
        </div>
    </div>
  )
}

export default PriceBox