import React from 'react'
import { Link } from 'react-router-dom'

const UtilityNav = () => {
  return (
    <div className=''>
      <button className='help_btn px-2 text-blue-600 hover:text-blue-500' >
        <i className="fa fa-question-circle" aria-hidden="true"></i>
      </button>

      
      <Link to={`cartpage`} className='cart_btn px-2 text-blue-600 hover:text-blue-500' >
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </Link>

      <button className='cta_btn ml-4 py-1 px-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-md'>
        Sign Up
      </button>
    </div>
  )
}

export default UtilityNav