import React from 'react'

const DetailText = () => {
  return (
    <div>
      <span className='detail_text_name'>Name</span>
      <span className='detail_text_description'>Description</span>
      <span className='detail_text_price'>Price</span>
      <button type='button' className='add_to_cart_btn'>Add to Cart</button>
    </div>
  )
}

export default DetailText