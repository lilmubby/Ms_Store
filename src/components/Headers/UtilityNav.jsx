import React from 'react'
import { Link } from 'react-router-dom'

const UtilityNav = () => {
  return (
    <div>
      <button className='help_btn' >
        <i className="fa fa-question-circle" aria-hidden="true"></i>
      </button>

      
      <Link to={`cartpage`} className='cart_btn' >
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </Link>

      <button className='cta_btn'>
        Sign up
      </button>
    </div>
  )
}

export default UtilityNav