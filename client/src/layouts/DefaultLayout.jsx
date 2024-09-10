import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'

const DefaultLayout = () => {
  return (
    <div className='bg-[#f5f5f5]'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout