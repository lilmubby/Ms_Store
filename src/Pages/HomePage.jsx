import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer'


const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomePage