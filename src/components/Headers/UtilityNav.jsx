import React from 'react'

const UtilityNav = () => {
  return (
    <div>
      <button className='help_btn' >
        <i className="fa fa-question-circle" aria-hidden="true"></i>
      </button>
      <button className='cart_btn' >
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </button>

      <button className='cta_btn'>
        Sign up
      </button>
    </div>
  )
}

export default UtilityNav