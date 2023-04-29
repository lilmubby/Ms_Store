import React from 'react'
import SearchBox from '../Headers/SearchBox'
import UtilityNav from '../Headers/UtilityNav'
import Navigation from '../Headers/Navigation'

import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
      <img src={logo} alt='Logo' className='pry_logo' />
      <Navigation />
      <UtilityNav />
      <SearchBox />
    </header>
  )
}

export default Header