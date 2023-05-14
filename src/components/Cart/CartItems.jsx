import React from 'react'

const CartItems = (props) => {
  const {name, brand, price, quantity, img} = props


  return (
    <li>
      <img src={img} alt='' className='cart_img' />
      <span className=''>{name + " "}</span>
      <span className=''>{brand + " " }</span>
      <span className=''>{price + " "}</span>
      <span className=''>{quantity}</span>
      <span className=''></span>
    </li>
  )
}

export default CartItems