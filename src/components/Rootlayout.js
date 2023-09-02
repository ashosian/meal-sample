import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'



const Rootlayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Rootlayout
