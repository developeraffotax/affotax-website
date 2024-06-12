import React from 'react'

const Backdrop = ({clickHandler}) => {
  return (
    <div className='w-[100vw] h-[100vh] fixed z-20 bg-black/15 ' onClick={clickHandler}>

    </div>
  )
}

export default Backdrop