import React from 'react'

const Benefit = ({heading, paragraph}) => {
  return (
    <li className='mb-4 '>
        <h3 className='font-semibold inline '>{heading} : </h3>
        <p className='inline text-md '>{paragraph}</p>
    </li>
  )
}

export default Benefit