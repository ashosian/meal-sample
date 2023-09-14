import React from 'react'

const Footer = () => {
  return (
    <div className='h-[10vh] bg-black text-white px-5 grid grid-cols-2'>
      <div>
        <p>© 2023 TheMealDB</p>
        <p className='flex gap-5'>Proudly built in the Nepal
          <img src="https://images.unsplash.com/photo-1634629513555-00ef0b0224a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="" width='30px' />
        </p>
      </div>

      <div>
        <img src="	https://www.themealdb.com/images/logo-tcdb.png" alt="" />
      </div>
    </div>
  )
}

export default Footer
