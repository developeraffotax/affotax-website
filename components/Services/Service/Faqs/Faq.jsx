import React from 'react'

const Faq = ({question, answer}) => {
  return (
    <li className='mb-4 list-decimal'>
        <h3 className='text-lg font-semibold '>
            {question}
        </h3>
        <p>
            {answer}
        </p>
    </li>
  )
}

export default Faq