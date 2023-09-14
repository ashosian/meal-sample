import React from 'react'

const Contact = () => {
  return (
    <div className='bg-blue-gray-300 h-[80vh] grid grid-cols-3'>
      <div></div>
      <div className='space-y-5 flex flex-col items-center'>

        <p className='text-center font-bold text-white'>Contact</p>
        <p className='text-center text-white'>Email: thedatadb@gmail.com
        </p>
        <p>Related sites:</p>

        <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
      </div>
      <div></div>
    </div>
  )
}

export default Contact
