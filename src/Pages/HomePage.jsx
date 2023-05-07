import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'


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