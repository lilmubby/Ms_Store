import React from 'react'

const DetailText = ({ id, name, description, price }) => {
  return (
    <div>
      <span className='detail_text_name'>{name}</span>
      <span className='detail_text_description'>{description}</span>
      <span className='detail_text_price'>{price}</span>
      <button type='button' className='add_to_cart_btn'>Add to Cart</button>
    </div>
  )
}

export default DetailText