import React from 'react'

const TopSection = ({title, content}) => {
  return (
    <section className='w-full px-60 max-2xl:px-40 max-xl:px-10 max-lg:p-8 py-8'>
        <div className='container mx-auto flex flex-col justify-center items-start  '>
            <h2 className='text-3xl font-semibold '>
                {title}
            </h2>

            <p>
                {content}
            </p>
        </div>
    </section>
  )
}

export default TopSection